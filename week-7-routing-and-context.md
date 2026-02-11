# Vecka 7 – Routing och Context

## User stories
- Som användare vill jag kunna besöka sidan `/jobs` där jag ser listan av jobb.
- Som användare vill jag kunna besöka `/signup` där det finns ett formulär för att registrera konto.
- Som användare vill jag kunna besöka `/signin` där det finns ett formulär för inloggning.
- Som användare vill jag kunna växla mellan dark mode och light mode, och se valet slå igenom på alla sidor.

## Teknikfokus
- Routing med React Router (kodbaserad routing)
- Intro till filbaserad routing (konceptuellt/TanStack Router)
- Context API
- Globalt tema (dark/light)

## Uppgift
1. Installera och konfigurera React Router ELLER Tanstack Router i frontend-projektet.
2. Skapa följande routes:
   - `/jobs` – visar jobblistan från tidigare veckor.
   - `/signup` – visar ett registreringsformulär (ingen riktig backend-koppling ännu).
   - `/signin` – visar ett login-formulär.
3. Skapa en `Header`/`Nav`-komponent:
   - Länkar till `/jobs`, `/signup`, `/signin`.
   - Visas på alla sidor.
4. Skapa ett Theme Context:
   - Global state för `theme` (`"light"`/`"dark"`).
   - En knapp i headern/nav som växlar tema.
   - Tillämpa tema på hela appen (t.ex. via CSS-klasser på `body` eller en wrapper-komponent).
5. Förklara i kommentar eller kort text i slutet av filen hur filbaserad routing fungerar (t.ex. i Next/TanStack Router) och hur det skiljer sig från att definiera routes i kod.

## Teori / reflektionsfrågor
- Vad menas med routing i en webapp?
- Hur kan applicera kodbaserad routing vs. filbaserad?
- Vad är syftet med Context API?
- Vilket problem med props löser Context?
