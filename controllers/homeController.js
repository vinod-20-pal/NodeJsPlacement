const Student = require('../models/studentSchema');

/**
 * Purpose: Render home page
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.homePage = async function (req, res) {
  const students = await Student.find({});
  return res.render('home', { students });
};
