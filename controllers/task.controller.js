import { User } from "../models/users.js";

export async function getAllUser(req, res, next) {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

export async function getUserName(req, res, next) {
  try {
    const id = req.params.id;
    const user = await User.findById(id, { password: 0 });
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

export async function createUser(req, res, next) {
  try {
    const body = req.body;
    const user = await User.create(body);
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

export async function getPutUserById(req, res, next) {
  const id = req.params.id;
  const body = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, body, {
      new: true,
      lean: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User topilmadi" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export async function deleteByIdUser(req, res, next) {
  const id = req.params.id
  try {
    const user = await User.findByIdAndDelete(id)
    if(!user){
        return res.status(404).json({
            message : "User topilmadi..."
        })
    }
    res.status(200).json("malumot ochirildi...")
  } catch (error) {
    next(error);
  }
}