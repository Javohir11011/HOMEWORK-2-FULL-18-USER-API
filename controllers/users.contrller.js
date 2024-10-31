

export async function getAllUser(req, res, next){
    try {
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}

export async function getUserById(req, res, next){
    try {
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}


export async function createUser(req, res, next){
    try {
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}


export async function getPutUserById(req, res, next){
    try {
        res.status(200).send("Update")
  } catch (error) {
        next(error)
    }
}

export async function deleteByIdUser(req, res, next){
    try {
        res.status(200).send("Delete")
  } catch (error) {
        next(error)
    }
}
