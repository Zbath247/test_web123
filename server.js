const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const UPLOADED_LOGO_PATH = path.join(
  'C:', 'Users', 'Mok Sambath', '.gemini', 'antigravity-ide', 'brain',
  'd6be5d59-21e0-448d-8420-a2ed89e4a258', '.user_uploaded', 'media_1787648944676.png'
);

// Copy logo to local directory if not already there
try {
  const localLogo = path.join(__dirname, 'duc-logo.png');
  if (fs.existsSync(UPLOADED_LOGO_PATH)) {
    fs.copyFileSync(UPLOADED_LOGO_PATH, localLogo);
  }
} catch (e) {
  console.log('Logo copy notice:', e.message);
}

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  let filePath = path.join(__dirname, reqUrl === '/' ? 'index.html' : reqUrl);

  if (reqUrl === '/duc-logo.png' && !fs.existsSync(filePath) && fs.existsSync(UPLOADED_LOGO_PATH)) {
    filePath = UPLOADED_LOGO_PATH;
  }

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'text/plain';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
