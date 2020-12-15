const multer = require("multer");

const excelFilter = (request, file, cb) => {
  if (
    file.mimetype.includes("xlsx") ||
    file.mimetype.includes("xls")
  ) {
    cb(null, true);
  } else {
    cb(null, "Please upload only excle file");
  }
};

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, __basedir + "/files/");
  },

  filename: (request, file, cb) => {
    const currentDate = new Date();
    //console.log(file.originalname);
    cb(null, `${currentDate.getFullYear()}-Prince-${file.originalname}`);
  },
});

const uploadFile = multer({ storage: storage, fileFilter: excelFilter });

module.exports = uploadFile;

