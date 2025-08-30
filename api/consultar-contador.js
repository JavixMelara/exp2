import { Redis } from '@upstash/redis';

// Usar la URL de la API REST y el Token que Vercel te proporcionó
const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

export default async function consultarContador(req, res) {
  try {
    const contador = await redis.get('visitas');
    return res.status(200).json({ contador: contador || 0 });
  } catch (error) {
    console.error('Error al consultar el contador:', error);
    return res.status(500).json({ error: 'No se pudo consultar el contador' });
  }
}