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

app.get("/api/personel", (req,res)=> {
    res.json(personel);
});

app.get("/api/socialMedias", (req,res)=> {
    res.json(socialMedias);
});


app.listen(5000, ()=> console.log("Backend http://localhost:5000 üzerinde çalışıyor..."));