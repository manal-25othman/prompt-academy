export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return res.status(500).json({ error: 'الخدمة غير مفعّلة بعد، حاول لاحقًا أو تواصل عبر واتساب.' });
  }

  const { name, contact, message } = req.body || {};

  if (typeof name !== 'string' || !name.trim() || typeof contact !== 'string' || !contact.trim()) {
    return res.status(400).json({ error: 'الاسم ووسيلة التواصل مطلوبة.' });
  }

  const payload = {
    name: name.trim().slice(0, 200),
    contact: contact.trim().slice(0, 200),
    message: typeof message === 'string' ? message.trim().slice(0, 1000) : '',
    date: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Sheet webhook responded ${response.status}`);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('interest api error', err);
    return res.status(502).json({ error: 'تعذّر إرسال طلبك الآن، جرّب لاحقًا أو تواصل عبر واتساب.' });
  }
}
