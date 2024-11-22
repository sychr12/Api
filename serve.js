import express from "express";
import routes from "./src/routes/postsroutes.js"



const app = express();
app.use(express.static("uploads"))
routes(app)







app.listen(2004, () => {
    console.log("Servidor escutando...");
});




