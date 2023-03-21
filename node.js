
----------------
package.json
----------------
{
  "name": "docker_web_app",
  "version": "1.0.0",
  "description": "Node.js on Docker",
  "author": "test@test.com>",
  "main": "server.js",
  "license": "MIT",
  "private": true,
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}

-----------
server.js
-----------
'use strict';
const express = require('express');
const PORT = 8888;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => {
   res.sendfile('index.html', function(err) {
        if (err) res.send(404);
    });
});
app.listen(PORT, HOST);

-------------
index.html
-------------
<!DOCTYPE html>
<html lang="tw">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script>
        function auth() {
            var URL = 'https://notify-bot.line.me/oauth/authorize?';
            URL += 'response_type=code';
            URL += '&client_id=rDmj92mefXa1djgjmy1AxD';
             // redirect_url的值必需與Line Notify中的Callback URL一致
            URL += '&redirect_url=https://tang1224.github.io/linenotify';
            URL += '&scope=notify';
            URL += '&state=NO_STATE';
            window.location.href = URL;
        }
    </script>
    </head>
    <body>
        <button onclick="auth();"> LineNotify </button>
    </body>
</html>
