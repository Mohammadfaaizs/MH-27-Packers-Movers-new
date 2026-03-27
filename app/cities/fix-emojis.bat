@echo off
echo Fixing WhatsApp emoji issues in all city pages...

for /d %%i in (*) do (
    if exist "%%i\page.jsx" (
        echo Processing %%i...
        powershell -Command "(Get-Content '%%i\page.jsx' -Raw) -replace '🚚 \*New Moving Quote Request - \w+\*', 'New Moving Quote Request - %%i' -replace '👤 \*Name:\*', 'Name:' -replace '📧 \*Email:\*', 'Email:' -replace '📱 \*Phone:\*', 'Phone:' -replace '📍 \*From:\*', 'From:' -replace '🎯 \*To:\*', 'To:' -replace '📅 \*Move Date:\*', 'Move Date:' -replace '📦 \*Items:\*', 'Items:' -replace '📝 \*Message:\*', 'Message:' -replace '\*Submitted via MH27 Packers \& Movers - \w+ Page\*', 'Submitted via MH27 Packers & Movers - %%i Page' | Set-Content '%%i\page.jsx'"
        echo Fixed %%i
    )
)

echo All city pages fixed!
pause
