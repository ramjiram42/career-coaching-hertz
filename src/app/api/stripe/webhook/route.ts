import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
// import Stripe from 'stripe'; // Simulated for MVP demonstration without env variables

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    
    // In production:
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // const event = stripe.webhooks.constructEvent(payload, signature, secret);
    
    const eventType = payload.type;

    if (eventType === 'customer.subscription.created' || eventType === 'customer.subscription.updated') {
      const subscription = payload.data.object;
      const stripeCustomerId = subscription.customer;
      
      // Upsert Subscription
      await prisma.subscription.updateMany({
        where: { stripeCustomerId },
        data: {
          stripeSubscriptionId: subscription.id,
          status: subscription.status,
          planTier: subscription.items.data[0].plan.nickname || 'Pro',
        }
      });
    }

    if (eventType === 'customer.subscription.deleted') {
      const subscription = payload.data.object;
      await prisma.subscription.updateMany({
        where: { stripeCustomerId: subscription.customer },
        data: { status: 'canceled' }
      });
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }
}
