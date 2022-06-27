const express = require("express");
const Cars = require("./models/cars");
const router = express.Router();

// base api route
router.get("/", async (req, res) => {
    console.log("this is the root of the api");
	res.send({ok: true});
});


// cars route
router.get("/cars/list", async (req, res) => {
	const posts = await Cars.find({});
    console.log(posts);
	res.send(posts);
});

router.get("/cars/view", async (req, res) => {
	const posts = await Cars.findById(req.query.id);
    //console.log(posts);
	res.send(posts);
});

router.post("/cars/add", async (req, res) => {
    const params = new Cars();
    params.make = req.body.make;
    params.model = req.body.model;
    params.price = req.body.price;
    await params.save().then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
   	res.send({ok: true});
});

module.exports = router