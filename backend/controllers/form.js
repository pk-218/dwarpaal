import { db } from "../utils/sqlConfig.js";
const Form = db.form;

const submitForm = async (req, res) => {
    //to refactor this to controller
    try {
        const form = await Form.create({
            id: req.session.user.id,
            email: req.session.user.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            title: req.body.projectTitle,
            domain: req.body.domain,
            n_gpu: req.body.reqGpu,
            gpu_memory: req.body.reqGpuMem,
            n_cpu: req.body.reqCpu,
            n_cuda_cores: req.body.reqCudaCores,
            n_tensor_cores: req.body.reqTensorCores,
            system_memory: req.body.reqSysMem,
            os: req.body.OS,
            os_version: req.body.OSVersion,
            dgx_drivers: req.body.DGXDrivers,
            containers: req.body.reqContainers,
            containers_version: req.body.containerVersions,
            from_date: req.body.fromDate,
            to_date: req.body.toDate,
            is_approved: false
        })
        console.log(form)
        res.status(200).send({message:"Successfully logged in"})
    } catch {
        res.status(500).send({message:"Some error occured"});
    }
}

export { submitForm }