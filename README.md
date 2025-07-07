1. Co robi hello-bot?
Nasłuchuje zdarzenia pull_request.opened.

Po otwarciu PR-a dodaje przyjazny komentarz („Dzięki za Pull Requesta! 🎉”).
    
Wymaga tylko uprawnienia Pull requests → Read & Write – zasada najmniejszych uprawnień.

2. Konfiguracja zmiennych środowiskowych
```
Nazwa	Wartość
APP_ID	numer App ID z ekranu ustawień
PRIVATE_KEY	zawartość pliku .pem (bez znaków nowej linii)
WEBHOOK_SECRET	sekret ustawiony w kroku rejestracji
NODE_ENV	production
```
W pliku .env.example są wszystkie klucze; skopiuj go do .env (ignorowanego przez git) i uzupełnij.

3. Lokalny test
# 1. Pobierz web-proxy do przekazywania webhooków
```
npx smee -u https://smee.io/⟨twój-kanał⟩ -t http://localhost:3000/
```
# 2. Uruchom bota
```
npm install
npm start
```
Po otwarciu PR-a w repozytorium z zainstalowaną aplikacją bot powinien skomentować PR-a