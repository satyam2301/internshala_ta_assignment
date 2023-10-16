function mainController(req, res) {
  res.send(`Provided parameter is : ${req.params.value}`);
}

function queryController(req, res) {
  const student_id = req.query.id;
  const student_name = req.query.name;
  res.send({
    student_id: student_id,
    student_name: student_name,
  });
}
module.exports = {
  mainController,
  queryController,
};
