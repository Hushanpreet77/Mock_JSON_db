const fs = require('fs');
const filePath ='./database.json';
const{readData, writeDta} = require('./utils/file.js');

async function createUser(req, res ){
try {
    // function is a utility class function
    const data = await readData();

    //determine the last user id using zero-based indexing
    //if lenght is 2 , we minus 1 to get the true index position
    const lastUser = data.users[data.users.length -1];

    //default to 1 if no user exist 
    const nextId = lastUser ? lastUser.id + 1 : 1;


   //create a new user object 
   const newUser = {
       id: nextId,
       username : req.body.username,
       first_name : req.body.first_name,
       email: req.body.email,
       
   }

   //push the new data record to the users collection
   data.users.push(newUser);

   //Write the changes the permanently add to the file 
   await writeData(data);

   // refresh the page 
   res.redirect('/');


} catch (error) {
    res.ststus(500).json(`Internal Server Error: ${error}`);
}    

}
    
module.exports = {createUsers};
