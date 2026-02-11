# Vecka 10 – Autentisering, säkerhet och JWT

## User stories
- Som användare vill jag kunna skapa ett konto (signup) och logga in (signin).
- Som inloggad användare vill jag bara kunna se och manipulera mina egna jobb.
- Som utvecklare vill jag skydda känsliga routes i API:et med autentisering.

## Teknikfokus
- Autentisering med JWT
- Lösenordshantering (hashning)
- Middleware i Express
- Grundläggande säkerhetstänk (tokens, skyddade routes)

## Uppgift
1. Skapa auth-endpoints:
   - `POST /auth/signup` – skapa en ny användare:
     - Hasha lösenordet innan det sparas i databasen.
   - `POST /auth/signin` – logga in användare:
     - Verifiera lösenord.
     - Generera och returnera en JWT.
2. Skapa middleware för auth:
   - Läser `Authorization`-header med bearer token.
   - Verifierar JWT.
   - Lägger användarinfo på `req.user` om token är giltig.
3. Skydda relevanta routes:
   - T.ex. `POST/PUT/DELETE /jobs` får bara användas av inloggade användare.
   - Knyt skapade jobb till `req.user.id`.
4. Koppla frontend-formulären från `/signup` och `/signin`:
   - Skicka data till backend-auth-endpoints.
   - Spara JWT i frontend (t.ex. `localStorage`).
   - Skicka token i `Authorization`-header vid skyddade anrop.

## Teori / reflektionsfrågor
- Vad är skillnaden mellan autentisering och auktorisering?
- Vad är en JWT och vilka för- och nackdelar finns?
- Vilka risker finns kring hantering av tokens i frontend?
- Varför ska lösenord aldrig sparas i klartext?
