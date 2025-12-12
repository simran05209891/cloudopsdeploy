import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send({
    message: 'CloudOpsDeploy Backend API is running',
    developer: 'Simran Anand',
    status: 'OK',
    version: 'v1'
  });
});

app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  
  res.json({
    received: true,
    handledBy: 'Simran Anand',
    repo: req.body?.repository?.full_name || 'unknown'
  });
});

app.listen(4000, () => {
  console.log('🚀 Backend running on port 4000 (Developed by Simran Anand)');
});
