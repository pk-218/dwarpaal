import { db } from "../utils/sqlConfig.js";
const Form = db.form;

const getData = (req, res) => {
  try {
    Form.findOne({
      where: {
        id: req.session.id,
        email: req.session.email,
      },
    }).then((user) => {
      if (!user) {
        res.json({ success: false, message: "Some error occured" });
      } else {
        res.status(200).json(user);
      }
    });
  } catch {
    res.status(500).json({ success: false, message: "Some error occured" });
  }
};

const getDate = (utcDate) => {
  return utcDate.split("T")[0];
};

const getAccessRequestStatus = async (req, res) => {
  console.log(`Sending access request status for ${req.session.user.email}`);
  try {
    const userFormData = await Form.findOne({
      where: {
        email: req.session.user.email,
      },
    });
    res.status(200).json({
      message: `Found user form data for user ${req.session.user.email}`,
      profInCharge: userFormData.profInCharge,
      title: userFormData.title,
      createdAt: getDate(userFormData.createdAt),
      is_approved: userFormData.is_approved,
      faculty_pending_status: userFormData.faculty_pending_status,
      period: `${getDate(userFormData.from_date)}-${getDate(
        userFormData.to_date
      )}}`,
    });
  } catch {
    res.status(500).json({ message: "User not found" });
  }
};

export { getData, getAccessRequestStatus };
