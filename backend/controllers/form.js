import { db } from "../utils/sqlConfig.js";
const Form = db.form;

const submitForm = async (req, res) => {
    //to refactor this to controller
    console.log("Res",req.session.user);
        Form.create({
            id: req.session.user.id ,

            email: req.session.user.email,
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
            containers_version: req.body.containerVersions,
            from_date: req.body.fromDate,
            to_date: req.body.toDate,
            is_approved: false
        }).then(    (user) => {
            console.log("Username",user.firstName);
            res.status(200).send({sucess:true,user})
        }).catch((error) => {
            console.log(error);
            res.status(400).send(error);
        })
}

const getForms = (req,res)=>{
    Form.findAll().then((Forms)=>{
        res.status(200).send({Forms})
    }).catch((err)=>{
        res.send(err);
    })
};

export { submitForm , getForms }
