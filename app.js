const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;

// Petición página inicio
app.get('/public/index.html', (req, res) => {
    res.send('¡Hola desde la página inicial');
});

// Petición página secundaria
app.get('/public/index2.html', (req, res) => {
    res.send('¡Hola desde la página secundaria!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})