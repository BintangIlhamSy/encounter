const fs = require('fs');

const handleRequest = (req, res) => {
  const { url, method } = req;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Welcome</title></head>');
    res.write(
      '<body><h1 style="text-align:center;">Hi All !!</h1><br />' +
        '<p style="text-align:center;">My Name is Bintang</p>' +
        '<div style="text-align:center;">' +
        '<br /><form action="/create-user" method="POST">' +
        '<label for="username">Username:</label><br>' +
        '<input type="text" id="username" name="username" placeholder="Please insert username"><br>' +
        '<input type="submit" value="Submit">' +
        '</form></div></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/users' && method === 'GET') {
    res.write('<html>');
    res.write('<head><title>List Users</title></head>');
    res.write(
      '<body><h1 style="text-align:center;">' +
        'List of users :</h1><br /><ul>' +
        '<li>Bintang Ilham Syahputra</li>' +
        '<li>Puti Hilma Syahrani</li></ul></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const bodyBuffer = Buffer.concat(body).toString();
      const username = bodyBuffer.split('=')[1];
      console.log(`Username has been created as name :${username}`);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const bodyBuffer = Buffer.concat(body).toString();
      const message = bodyBuffer.split('=')[1];
      fs.writeFile('message.txt', message, () => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Response Node.js</title></head>');
  res.write('<body><h1>Hai from Bintang Ilham Syahputra</h1></body>');
  res.write('</html>');
  return res.end();
};

module.exports = {
  handler: handleRequest,
};
