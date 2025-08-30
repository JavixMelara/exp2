<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirigiendo...</title>
</head>
<body>
    <p>Si no eres redirigido, haz clic <a href="https://www.instagram.com/instagram/">aquí</a>.</p>
    <script>
        const urlDestino = 'https://www.instagram.com/instagram/';
        const apiAumentarContador = '/api/aumentar-contador';

        fetch(apiAumentarContador, {
            method: 'POST'
        })
        .then(() => {
            window.location.href = urlDestino;
        })
        .catch(() => {
            window.location.href = urlDestino;
        });
    </script>
</body>
</html>