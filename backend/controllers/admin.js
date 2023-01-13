import { NodeSSH } from 'node-ssh'
import generatePassword from '../utils/createPassword.js'
const ssh = new NodeSSH()

const memory_usage_per_user = 'select u.username, (SUM(total_size) * 10e-7) as total_mem_usage from users as u left join processes as p on (u.uid = p.uid) where (u.username like "%\\_b%" escape "\\") group by u.uid;'
const all_users = 'select * from users where username like "%\\_b%" escape "\\";'
const logged_in_users = 'select * from logged_in_users where user like "%\\_b%" escape "\\";'

const createUser = (req,res) => {

  const id = req.body.id
  const username = (req.body.email).split('@')[0]
  const password = generatePassword()
  const expireOn = "2023-01-30"

  ssh.connect({
    host: '170.187.251.66',
    username: 'root',
    password: 'navnavtihi++'
  })
  .then(function() {
    ssh.execCommand(`./scripts/create-user.sh ${username} ${password} ${expireOn} ${id}`, { cwd:'./' })
    .then(function(result) {
        ssh.dispose()
        res.send("successful")
    })
  })
}

const getAllUsers = (req, res) => {
    ssh.connect({
        host: '170.187.251.66',
        username: 'root',
        password: 'navnavtihi++'
      })
      .then(function() {
        ssh.execCommand(`./osqueryd -S --disable_events=false --enable_bpf_events=true --enable_bpf_file_events=true --allow_unsafe=true '${all_users}' --json;`, { cwd:'./' })
        .then(function(result) {
            ssh.dispose()
            res.send(JSON.parse(result.stdout))
        })
      })
}

const getLoggedInUsers = (req, res) => {
    ssh.connect({
        host: '170.187.251.66',
        username: 'root',
        password: 'navnavtihi++'
      })
      .then(function() {
        ssh.execCommand(`./osqueryd -S --disable_events=false --enable_bpf_events=true --enable_bpf_file_events=true --allow_unsafe=true '${logged_in_users}' --json;`, { cwd:'./' })
        .then(function(result) {
            ssh.dispose()
            res.send(JSON.parse(result.stdout))
        })
      })
}

const memoryUsagePerUser = (req, res) => {
    ssh.connect({
        host: '170.187.251.66',
        username: 'root',
        password: 'navnavtihi++'
      })
      .then(function() {
        ssh.execCommand(`./osqueryd -S --disable_events=false --enable_bpf_events=true --enable_bpf_file_events=true --allow_unsafe=true '${memory_usage_per_user}' --json;`, { cwd:'./' })
        .then(function(result) {
            ssh.dispose()
            res.send(JSON.parse(result.stdout))
        })
      })
}

export default {getAllUsers, getLoggedInUsers, memoryUsagePerUser, createUser};