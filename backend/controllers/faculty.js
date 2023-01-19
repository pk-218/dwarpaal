import { db } from "../utils/sqlConfig.js";
const User = db.user;
const Form = db.form;

const getStudentForm = (req, res) => {
  const { id } = req.body;
  Form.findOne({
    where: {
      id: id,
    },
  }).then((form) => {
    if (!form) {
      res.status(404).send({ success: false, message: "Form not found!" });
    } else {
      res.status(200).send({ success: true, student: form });
    }
  });
};

const updateFormStatus = (req, res) => {
  // assuming acceptanceStatus is boolean
  const { id, facultyToken, acceptanceStatus } = req.body;
  console.log(req.body);
  Form.findOne({
    where: {
      id: id,
    },
  }).then((form) => {
    if (!form) {
      res.status(404).send({ success: false, message: "User form not found!" });
    } else {
      if (form.faculty_token != facultyToken) {
        res
          .status(403)
          .send({ success: false, message: "Faculty token doesn't match!" });
      } else {
        Form.update(
          { faculty_status: acceptanceStatus, faculty_pending_status: false },
          { where: { id: id } }
        )
          .then((form) => {
            res
              .status(200)
              .send({ success: true, message: "Student form updated!", form });
          })
          .catch((err) => {
            console.log("Error while updating user form", err);
            res.status(500).send({ success: false, err: err });
          });
      }
    }
  });
};

export { getStudentForm, updateFormStatus };
