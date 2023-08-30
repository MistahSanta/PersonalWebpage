

export default function form (req : any, res : any) 
{
    const {
        first,
        last,
        email,
        phone,
        message,
    } = req.body;
    //test
    //res.status(200).json({ data: `${first} ${last} ${email} ${phone} ${message}` });

    //Send the data in an email to myself using nodeMailer
    let nodeMailer = require('nodemailer');
    require('dotenv').config();
    const PASSWORD = process.env.appPass; 
    const MYEMAIL = process.env.myEmail;
    const BOTEMAIL = process.env.botEmail;

    const transportor = nodeMailer.createTransport({
        service: 'gmail.com',
        auth: {
            user: BOTEMAIL,
            pass: PASSWORD,
        },
        secure: true,
    });

    //Format the mail
    const mailData = {
        from: BOTEMAIL,
        to: MYEMAIL,
        subject: `Message from: ${first} + ${last}`,
        text: 'Email: ' + `${email}` + '\n' + 'Phone number' + `${phone}` + '\n' + "Message: " + `${message} `,
    
    }

    //Send the email using the transporter 
    transportor.sendMail(mailData, function(err : any, info : any)
    {
        if (err)
            console.log(err)
        else   
            console.log("email sent: " + info.body)
            alert('Your message has been sent :)');

    })
    res.status(200);
}