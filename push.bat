@echo off
cd /d "%~dp0"

echo ===============================
echo 🔄 Updating Git repository...
echo ===============================

git add .
git commit -m "Auto update from push.bat"
git pull origin main --rebase
git push origin mains

echo ===============================
echo ✅ Push complete!
echo ===============================

pause
