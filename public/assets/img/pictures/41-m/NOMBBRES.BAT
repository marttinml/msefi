echo off 
set /a c=1
setlocal  ENABLEDELAYEDEXPANSION

cd C:\folder

for %%a in ("%~dp0\.") do set "parent=%%~nxa"
set "name=%%~na"
set "fname=%%a"

for %%a  in (*.bmp) do (


ren "%fname%" "!c!-%parent%.bmp"

echo _________ !c! 
set /a c=c+1
)


echo fua
-- 