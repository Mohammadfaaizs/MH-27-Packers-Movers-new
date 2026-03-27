@echo off
echo Fixing WhatsApp integration for all city pages...

setlocal enabledelayedexpansion

for /d %%i in (*) do (
    if exist "%%i\page.jsx" (
        echo Fixing %%i...
        
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '🚚 \*New Moving Quote Request - \w+\*', 'New Moving Quote Request - %%i' | Set-Content '%%i\page.jsx'"
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '👤 \*Name:\*', 'Name:' | Set-Content '%%i\page.jsx'"
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '📧 \*Email:\*', 'Email:' | Set-Content '%%i\page.jsx'"
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '📱 \*Phone:\*', 'Phone:' | Set-Content '%%i\page.jsx'"
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '📍 \*From:\*', 'From:' | Set-Content '%%i\page.jsx'"
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '🎯 \*To:\*', 'To:' | Set-Content '%%i\page.jsx'"
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '📅 \*Move Date:\*', 'Move Date:' | Set-Content '%%i\page.jsx'"
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '📦 \*Items:\*', 'Items:' | Set-Content '%%i\page.jsx'"
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '📝 \*Message:\*', 'Message:' | Set-Content '%%i\page.jsx'"
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '\*Submitted via MH27 Packers \& Movers - \w+ Page\*', 'Submitted via MH27 Packers & Movers - %%i Page' | Set-Content '%%i\page.jsx'"
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace 'https://wa.me/\?text=', '`$`{phoneNumber}`?text=`$`{message`}' | Set-Content '%%i\page.jsx'"
        
        echo Fixed %%i successfully
    )
)

echo WhatsApp integration fixes completed!
pause
