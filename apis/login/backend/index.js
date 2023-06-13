const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {v4:uuidv4} = require("uuid");

const uri = "mongodb+srv://tahir:1@cluster0.vpoczao.mongodb.net/";

mongoose.connect(uri).then(()=> console.log("MongoDb bağlantısı başarılı!"));


const userSchema = new mongoose.Schema({
    _id: String,
    email: String,
    password: String,
});
const User = mongoose.model("User", userSchema);

const roleSchema = new mongoose.Schema({
    _id: String,
    name: String,
});
const Role = mongoose.model("Role", roleSchema);

const userRoleSchema = new mongoose.Schema({
    userId: String,
    roleId: String
});
const UserRole = mongoose.model("UserRole", userRoleSchema);


checkUsers();

async function checkUsers(){
    let kullanicilar = await User.find();
    if(kullanicilar.length == 0){
        let kullanici = new User();
        kullanici._id = uuidv4();
        kullanici.email = "tanersaydam@gmail.com";
        kullanici.password = "1";        
        kullanici.save();
    }
}

checkRoles();

async function checkRoles(){
    let roles = await Role.find();
    if(roles.length == 0){
        let role1 = new Role();
        role1._id = uuidv4();
        role1.name = "Admin";
        role1.save();

        let role2 = new Role();
        role2._id = uuidv4();
        role2.name = "Yönetici";
        role2.save();

        let role3 = new Role();
        role3._id = uuidv4();
        role3.name = "Moderatör";
        role3.save();

        let role4 = new Role();
        role4._id = uuidv4();
        role4.name = "User";
        role4.save();
    }
}

setUserRole();

async function setUserRole(){
    let users = await User.find();
    if(users.length == 0) return;

    let roles = await Role.find();
    if(roles.length == 0) return;

    for(let r of roles){
        let checkUserRole = await UserRole.find({userId: users[0]._id, roleId: r._id});
        if(checkUserRole.length > 0) continue;

        let userRole = new UserRole();
        userRole.userId = users[0]._id;
        userRole.roleId = r._id;
        userRole.save();
    }
    
}

app.get('/users', async (req, res) => {
    try {
        const usersWithRoles = await User.aggregate([
            {
                $lookup: {
                    from: UserRole.collection.name,
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'userRoles'
                }
            },
            {
                $unwind: "$userRoles"
            },
            {
                $lookup: {
                    from: Role.collection.name,
                    localField: 'userRoles.roleId',
                    foreignField: '_id',
                    as: 'userRoles.role'
                }
            },
            {
                $unwind: "$userRoles.role"
            },
        ]);

        res.json(usersWithRoles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


const cors = require("cors");

app.use(express.json());
app.use(cors());

const secretKey = "My secrasdasdey key my secret key 12345..!";
const options = {
    expiresIn: "1h"
}

async function roleCheck(userId,role){
    //rolleri elde eder
    //elde ettiği rolleri rol ile kontrole der
    //true / false döner
}

app.get("/", (req,res)=>{
    res.json({message:"Api başarıyla çalışıyor!"});
});

app.post("/login", async (req,res)=>{
    const {email, password} = req.body;
    let user = await User.findOne({email: email, password: password});
    if(user == null){
        res.status(401).json({message: "Kullanıcı bulunamadı!"})
    }else{
        const payload = {
            email: user.email,
        }

        let token = jwt.sign(payload,secretKey,options);
        res.json({accessToken: token});
    }
});

app.listen(5000,()=> {
    console.log("Uygulama http://localhost:5000 portunda ayakta");
});