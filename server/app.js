const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const api = require('./api');




if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../build/Frontend')));
  app.get('*',(req,res)=>{
    return res.sendFile(path.resolve(__dirname, '../Frontend','build','index.html'))
  })
}


app.use("/api",api);


app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});

