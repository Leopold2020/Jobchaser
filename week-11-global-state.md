# Vecka 11 – useReducer och globalt state med Zustand

## User stories
- Som användare vill jag kunna filtrera jobb efter flera villkor (t.ex. kategori, ort, fritext).
- Som användare vill jag att mina filterinställningar och inloggningsstatus ska gälla oavsett vilken sida jag är på.
- Som utvecklare vill jag strukturera mer komplex state-hantering på ett tydligt sätt.

## Teknikfokus
- `useReducer` för mer komplex state-logik
- Globalt state med Zustand
- Jämförelse med Context API

## Uppgift
1. Implementera avancerad filtrering av jobb:
   - Flera filter: t.ex. ort, kategori, anställningsform, fritext.
   - Använd `useReducer` för att hantera filter-state och actions (t.ex. `SET_TEXT_FILTER`, `SET_LOCATION`, `CLEAR_FILTERS`).
2. Introducera Zustand för globalt state:
   - Skapa en store för:
     - Inloggad användare och JWT.
     - Filtreringsinställningar för jobb.
   - Konsumera store i olika komponenter (t.ex. header, filterpanel, jobblista).
3. Låt tidigare Theme Context (dark/light) ligga kvar:
   - Så att appen visar både Context-lösning och Zustand-lösning.
4. (Frivilligt) Lägg till någon extra global funktionalitet:
   - T.ex. "favoritjobb" eller "sparade jobb" i Zustand.

## Teori / reflektionsfrågor
- När räcker lokal state (komponent-nivå) i React?
- När är Context API lämpligt och när blir det krångligt?
- Vilka fördelar har ett dedikerat state management-bibliotek (som Zustand eller Redux)?
- När är det motiverat att införa globalt state i ett projekt?
