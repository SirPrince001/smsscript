const Birthday = require("../model/birthday");
const fileReader = require("read-excel-file/node");
require("dotenv").config();

exports.uploadFile = async (request, response) => {
  
    try {
       if (request.file === undefined) {
     return response.status(400).send("Please upload an excel file!");
  } 
      console.log(request.file.filename);
      readExcelFile("files/" + request.file.filename);
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error reading the file" + error });
    }
  //}
};

async function readExcelFile(path) {
  const data = await fileReader(path);
  /*
    Removing the the first row, 
    which in most case is the title of each row
    */
  data.shift();

  data.forEach(async (entry) => {
    const birthdayDate = new Birthday({
      id: entry[0],
      fullname: entry[1],
      birthday: entry[2],
      phone: entry[3],
    });
    console.log(entry[2])
    let savedData = await birthdayDate.save();
   
    //console.log(data);
   console.log(savedData);
  });
}
