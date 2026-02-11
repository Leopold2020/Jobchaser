# Vecka 6 – State, datahämtning och formulär

## User stories
- Som användare ska jag kunna filtrera jobb i listan baserat på en sökterm.
- Som användare vill jag kunna se när jobben laddas in.
- Som användare ska jag kunna lägga till ett jobb via ett formulär (lagras i local state).

## Teknikfokus
- `useState`
- `useEffect` för datahämtning
- Formulär
- Kontrollerade komponenter
- Enkel loading-state

## Uppgift
1. Lägg till ett sökfält ovanför jobblistan:
   - Använd `useState` för att lagra sökterm.
   - Filtrera jobblistan baserat på söktermen (t.ex. på jobbtitel eller företag).
2. Gör sökfältet till en kontrollerad komponent:
   - Värdet styrs av state, `onChange` uppdaterar state.
3. Flytta jobbdatan till en separat JSON-fil eller en utforska ett externt API.
4. Använd `useEffect` för att hämta jobben:
   - Visa en loader eller texten "Laddar jobb…" medan data hämtas.
   - Hantera ev. fel (t.ex. visa ett felmeddelande).
5. Skapa ett formulär för att lägga till ett nytt jobb:
   - Kontrollerade inputs (titel, företag, ort, typ).
   - Vid submit: lägg till jobbet i jobblistan (local state).
   - Töm formuläret efter lyckad submit.

## Teori / reflektionsfrågor
- Vad är state i React?
- Vad är skillnaden mellan state och props?
- Vad menas med en kontrollerad komponent?
- Vad är en callback handler i React-sammanhang?
- Vad menas med "lifting state up"?
- Vad är syftet med `useEffect`?
- Vad är syftet med dependency-arrayen i `useEffect`?
