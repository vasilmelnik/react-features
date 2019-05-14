const fs = require('fs');
const express = require('express');

const app = express();


app
  .use(express.static(__dirname + '/public'))
  .use('/', (req, res) => {
    res.send('<h1>Main</h1>');
  })
  .listen(3000);





// app
//   .use((req, res, next) => {
//     const date = (new Date()).toString().slice(0, 24) + '\n';
//     fs.appendFile('some.log', date, () => {});
//     next();
//   })
//   .use('/', (req, res, next) => {
//     res.sendFile(`${__dirname}/public/about.html`);
//     //res.sendStatus(500);
//     //next();
//   })
//   .use('/about', (req, res, next) => {
//     res.send({name: 'Pit'});
//     next();
//   })
//   .use('/home', (req, res, next) => {
//     res.send('dddddddddddddd');
//     next();
//   })
//   .listen(3000);

















// http
//   .createServer((req, res) => {
//     console.log(`Запрошенный адрес: ${req.url}`);
//     if(req.url.startsWith('/public/')) {
      
//       const filePath = req.url.slice(1);
//       fs.readFile(filePath, 'utf-8', (err, data) => {
//         if(err) {
//           res.statusCode = 404;
//           res.end('Resource not found!');
//         } else {
//           res.setHeader('Content-type', 'text-html');
//           console.log(data);
//           let d = data.replace('{header}', 100500).replace('{message}', 900);
//           res.end(d);
//         }
//       });
//     } else {
//       res.end('Hello, world');
//     }

//   })
//   .listen(3000);





// const express = require('express');
// const fs = require('fs');
// const zlib = require('zlib');


// const r = fs.createReadStream('hello.txt', 'utf-8');
// const w = fs.createWriteStream('hello.txt.gz');

// let gzip = zlib.createGzip()

// r.pipe(gzip).pipe(w);



// readableStream.on('data', chunk => console.log(chunk));








// const app = express();
// app
//   .get('/', (req, res) => {
//     res.end('<a href="/example">Example</a>');
//   })
//   .get('/example', (req, res) => {
//     res.end('<a href="/">Hello</a>');
//   })
//   .listen(3000);





// /**
//  * 
//   const Emitter = require('events');

//   class User extends Emitter {
//     sayHi(data) {
//       this.emit('greet', data)
//     }
//   }

//   const user = new User();

//   user.on('greet', data => {
//     console.log(data);
//   }) 

//   user.sayHi('Pit');
//  * 
//  * 
//  */



//   /**
//     fs.appendFile('hello.txt', '777777777777777777', (err) => {
//       if(err) {
//         throw err;
//       }
//       let data = fs.readFileSync('hello.txt', 'utf-8');
//       console.log(data);
//         //writeFile
//     });




//     emitter.on('hello', e => {
//       console.log(e);
//     })
//     emitter.on('hello', e => {
//       console.log(e);
//     })
//     emitter.emit('hello');

//   */