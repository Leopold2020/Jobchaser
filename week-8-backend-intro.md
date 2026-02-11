# Vecka 8 – Intro backend, Node.js, Express och SQL

## User stories
- Som utvecklare vill jag ha ett backend-API för JobChaser som kan lagra användare och jobb i en SQL-databas.
- Som utvecklare vill jag kunna ansluta till en Postgres-databas och skriva SQL-queries direkt i koden.

## Teknikfokus
- Node.js
- Express.js
- SQL-databaser (Postgres)
- Datamodellering (minst två tabeller med relation)

## Uppgift
1. Skapa ett nytt backend-projekt:
   - Initiera Node-projekt.
   - Installera Express.
2. Designa databasmodellen för JobChaser:
   - Minst två tabeller, t.ex. `users` och `jobs`.
   - Relation: en user kan ha flera jobs (one-to-many).
3. Sätt upp Postgres-databas (lokalt eller i moln).
4. Anslut till databasen och skriv SQL direkt i koden:
   - Använd en Postgres-klient (t.ex. `pg`-paketet).
   - Skapa tabellerna med `CREATE TABLE`-statements.
   - Testa att köra enkla queries (SELECT, INSERT).
5. Skapa en enkel Express-server med en health-check-route (t.ex. `GET /health` som returnerar status).

## Teori / reflektionsfrågor
- Vad är skillnaden mellan frontend och backend?
- Vad är en SQL-databas och vad menas med relationer mellan tabeller?
- Vad är fördelarna och nackdelarna med att skriva rå SQL jämfört med att använda en ORM?
