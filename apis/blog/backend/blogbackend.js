const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let personel = {
    name: "Taner Saydam",
    logo: "logo.png",
    aboutMe: `
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores pariatur molestiae sapiente, quasi non id culpa quam sunt eos aliquam deleniti accusamus voluptate cupiditate minus quia? Eos velit error quae?
        Temporibus labore amet reiciendis omnis laboriosam corrupti sit unde aperiam ullam fugit ex consequuntur quos, totam eligendi tenetur recusandae molestiae minus nesciunt illo quis? Suscipit doloremque labore id ipsum reiciendis!
        </p>
        <br>
        <p>
        Dolor quidem consectetur est quo, quam, aut molestiae rem omnis vitae perspiciatis, id assumenda itaque doloremque ipsum. Porro ab, voluptate, sunt nemo repellat quis mollitia repellendus alias modi architecto odio?
        Asperiores repudiandae cum quo voluptas!
        </p>
        <br>
        <p>Aliquam velit dolores sapiente iure voluptas inventore obcaecati, culpa reprehenderit id! Ad ipsa labore est nemo cumque perspiciatis quod. Blanditiis laborum totam provident quis tempora.
        Nobis ex nam at. Perferendis nisi voluptate eos, repudiandae animi reiciendis perspiciatis aliquid, non quas impedit repellendus iste expedita quasi laboriosam aliquam delectus hic! Ad quas incidunt quos sequi quo?</p>
        `
}

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

let subscibes = [];

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

app.get("/api/personel", (req,res)=> {
    res.json(personel);
});

app.get("/api/socialMedias", (req,res)=> {
    res.json(socialMedias);
});

app.post("/api/addEmailForSubscribe", (req, res)=> {
    const {email} = req.body;
    let result = subscibes.filter(p=> p === email);    
    if(result.length == 0){
        subscibes.push(email);
    }

    res.json(subscibes);
});

app.get("/api/getAbilities", (req, res)=> {
    res.json(abilities);
});

app.post("/api/send", (req, res)=> {
    console.log(req.body);
    res.json({message: "Mailiniz başarıyla gönderildi!"});
})

app.listen(5000, ()=> console.log("Backend http://localhost:5000 üzerinde çalışıyor..."));