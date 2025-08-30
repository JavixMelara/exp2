import { Redis } from '@upstash/redis';

// Usar la URL y el Token que Vercel te proporcionó para Upstash
const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.KV_REST_API_TOKEN,
});

export default async function aumentarContador(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Use POST.' });
  }

  try {
    const nuevoContador = await redis.incr('visitas');
    return res.status(200).json({ contador: nuevoContador });
  } catch (error) {
    console.error('Error al aumentar el contador:', error);
    return res.status(500).json({ error: 'No se pudo aumentar el contador' });
  }
}