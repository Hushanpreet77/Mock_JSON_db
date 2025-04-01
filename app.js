const express = require('express');
    require('dotenv').config();
    const PORT = process.env.PORT;
    const userRoutes = require('./routes/users.js');
    const app = express();
    const ratelimit = require(`express-rate-limit`)

    //setup our view engine
    app.set(`view engine`,`ejs`);
    app.set(`views`, "./views");

   app.use(express.static('public'));
   app.use('userRoutes',);

  
    app.listen(PORT, () =>{
        console.log(`connected to port: ${PORT}`);
    });