const nodemailer = require("nodemailer");

let mailTranspoter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"backenddevelopment39@gmail.com",
        pass:"BackendDevelopment@123"
    },
});

let details = {
        from:"backenddevelopment39@gmail.com",
        to:"ssharma0355@gmail.com",
        subject:"Testing node mailer",
        text:"testing out 1st sender",
};
mailTranspoter.sendMail(details,(err)=>{
    if(err){
        console.log("It has an error in code",err);
    }
    else{
        console.log("email has sent");
    }
})