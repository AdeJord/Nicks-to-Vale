const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors')

//"mongodb://localhost:27017/adrian" - Nicks
//"mongodb+srv://adejord:12477560Mb@cluster0.dyn1q.mongodb.net/nicksting?retryWrites=true&w=majority" - Ades

mongoose.connect("mongodb+srv://adejord:12477560Mb@cluster0.dyn1q.mongodb.net/nicksting?retryWrites=true&w=majority", { 
        useNewUrlParser: true,  
        useUnifiedTopology: true
    }).then(() => {
		const app = express()
        app.use(cors())
        app.use(express.json());
        app.use(express.urlencoded({
          extended: true
        }));
        app.use("/api", routes);
		app.listen(8080, () => {
			console.log("### i like the pope, the pope smokes dope ###");
		});
	})