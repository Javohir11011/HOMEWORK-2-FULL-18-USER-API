import {Task} from "../models/task.js"

export async function getAllTasks(req, res, next) {
  try {
    const user = await Task.find();
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

export async function getTaskById(req, res, next) {
  try {
    const id = req.params.id;
    const user = await Task.findById(id, { password: 0 });
    if (user) {
      return res.status(200).send({
        status: "Ok",
        malumot: user,
      });
    }
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const body = req.body;
    const user = await Task.create(body);
    if (user) {
      res.status(200).send({
        status: "Ok",
        malumot: user,
      });
    }
  } catch (error) {
    next(error);
  }
}

export async function updateTask(req, res, next) {
  const id = req.params.id;
  const body = req.body;
  try {
    const user = await Task.findByIdAndUpdate(id, body, {
      new: true,
      lean: true,
    });
    if (!user) {
      return res.status(404).json({ message: "task topilmadi" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export async function removeTask(req, res, next) {
  const id = req.params.id
  try {
    const user = await Task.findByIdAndDelete(id)
    if(!user){
        return res.status(404).json({
            message : "task topilmadi..."
        })
    }
    res.status(200).json("malumot ochirildi...")
  } catch (error) {
    next(error);
  }
}
