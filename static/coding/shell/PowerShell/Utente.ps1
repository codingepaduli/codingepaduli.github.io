# crea la cartella avente lo stesso nome dell'oggetto "Utente"
New-Item -Name "Utente" -ItemType "Directory"

# Cambio cartella di lavoro
Set-Location "Utente"

# Permetto all'utente di inserire i valori da shell
$nomeUtente = Read-Host "Inserisci il nome utente"
$password   = Read-Host "Inserisci la password"
$email      = Read-Host "Inserisci la mail"

# Creo i tre file rappresentanti le proprietà del form
New-item -Name "Utente.txt"    -ItemType "File" -Value "$nomeUtente"
New-item -Name "password.txt"  -ItemType "File" -Value "$password"
New-item -Name "email.txt"     -ItemType "File" -Value "$email"

# Mostro all'utente i messaggi relativi la creazione dei tre file
Write-Host "Il file utente.txt è stato creato, ora contiene il valore $nomeUtente" -ForegroundColor red   -BackgroundColor Yellow
Write-Host "Il file password.txt è stato creato, ora contiene il valore $password" -ForegroundColor green -BackgroundColor blue
Write-Host "Il file email.txt è stato creato, ora contiene il valore $email"       -ForegroundColor white -BackgroundColor Cyan

# Torna alla cartella di lavoro dalla quale è stato lanciato lo script
Set-Location ".."
