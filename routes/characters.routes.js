const router = require("express").Router();
const axios = require("axios");
const endPoint = "https://ih-crud-api.herokuapp.com/characters";

/* GET home page */
router.get("/characters", (req, res, next) => {
  axios
    .get(endPoint)
    .then((responseFromAPI) => {
      // console.log(responseFromAPI)
      res.render("characters/list-characters", {
        characters: responseFromAPI.data,
      });
    })
    .catch((err) => console.error(err));
});

router.get("/characters/:id", (req, res, next) => {
  axios
    .get(`${endPoint}/${req.params.id}`)
    .then((responseFromAPI) => {
      // console.log("details: ", responseFromAPI.data)
      res.render("characters/details-character", {
        character: responseFromAPI.data,
      });
    })
    .catch((err) => console.error(err));
});

router.post("/characters/create", (req, res, next) => {
  axios
    .post(endPoint, {
      name: "Liya",
      occupation: "being annoying",
      weapon: "teeth",
    })

    .then((responseFromAPI) => {
      res.redirect("/characters");
    })
    .catch((err) => console.error(err));
});

router.get("/characters/:id/edit", (req, res, next) => {
  axios
    .get(`${endPoint}/${req.params.id}`)
    .then((responseFromAPI) => {
      res.render("characters/edit-character", {
        character: responseFromAPI.data,
      });
    })
    .catch((err) => console.error(err));
});

router.post("/characters/:id/update", (req, res, next) => {
  axios
    .patch(`${endPoint}/${req.params.id}`, req.body)

    .then((responseFromAPI) => {
      res.redirect("/characters/:id");
    })
    .catch((err) => console.error(err));
});

router.post("/characters/:id/delete", (req, res, next) => {
  axios
    .delete(`${endPoint}/${req.params.id}`)

    .then(() => {
      res.redirect("/characters");
    })
    .catch((err) => console.error(err));
});

module.exports = router;

// https://ih-crud-api.herokuapp.com/characters
