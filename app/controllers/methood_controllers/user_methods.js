import modelUser from '../../models/users_model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const db = new modelUser()

const methods = {
    getAll(req,res){
        res.json({
            users : db.getAll() 
        })
    },
    get(req,res){
        console.log(req.params.id)
        res.json({
            user : db.get(req.params.id)
        })
    },
    create(req, res){
        
        bcrypt.hash(req.body.password,12,(err,hash) => {

            // console.log(jwt.sign({sub : req.body.email},'secret',{ expiresIn: '1h'}))
            
            res.header('Authorization',`tapeE ${jwt.sign({sub : req.body.email},'secret',{ expiresIn: '1h'})}`)
               .json({
                users: db.create({email:req.body.email,password:hash})
            })
            
        })
        // console.log("test")
        // res.json({
        //     users: db.create({email:req.body.email,password:req.body.password})
        // })
    },
    update(req,res){
        res.json({
            users: db.update(req.params.id,{email:req.body.email,password:req.body.password})
        })
    },
    deleteUser(req,res){
        res.json({
            users: db.deleteUser(req.params.id)
        })
    }
}
export default methods