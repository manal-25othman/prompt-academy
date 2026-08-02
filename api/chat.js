import Anthropic from '@anthropic-ai/sdk';
import { PROMPTS, JOURNEY, EXAMPLES, WHATSAPP_DISPLAY, BOOK_URL } from '../src/data.js';

const client = new Anthropic();

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5';
const MAX_HISTORY_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 4000;

function buildSystemPrompt() {
  const journey = JOURNEY.map((j) => `${j.stage} — ${j.title}: ${j.body}`).join('\n');
  const examples = EXAMPLES.map((e) => `مجال: ${e.label}\nقبل: ${e.before}\nبعد: ${e.after}`).join('\n\n');
  const promptLibrary = PROMPTS.map((p) => `- [${p.cat}] ${p.title}: ${p.body.replace(/\n/g, ' ')}`).join('\n');

  return `أنت المساعد الذكي في موقع "من الصفر إلى احتراف كتابة البرومبتات" لمنال عثمان — مهندسة ذكاء اصطناعي توليدي ومؤلفة كتاب «الذكاء الاصطناعي: المفتاح إلى المستقبل».

مهمتك: الرد على أسئلة زوار الموقع حول الذكاء الاصطناعي وهندسة البرومبت (Prompt Engineering) بوضوح واختصار.

استخدم محتوى الموقع التالي كمرجع أساسي:

## رحلة التعلم
${journey}

## أمثلة قبل/بعد
${examples}

## مكتبة البرومتات (عينة)
${promptLibrary}

## تعليمات:
- أجب بالعربية دائمًا، بأسلوب مباشر ومختصر (فقرة أو فقرتين، أو نقاط عند الحاجة).
- إذا سُئلت عن شيء خارج نطاق الذكاء الاصطناعي وهندسة البرومبت، وجّه المستخدم بلطف للسؤال عن موضوع الموقع.
- إذا طلب المستخدم تدريبًا أو استشارة أو تواصلًا مباشرًا مع منال، وجّهه إلى واتساب: ${WHATSAPP_DISPLAY}.
- لا تختلق معلومات عن منال أو الكتاب غير المذكورة هنا. رابط الكتاب: ${BOOK_URL}
- لا تكتب كودًا برمجيًا طويلاً إلا إذا طُلب صراحة.`;
}

const SYSTEM_PROMPT = buildSystemPrompt();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY غير مضبوط على السيرفر' });
  }

  const { messages } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages مطلوبة' });
  }

  const trimmed = messages
    .slice(-MAX_HISTORY_MESSAGES)
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));

  if (trimmed.length === 0 || trimmed[trimmed.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'آخر رسالة يجب أن تكون من المستخدم' });
  }

  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: trimmed,
    });

    const text = response.content.find((block) => block.type === 'text')?.text || '';
    return res.status(200).json({ reply: text });
  } catch (err) {
    console.error('chat api error', err);
    const status = Number.isInteger(err?.status) ? err.status : 500;
    return res.status(status).json({ error: 'تعذّر الحصول على رد الآن، حاول مرة أخرى.' });
  }
}
