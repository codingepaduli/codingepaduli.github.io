-- Cognome-2025-05-26 Campionati Calcio : database relazionale per gestire
-- le informazioni relative a squadre di calcio e ai campionati che vinti

-- Creo le tabelle

CREATE TABLE Squadre (
    Nome_Squadra VARCHAR(100) PRIMARY KEY,
    Anno_Fondazione INT,
    Citta VARCHAR(100),
    Stadio VARCHAR(100)
);

CREATE TABLE Campionati (
    ID_Campionato INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100),
    Anno_Inizio INT
);

CREATE TABLE Vittorie (
    ID_Vittoria INT AUTO_INCREMENT PRIMARY KEY,
    Nome_Squadra VARCHAR(100) REFERENCES Squadre(Nome_Squadra),
    ID_Campionato INT REFERENCES Campionati(ID_Campionato),
    Anno  INT 
);

-- Uso l'istruzione SQL "INSERT ... VALUES .." per inserire le squadre

INSERT INTO Squadre (Nome_Squadra, Anno_Fondazione, Citta, Stadio) VALUES
('Napoli', 1926, 'Napoli', 'Stadio Diego Armando Maradona'),
('Inter', 1908, 'Milano', 'San Siro'),
('Real Madrid', 1902, 'Madrid', 'Santiago Bernabéu'),
('Barcellona', 1899, 'Barcellona', 'Camp Nou');

-- Uso l'istruzione SQL "INSERT ... SET .." per inserire i campionati

INSERT INTO Campionati SET
    ID_Campionato = 1,
    Nome = 'Serie A',
    Anno_Inizio = 1898;

INSERT INTO Campionati SET
    ID_Campionato = 2,
    Nome = 'La Liga',
    Anno_Inizio = 1929;

-- Uso l'istruzione SQL "INSERT ... VALUES .." per inserire le vittorie

INSERT INTO Vittorie (Nome_Squadra, ID_Campionato, Anno) VALUES
('Napoli', 1, 2025),
('Inter', 1, 2024),
('Real Madrid', 2, 2025),
('Barcellona', 2, 2024);

-- Interroga il database

--  Il nome di tutte le squadre;
SELECT Nome_Squadra FROM Squadre;

--  La squadra che gioca nello stadio "Diego Armando"
SELECT Nome_Squadra FROM Squadre WHERE Stadio = 'Diego Armando Maradona';

--  Le squadre che ha vinto i rispettivi campionati nel 2025
SELECT Nome_Squadra FROM Vittorie WHERE Anno = 2025;

--  La squadra che ha vinto il campionato di serie A nel 2025
SELECT Nome_Squadra FROM Vittorie WHERE Anno = 2025 AND ID_Campionato = 1;  -- Assumendo che l'ID_Campionato per Serie A sia 1

--  La squadra che ha vinto il campionato di liga spagnola nel 2024
SELECT Nome_Squadra FROM Vittorie WHERE Anno = 2024 AND ID_Campionato = 2;  -- Assumendo che l'ID_Campionato per La Liga sia 2