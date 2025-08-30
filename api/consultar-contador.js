const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const filePath = path.join(__dirname, 'contador.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'No se pudo leer el contador' });
        }

        const contadorData = JSON.parse(data);
        res.status(200).json({ contador: contadorData.contador });
    });
};