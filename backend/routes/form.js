import { Router } from "express";
const formRouter = Router();
import { db } from "../utils/sqlConfig.js";

const Form = db.form;

formRouter.post('/request-form', (req, res) => {
    //to refactor this to controller
    try {
        Form.create({
            id: req.body.id,
            email: req.body.email,
            title: req.body.title,
            domain: req.body.domain,
            n_gpu: req.body.n_gpu,
            gpu_memory: req.body.gpu_memory,
            n_cpu: req.body.n_cpu,
            n_cuda_cores: req.body.n_cuda_cores,
            n_tensor_cores: req.body.n_tensor_cores,
            system_memory: req.body.system_memory,
            os: req.body.os,
            os_version: req.body.os_version,
            dgx_drivers: req.body.dgx_drivers,
            containers: req.body.containers,
            containers_version: req.body.containers_version,
            date: req.body.date,
            from_date: req.body.from_date,
            to_date: req.body.to_date,
            is_approved: req.body.is_approved
        })
    } catch {
        res.send(404);
    }
})