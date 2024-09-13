const express = require("express");
require("dotenv").config();
const categoryRoutes = require('./routers/category');
const postRoutes = require('./routers/post');
const app = express();

app.use(express.json());
app.use('/categories', categoryRoutes);
app.use('/posts', postRoutes);



app.listen( process.env.PORT || 3000, ()=> {
    console.log("Server başarıyla kurulmuştur");
});