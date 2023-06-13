const Personel = require("../models/personel");

async function checkPersonelRecord(){
    let result = await Personel.find();
    if(result.length == 0){
        let personel = new Personel();
        personel.name = "Taner Saydam";
        personel.logo = "logo.png";
        personel.aboutMe = `
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
            `;

        await personel.save();
    }
}

module.exports = checkPersonelRecord;