// import { getPosts, generateRandomNumber } from "./utils.js";


// //console.log(global);
// console.log(getPosts());


import http from 'http';
const PORT = process.env.PORT;

//file system(fs) module used to load HTML files instead of writing HTML code in the response
import fs from 'fs/promises';

import url from 'url';
import path from 'path';


//Get current path
// console.log(__dirname); is a commonJs syntax and __dirname is not available in ES6 modules so we will make our own __dirname and __filename variables

const __filename = url.fileURLToPath(import.meta.url); //it will give file url to whatever file we are in and fileUrlToPath will convert that file url to file path
const __dirname = path.dirname(__filename); //it will give the directory name of the file

console.log(__filename, __dirname);

const server = http.createServer(async(req, res)=>{
    // console.log(req.url);
    // console.log(req.method);

    try {
        //check if GET request
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
                // res.writeHead(200, {'Content-Type': 'text/html'});
                // res.end('<h1>Home Page</h1>');
                filePath = path.join(__dirname, 'index.html');
            }
            else if(req.url === '/about'){
                // res.writeHead(200, {'Content-Type': 'text/html'});
                // res.end('<h1>About Page</h1>');
                filePath = path.join(__dirname, 'about.html');
            }
            else if(req.url === '/contact'){
                // res.writeHead(200, {'Content-Type': 'text/html'});
                // res.end('<h1>Contact Page</h1>');
                filePath = path.join(__dirname, 'contact-me.html');
            }
            else{
                // res.writeHead(404, {'Content-Type': 'text/html'});
                // res.end('<h1>Page Not Found</h1>');
                filePath = path.join(__dirname, '404.html');
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        }
        else{
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'}); //if some-other type of error going on
        res.end('Server Error');
        
    }
    
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });