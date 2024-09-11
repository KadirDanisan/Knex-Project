
const express = require("express");
require("dotenv").config();
const categoryRoutes = require('./routers/categoryRoutes');
const commentRoutes = require('./routers/commentRoutes');
const postRoutes = require('./routers/postRoutes');
const cors = require ("cors");

const app = express();
app.use(cors);
app.use('/', categoryRoutes);
app.use('/', commentRoutes);
app.use('/', postRoutes);


app.listen( process.env.PORT || 3000, ()=> {
    console.log("Server başarıyla kurulmuştur");
});