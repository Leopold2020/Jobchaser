# Vecka 5 – React-grunder 

## User stories
- Som användare vill jag kunna se en lista av jobb.
- Som användare vill jag se tydlig information om varje jobb (titel, företag, ort, typ av tjänst etc.).

## Teknikfokus
- Intro till React
- JSX
- Komponenter
- Props
- Listor
- Events
- Local state

## Uppgift
1. Skapa ett nytt React-projekt för JobChaser.
2. Lägg till en statisk lista med jobb som JavaScript-array. Använd data.js och SVG-bilder under /assets 
3. Skapa komponenter:
   - `JobList` som tar emot en lista av jobb via props och renderar dem.
   - `JobCard` som visar information om ett jobb.
4. Rendera listan av jobb i UI:
   - Använd `map` för att skapa en lista med `JobCard`-komponenter.
   - Använd lämpliga HTML-element och enkel styling (CSS eller valfritt UI-bibliotek).
5. Implementera konditionell rendering:
   - Om listan är tom ska texten "Inga jobb" visas.
6. Lägg till minst ett enkelt event (t.ex. en knapp på varje jobb som loggar något i konsolen eller markerar jobbet som "intressant").

## Teori / reflektionsfrågor
Besvara kortfattat i denna fil eller i en separat `theory-week-5.md`:
- Hur och varför uppstod React?
- Vad är JSX?
- Vad är en komponent i React?
- Vad är props och hur används de?
- Vad menas med "one-way data flow" i React?
- Hur kan man använda konditionell rendering i React?
- Vad menas med en återanvändbar komponent?
