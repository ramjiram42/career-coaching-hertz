@echo off
set GIT=C:\Users\raman\AppData\Local\GitHubDesktop\app-3.5.6\resources\app\git\cmd\git.exe

echo Initializing git...
%GIT% init

echo Configuring identity...
%GIT% config user.email "ram.ops@hertz.com"
%GIT% config user.name "Ram"

echo Adding remote...
%GIT% remote remove origin 2>nul
%GIT% remote add origin https://github.com/ramjiram42/career-coaching-hertz.git

echo Staging files...
%GIT% add .

echo Committing...
%GIT% commit -m "feat: add AI Career Analysis tab to Dashboard with RPA Solution Architect mapping and multi-domain journey results"

echo Pushing to GitHub...
%GIT% branch -M main
%GIT% push -u origin main

echo Done!
