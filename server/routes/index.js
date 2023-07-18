const express = require("express");
const FlatsController = require("../controller/flats");

const router = express.Router();

router.get("/flats", FlatsController.getFlats);
router.get("/allflats", FlatsController.getAllFlats);

module.exports = router;
