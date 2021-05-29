import nodemailer from 'nodemailer';
import { Request, Response } from 'express';

const sendMail = (req :Request, res: Response) => {
    let subject:string = req.body.subject;
    let to:string  = req.body.to;
    let text:string  = req.body.text;
    let value = req.body.value;
    let price:number  = req.body.price;
    let name:string  = req.body.name;

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: "test.90.90.smpc@gmail.com",
        pass: "MMMMMMPO0",
        },
    });

    var mailOptions = {
        to: to,
        subject: subject,
        text: `${text} ${value} of ${name} with $${price}`,
    };

    transporter.sendMail(mailOptions, function (error:any, info:any) {
        if (error) {
            console.log(error);
            } else {
            res.send("Send to Mail Successfully, Check your email");
            }
        });
    };
export default sendMail;