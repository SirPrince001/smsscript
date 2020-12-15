const router = require("express").Router();
const controllers = require("../controllers/uploadController");
const upload = require("../middlewares/uploads");

router.post("/upload", upload.single("file"), controllers.uploadFile);


module.exports = router;
