const router = require('express').Router();
const {
	createDonor,
	readDonor,
	readDonorsByPages, 
	updateDonor,
	deleteDonor,
	login,
	search,
	me
} = require('../controllers/donors');

var auth = require('./auth');

router.post("/", createDonor);
router.get("/", auth.optional, readDonor);
router.get("/pagination", auth.optional, readDonorsByPages);
router.get("/search", search);
router.get("/:id", auth.optional, readDonor);
router.get("/me", auth.required, me);
router.put("/", auth.required, updateDonor);
router.delete("/", auth.required, deleteDonor);
router.post("/login", login);

module.exports = router;
