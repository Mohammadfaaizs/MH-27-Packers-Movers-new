# Fix WhatsApp Emoji Issues - Simple Text Replacement
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
        
        # Replace emojis with text alternatives
        $content = $content -replace "🚚", "Truck"
        $content = $content -replace "👤", "Person"
        $content = $content -replace "📧", "Email"
        $content = $content -replace "📱", "Phone"
        $content = $content -replace "📅", "Date"
        $content = $content -replace "🏠", "Home"
        $content = $content -replace "📍", "Location"
        $content = $content -replace "🎯", "Target"
        $content = $content -replace "📦", "Package"
        $content = $content -replace "📝", "Note"
        
        Set-Content $filePath $content
        Write-Host "Fixed $city successfully"
    }
}

Write-Host "Emoji fixes completed for all city pages!"
