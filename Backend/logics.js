import  db from './config.js';
import './config.js';
import pkg from 'pdf-lib';
import e from 'express'; 
// const { PDFDocument, rgb } = require('pdf-lib');
import {PDFDocument} from 'pdf-lib';
import { rgb } from 'pdf-lib';
// const fs = require('fs').promises;
import fs from 'fs';
import { query, where, getDocs } from "firebase/firestore";
import { collection, addDoc, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import nodemailer from 'nodemailer';


const random_doc_id_function = async ()=>{
    var randomNumber = '';
  for (var i = 0; i < 30; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber;
}

const update_certificate = async (req, res) => {

    const querySnapshot = await getDocs(collection(db, "users"));
     
    const users =[];
     querySnapshot.forEach((doc) => {
        users.push(doc.data());
    });
    // console.log(users); 
    
    for(const user of users){
    const existing_pdf_bytes = fs.readFileSync('./certificate/ccc.pdf');
    const pdfDoc = await PDFDocument.load(existing_pdf_bytes);
    const [page] = pdfDoc.getPages();
    const {width,height} = page.getSize();
        page.drawText(user.name,{
            x:width/7.425,
            y:height/2.25,
            size:24,
            color:rgb(0,0,0),
            opacity:0.5,
        });

        const modified_pdf_bytes = await pdfDoc.save();
        fs.writeFileSync(`./modified_certificate/${user.name}_certificate.pdf`,modified_pdf_bytes);
        // const querySnapshot = await getDocs(collection(db, "users"));
        // let emails = [];
        // querySnapshot.forEach((doc) => {
        // emails.push(doc.data().email);
        // });

        
            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                  user: 'your@acropolis.in',
                  pass: 'yourpassword',
                },
              });
              const mailOptions = {
                from: 'your@acropolis.in',
                to: user.email,
                subject: 'Fmad Certificate',
                text: 'Thank you for attending the session.',
                attachments: [
                  {
                    filename: 'fmad_certificate.pdf', // Name of the attachment
                    path: `./modified_certificate/${user.name}_certificate.pdf`, // Path to the PDF file
                  },
                ],
              };
    
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.error('Email sending failed:', error);
                } else {
                  console.log('Email sent:', info.response);
                }
              });
        
        
    }
    res.send("Certificates Generated and sent to all the attendees");
}


export {update_certificate , random_doc_id_function };