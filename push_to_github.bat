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
%GIT% commit -m "style: overhaul career tree into horizontal node paths with pastel minimal card UI"

echo Pushing to GitHub...
%GIT% branch -M main
%GIT% push -u origin main

echo Done!
