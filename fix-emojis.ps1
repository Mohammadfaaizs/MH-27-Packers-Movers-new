# Fix WhatsApp Emoji Issues
$cityPages = @(
    "ahilyanagar", "akola", "amravati", "aurangabad", "beed", "buldhana", 
    "chandrapur", "dharashiv", "dhule", "gadchiroli", "gondia", "hingoli",
    "jalgaon", "jalna", "kolhapur", "nagpur", "nanded", "nandurbar", 
    "nashik", "osmanabad", "palghar", "parbhani", "raigad", "ratnagiri",
    "sangli", "satara", "sindhudurg", "solapur", "thane", "wardha", 
    "washim", "yavatmal", "yeotmal"
)

foreach ($city in $cityPages) {
    $filePath = "app\cities\$city\page.jsx"
    if (Test-Path $filePath) {
        Write-Host "Fixing $city..."
        
        $content = Get-Content $filePath -Raw
        
        # Replace emojis with Unicode escape sequences
        $content = $content -replace "🚚", "\u{1F69A}"
        $content = $content -replace "👤", "\u{1F464}"
        $content = $content -replace "📧", "\u{1F4E7}"
        $content = $content -replace "📱", "\u{1F4F1}"
        $content = $content -replace "📅", "\u{1F4C5}"
        $content = $content -replace "🏠", "\u{1F3E0}"
        $content = $content -replace "📍", "\u{1F4CD}"
        $content = $content -replace "🎯", "\u{1F3AF}"
        $content = $content -replace "📦", "\u{1F4E6}"
        $content = $content -replace "📝", "\u{1F4DD}"
        
        Set-Content $filePath $content
        Write-Host "Fixed $city successfully"
    }
}

Write-Host "Emoji fixes completed for all city pages!"
