const router = require('express').Router();
/* const {
	createDonador,
	readDonador,
	readDonadores,
	updateDonador,
	deleteDonador,
	responseSolicitud
} = require('../controllers/donors');

router.get('/', readDonadores);
router.get('/:id', readDonador);
router.post('/', createDonador);
router.put('/:id', updateDonador);
router.delete('/:id', deleteDonador);
router.post('/', responseSolicitud); */

const {
	createDonor,
	readDonor,
	readDonorsByPages, 
	updateDonor,
	deleteDonor,
	login,
	search
} = require('../controllers/donors');

var auth = require('./auth');

router.post("/", createDonor);
router.get("/", auth.optional, readDonor);
router.get("/pagination", auth.optional, readDonorsByPages);
router.get("/:id", auth.optional, readDonor);
router.get("/search", search);
router.put("/:id", auth.required, updateDonor);
router.delete("/", auth.required, deleteDonor);
router.post("/login", login);

module.exports = router;