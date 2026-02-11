# Vecka 9 – REST API och Drizzle ORM

## User stories
- Som klient (frontend) vill jag kunna hämta en lista av jobb från ett REST API.
- Som klient vill jag kunna skapa, uppdatera och ta bort jobb via API:et.
- Som klient vill jag kunna hantera användare (`users`) kopplade till jobb.

## Teknikfokus
- REST-arkitektur
- CRUD-endpoints i Express
- Drizzle ORM (CRUD mot Postgres)
- Felhantering i API

## Uppgift
1. Implementera REST-endpoints för `jobs`:
   - `GET /jobs` – hämta alla jobb.
   - `GET /jobs/:id` – hämta ett specifikt jobb.
   - `POST /jobs` – skapa ett nytt jobb.
   - `PUT` eller `PATCH /jobs/:id` – uppdatera ett jobb.
   - `DELETE /jobs/:id` – ta bort ett jobb.
2. Implementera minst grundläggande endpoints för `users`:
   - `POST /users` – skapa användare.
   - `GET /users/:id` – hämta användare med kopplade jobb (via relation i Drizzle).
3. Använd Drizzle ORM i alla endpoints för att läsa/skapa/uppdatera/radera data.
4. Lägg till grundläggande felhantering:
   - Returnera relevanta statuskoder (t.ex. 201, 400, 404, 500).
   - Hantera fall där resurser inte hittas.
5. Testa alla endpoints med Thunder Client, Postman eller liknande:
   - Spara gärna en export/collection i repot.

## Teori / reflektionsfrågor
- Vad betyder REST och vilka principer är viktiga?
- Vad är skillnaden mellan `GET`, `POST`, `PUT`, `PATCH` och `DELETE`?
- Vilka fördelar ger en ORM som Drizzle jämfört med att skriva rå SQL?
- Vad är viktigt när det gäller felhantering i ett API?
