import { db } from "../utils/sqlConfig.js";
const Form = db.form;

const submitForm = async (req, res) => {
    // temporarily using this
    req.session.user = {
        id: "191080047",
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
    
    console.log("REcieved ", req.body);

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
        is_approved: false
    }).then((fm)=>{
        console.log("Saved form",fm);
        res.status(200).send({sucess:true, message:"Successfully saved form"});
    }).catch((err)=>{
        console.log("Error while saving fomr",err);
        res.status(500).send({message:"Some error occured while storing the form"});
    });
}

export { submitForm };
