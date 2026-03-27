# Fix all WhatsApp emoji issues with clean text
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
        
        # Replace all emoji patterns with clean text
        $content = $content -replace "🚚 \*New Moving Quote Request - \w+\*", "New Moving Quote Request - $city"
        $content = $content -replace "👤 \*Name:\*", "Name:"
        $content = $content -replace "📧 \*Email:\*", "Email:"
        $content = $content -replace "📱 \*Phone:\*", "Phone:"
        $content = $content -replace "📍 \*From:\*", "From:"
        $content = $content -replace "🎯 \*To:\*", "To:"
        $content = $content -replace "📅 \*Move Date:\*", "Move Date:"
        $content = $content -replace "📦 \*Items:\*", "Items:"
        $content = $content -replace "📝 \*Message:\*", "Message:"
        $content = $content -replace "\*Submitted via MH27 Packers & Movers - \w+ Page\*", "Submitted via MH27 Packers & Movers - $city Page"
        
        Set-Content $filePath $content
        Write-Host "Fixed $city successfully"
    }
}

Write-Host "All city pages WhatsApp integration fixed with clean text!"
