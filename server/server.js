const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
const DATA_FILE = './data.json';

app.get('/api/user', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ message: "Помилка читання файлу" });
        }
        res.send(JSON.parse(data));
    });
});

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