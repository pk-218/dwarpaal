import { NodeSSH } from "node-ssh";
import { generatePassword } from "../utils/createPassword.js";
import { db } from "../utils/sqlConfig.js";
import { grantAccessMail } from "../utils/mailSender.js";
const ssh = new NodeSSH();

const VM_CONFIG = {
  host: process.env.VM_IP,
  username: process.env.VM_USER,
  password: process.env.VM_PASSWORD,
};

const memory_usage_per_user =
  'select u.username, (SUM(total_size) * 10e-7) as total_mem_usage from users as u left join processes as p on (u.uid = p.uid) where (u.username like "%\\_b%" escape "\\") group by u.uid;';
const all_users =
  'select * from users where username like "%\\_b%" escape "\\";';
const logged_in_users =
  'select * from logged_in_users where user like "%\\_b%" escape "\\";';
const createUser = (req, res) => {
  const id = req.body.id;
  const username = req.body.email.split("@")[0];
  const password = generatePassword();
  const expireOn = "2023-01-30";

  ssh.connect(VM_CONFIG).then(function () {
    ssh
      .execCommand(
        `./scripts/create-user.sh ${username} ${password} ${expireOn} ${id}`,
        { cwd: "./" }
      )
      .then(function (result) {
        ssh.dispose();
        res.send("successful");
      });
  });
};

const deleteUser = (req, res) => {
  const username = req.body.username;
  ssh
    .connect(VM_CONFIG)
    .then(() => {
      ssh.execCommand(`userdel ${username}`, { cwd: "./" }).then((res) => {
        ssh.dispose();
        res.send("Access revoked as user has been deleted from the VM");
      });
    })
    .finally(() => {
      db.user.update(
        { username: "", expirationDate: "" },
        { where: { username: username } }
      );
    });
};

const getAllUsers = (req, res) => {
  ssh.connect(VM_CONFIG).then(function () {
    ssh
      .execCommand(
        `./osqueryd -S --disable_events=false --enable_bpf_events=true --enable_bpf_file_events=true --allow_unsafe=true '${all_users}' --json;`,
        { cwd: "./" }
      )
      .then(function (result) {
        ssh.dispose();
        res.send(JSON.parse(result.stdout));
      });
  });
};

const getLoggedInUsers = (req, res) => {
  ssh.connect(VM_CONFIG).then(function () {
    ssh
      .execCommand(
        `./osqueryd -S --disable_events=false --enable_bpf_events=true --enable_bpf_file_events=true --allow_unsafe=true '${logged_in_users}' --json;`,
        { cwd: "./" }
      )
      .then(function (result) {
        ssh.dispose();
        res.send(JSON.parse(result.stdout));
      });
  });
};

const memoryUsagePerUser = (req, res) => {
  ssh.connect(VM_CONFIG).then(function () {
    ssh
      .execCommand(
        `./osqueryd -S --disable_events=false --enable_bpf_events=true --enable_bpf_file_events=true --allow_unsafe=true '${memory_usage_per_user}' --json;`,
        { cwd: "./" }
      )
      .then(function (result) {
        ssh.dispose();
        res.send(JSON.parse(result.stdout));
      });
  });
};

const diskOccupied = (req, res) => {
  ssh.connect(VM_CONFIG).then(function () {
    ssh
      .execCommand(
        `./osqueryd -S --disable_events=false --enable_bpf_events=true --enable_bpf_file_events=true --allow_unsafe=true '${disk_occupied}' --json;`,
        { cwd: "./" }
      )
      .then(function (result) {
        ssh.dispose();
        res.send(JSON.parse(result.stdout));
      });
  });
};

const getPendingAccessRequests = async (_, res) => {
  console.log("Fetching unapproved users from the database");
  try {
    const unapprovedUsers = await db.form.findAll({
      attributes: [
        "id",
        "email",
        "firstName",
        "lastName",
        "to_date",
        "is_approved",
      ],
      where: {
        is_approved: false,
      },
    });

    const count = unapprovedUsers.length;
    console.log("Count: ", count);
    if (count == 0) {
      console.log("No users found");
      res.status(200).json({
        count: 0,
        data: {
          id: "",
          email: "",
          firstName: "",
          lastName: "",
          to_date: "",
          is_approved: "",
        },
        message: "No pending user access requests found",
      });
    } else {
      console.log("Found users");
      console.log(unapprovedUsers);
      console.log(count);
      res.status(200).send({
        count: count,
        data: unapprovedUsers,
        message: "Several user access requests are pending",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const grantCredentials = async (_, res) => {
  console.log("Mail Send!");
  grantAccessMail("pkkhushalani_b19@it.vjti.ac.in", (err, result) => {
    if (result) {
      res
        .status(200)
        .json({
          success: true,
          message: "Grant Access mail send successfully!",
        });
    } else {
      res.status(500).json({ success: false, error: err });
    }
  });
};

export default {
  getAllUsers,
  getLoggedInUsers,
  memoryUsagePerUser,
  createUser,
  diskOccupied,
  deleteUser,
  getPendingAccessRequests,
  grantCredentials,
};
