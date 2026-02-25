import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = '1.0.0';

app.get('/healthz', (req, res) => {
  res.json({ ok: true, version: VERSION });
});

// Start server if run directly
if (process.argv[1] && !process.argv[1].includes('vitest')) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export { app, VERSION };