import db from './config.js';
import './config.js';
import {random_doc_id_function} from './logics.js';
import express from 'express';
// import { query, where, getDocs } from "firebase/firestore";
import { collection, addDoc, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

  

const users = async (req, res) => {
    const {
        name,
        email,
        mobile_no,
    } = (req.body);

    try {
        
        await setDoc(doc(db, "users", await random_doc_id_function()), {
        name,
        email,
        mobile_no,
        });

    }
    
    

    catch (e) {
        res.send("Data not inserted " + e);
    }
    res.send("Data Inserted");
}

export default users;