import db from '../../db'

class manageDB{
    getAll(){
        return this.collection()
    }
    get(id){
        return this.findRecord(+id)
    }
    create(attrs){
        const allowWrite = ['email']
        this.setWriteDB(attrs,allowWrite)
        return this.collection()


    }
    update(id,attrs){
        const collections = this.collection()
        const user = (collections.find((user)=> {
            return user.id === +id}))

        user["email"] = attrs["email"]
        user["password"] = attrs["password"]
        
        const index = collections.findIndex((val) => {return(val.id === +id)})
        
        this.setCollection([...collections.slice(0,index), user, ...collections.slice(index+1)])

        return this.collection()
        // console.log(user)
    }

    deleteUser(id){
        const collections = this.collection()
        const index = collections.findIndex( v => {return (v.id === +id)})
        
        this.setCollection([...collections.slice(0,index) , ...collections.slice(index+1)])
        return this.collection()
    }

    collection(){
        return db['users']
    }

    findRecord(id){
        return db.users.find((value => {return value.id === +id}))
    }


    setWriteDB(attr,allows){
        let user = {
            id : (db.users.length + 1),
            email : attr["email"] ,
            isAdmin : false ,
            password : attr["password"]
        }
        const collectionOne = this.collection() 

        this.setCollection([...collectionOne,user])


    }
    setCollection(collect){
        db["users"] = collect
    }
} 

export default manageDB