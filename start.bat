@ECHO off
color 0a
mode con: cols=85 lines=30

ECHO Firstly we need to check dependencies
PAUSE 

call npm install
node index.js
PAUSE