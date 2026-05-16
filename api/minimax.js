module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.MINIMAX_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'MINIMAX_API_KEY not configured' });
  }

  const { model, prompt, lyrics, output_format, audio_setting } = req.body;
  if (!model || !lyrics) {
    return res.status(400).json({ error: 'model and lyrics are required' });
  }

  try {
    const mmRes = await fetch('https://api.minimax.io/v1/music_generation', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ model, prompt, lyrics, output_format, audio_setting })
    });

    const data = await mmRes.json();
    return res.status(mmRes.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message || 'MiniMax request failed' });
  }
};
