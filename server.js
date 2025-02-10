const staticServer = require('static-server');

const server = new staticServer({
    rootPath: './04-oop-basic-intro-to-dom/1-column-chart',  // путь к папке с вашим контентом
    port: 9060,            // порт, на котором будет запущен сервер
    host: 'localhost',     // хост, по умолчанию localhost
});

server.start(() => {
   console.log(`Сервер запущен на https://${server.host}:${server.port}`);
});
