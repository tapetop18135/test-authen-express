
const methods = {
    getAll(req,res){
        res.send("Shoow all")
    },
    get(req,res){
        res.send("Show 3")
    },
    create(req,res){
        res.send("create")
    },
    update(req,res){
        res.send("updatesss")
    },
    deleteComment(req,res){
        res.send("Deletsss")
    }
}

export default methods