
const methods = {
    getAll(req,res){

        

        res.send("get All")
    },
    get(req,res){
        res.send("get 2")
    },
    create(req,res){
        res.send("create")
    },
    update(req,res){
        res.send("Update")
    },
    deleteArticle(req,res){
        res.send("Delete")
    }
}

export default methods