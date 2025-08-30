const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    if (req.method === 'POST') {
        const filePath = path.join(__dirname, 'contador.json');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return res.status(500).json({ error: 'No se pudo leer el contador' });
            }

            let contadorData = JSON.parse(data);
            contadorData.contador++;

            fs.writeFile(filePath, JSON.stringify(contadorData), 'utf8', (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo:', err);
                    return res.status(500).json({ error: 'No se pudo actualizar el contador' });
                }
                res.status(200).json({ contador: contadorData.contador });
            });
        });
    } else {
        res.status(405).json({ error: 'Método no permitido. Use POST.' });
    }
};