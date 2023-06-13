const express = require("express");
const cors = require("cors");
const connection = require("./server");
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const Personel = require("./models/personel");
const checkPersonelRecord = require("./services/personel");

connection();
checkPersonelRecord();

const socialMediaSchema = new mongoose.Schema({
    name: String,
    icon: String,
    link: String
});

const SocialMedia = mongoose.model("SocialMedia", socialMediaSchema);

let socialMedias = [
    {
        name: "Facebook",
        icon: `<i class="fa-brands fa-facebook"></i>`,
        link: "https://www.facebook.com"
    },
    {
        name: "Twitter",
        icon: `<i class="fa-brands fa-twitter"></i>`,
        link: "https://www.twitter.com"
    },
    {
        name: "Github",
        icon: `<i class="fa-brands fa-github"></i>`,
        link: "https://www.github.com"
    },
    {
        name: "Linkedin",
        icon: `<i class="fa-brands fa-linkedin"></i>`,
        link: "https://www.linkedin.com"
    },
    {
        name: "Instagram",
        icon: `<i class="fa-brands fa-instagram"></i>`,
        link: "https://www.instagram.com"
    },
]

async function checkSocialMediaRecords(){
    let result = await SocialMedia.find();

    if(result.length == 0){
        for(let sc of socialMedias){
            let socialMedia = new SocialMedia();
            socialMedia.name = sc.name;
            socialMedia.icon = sc.icon;
            socialMedia.link = sc.link;

            await socialMedia.save();
        }
    }
}

checkSocialMediaRecords();


let subscibeSchema = new mongoose.Schema({
    email: String
});

let SubScribe = mongoose.model("Subscribe", subscibeSchema);


let abilities = [
    {
        image: "https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn",
        title: "HTML"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        title: "JavaScript"
    },
    {
        image: "https://play-lh.googleusercontent.com/ajbmMCoaThQcD4_z-1-6H79M0ItJ1Vz2jW_5yRB_eb1d_Fdzmdci0SPHFfujQj23n-Q",
        title: "CSS"
    },
    {
        image: "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png",
        title: "JQuery"
    }
]

let abilitySchema = new mongoose.Schema({
    image: String,
    title: String
});

let Ability = mongoose.model("Ability", abilitySchema);

function checkAbilityRecords(){
    Ability.find().then(res=> {
        if(res.length == 0){
            for(let ab of abilities){
                let ability = new Ability();
                ability.image =ab.image;
                ability.title = ab.title;
                ability.save();
            }
        }
    })
}

checkAbilityRecords();

let contactSchema = new mongoose.Schema({
    email: String,
    subject: String,
    content: String,
    date: Date
});

let Contact = mongoose.model("Contact",contactSchema);


app.get("/api/personel", async (req,res)=> {
    let results = await Personel.find();
    res.json(results[0]);
});

app.get("/api/socialMedias", async (req,res)=> {
    let results = await SocialMedia.find();
    res.json(results);
});

app.post("/api/addEmailForSubscribe", async (req, res)=> {
    const {email} = req.body;
    let result = await SubScribe.find({email: email})
    if(result.length == 0){
        let sb = new SubScribe();
        sb.email = email;
        sb.save();
    }

    res.json({message: "Email başarıyla listeye eklendi!"});
});

app.get("/api/getAbilities", async (req, res)=> {
    let results = await Ability.find();
    res.json(results);
});

app.post("/api/send", async (req, res)=> {
    const contact = new Contact(req.body);
    let date = new Date();
    date.setHours(date.getHours() + 3);
    contact.date = date;
    await contact.save();
    res.json({message: "Mailiniz başarıyla gönderildi!"});
});


app.listen(5000, ()=> console.log("Backend http://localhost:5000 üzerinde çalışıyor..."));