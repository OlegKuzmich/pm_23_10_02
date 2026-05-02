const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Налаштування
app.use(cors()); // Дозволяє Angular звертатися до сервера
app.use(express.json()); // Дозволяє отримувати дані у форматі JSON

const DATA_FILE = './data.json';

// --- GET запит: Читаємо дані з файлу і віддаємо їх Angular ---
app.get('/api/user', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ message: "Помилка читання файлу" });
        }
        res.send(JSON.parse(data));
    });
});

// --- POST запит: Отримуємо дані від Angular і записуємо у файл ---
app.post('/api/user', (req, res) => {
    const updatedData = req.body;
    
    fs.writeFile(DATA_FILE, JSON.stringify(updatedData, null, 2), (err) => {
        if (err) {
            return res.status(500).send({ message: "Помилка запису у файл" });
        }
        res.send({ message: "Дані успішно оновлено!" });
    });
});

app.listen(PORT, () => {
    console.log(`Бекенд-сервіс запущено на http://localhost:${PORT}`);
});