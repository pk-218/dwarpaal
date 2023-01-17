import { db } from "../utils/sqlConfig.js";
import { generateToken } from "../utils/createPassword.js";
import { sendFacultyMail } from "../utils/mailSender.js";
const Form = db.form;

const submitForm = async (req, res) => {
    // temporarily using this
    req.session.user = {
        id: "191080048",
        email:"loggedstudent@mail.vjti.in"
    }
    req.body.reqGPU = parseInt(req.body.reqGPU);
    req.body.reqGPUMem = parseInt(req.body.reqGPUMem);
    req.body.reqCPU = parseInt(req.body.reqCPU);
    req.body.reqCudaCores = parseInt(req.body.reqCudaCores);
    req.body.reqTensorCores = parseInt(req.body.reqTensorCores);
    req.body.reqSysMem = parseInt(req.body.reqSysMem);
    req.body.fromdate = new Date(req.body.fromdate);
    req.body.todate = new Date(req.body.todate);
    req.body.faculty_email = "chahatmbaghele@gmail.com";
    
    console.log("REcieved ", req.body);

    const token = generateToken();
    console.log("Token",token);

    const form = await Form.create({
        id: req.session.user.id ,
        email: req.session.user.email ,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        title: req.body.projectTitle,
        domain: req.body.domain,
        n_gpu: req.body.reqGPU,
        gpu_memory: req.body.reqGPUMem,
        n_cpu: req.body.reqCPU,
        n_cuda_cores: req.body.reqCudaCores,
        n_tensor_cores: req.body.reqTensorCores,
        system_memory: req.body.reqSysMem,
        os: req.body.reqOS,
        os_version: req.body.OSVersion,
        dgx_drivers: req.body.DGXDrivers,
        containers: req.body.reqContainers,
        containers_version: req.body.ContainerVersions,
        from_date: req.body.fromdate,
        to_date: req.body.todate,
        is_approved: false,
        faculty_pending_status: true,
        faculty_status: false,
        faculty_email: req.body.faculty_email,
        faculty_token: token

    }).then((fm)=>{
        console.log("Saved form",fm.dataValues);
        sendFacultyMail(fm.dataValues.faculty_email, {
            id:fm.dataValues.id, 
            email:fm.dataValues.email, 
            firstName:fm.dataValues, 
            lastName:fm.dataValues.lastName, 
            token:token
        },(err,status)=>{
            if(err){ 
                console.log(err);
            }
        });

        res.status(200).send({success:true, message:"Successfully saved form"});
    }).catch((err)=>{
        console.log("Error while saving fomr",err);
        res.status(500).send({message:"Some error occured while storing the form"});
    });
}

const getForms = (req, res) =>{
    // var {email,id} = req.body;
    Form.findAll().then((forms)=>{
        console.log(forms);
        res.send({forms});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({err});
    })
};

export { submitForm, getForms };
