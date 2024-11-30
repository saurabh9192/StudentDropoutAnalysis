
const express = require('express');
const School = require('../model/schoolSchema');
const Student = require('../model/studentSchema');
const AdminUser = require('../model/adminSchema');
const StateUser = require('../model/stateSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const randomize = require('randomatic'); // for OTP generation
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('../db/conn');
const authenticate = require('../Middleware/authenticate');
const cookieParser = require('cookie-parser');

const router = express.Router();
router.use(cookieParser());

router.get("/", (req, res) => { 
    res.send("Hello, I am backend from routes");
});
const CLIENT_ID = '1037729424958-8frobhpkjek9aslelo941dehmbr00sq6.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04hQ33RnW21zKCgYIARAAGAQSNwF-L9IrA_WZu05wHxIGkCLn9iO68cHXb9d3O4HCOAr9fNlqLC9Qvcw-w5t2_MfXeubHFVD30Ps';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendOtpEmail(email, otp) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'saurabh.deshmukh@mitaoe.ac.in', // Your Gmail address
          pass: 'lhsl ywss sesx sick', // App Password generated from Google account
        },
      });
  
      const mailOptions = {
        from: 'saurabh.deshmukh@mitaoe.ac.in',
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP is ${otp}`,
        html: `<h1>Your OTP is ${otp}</h1>`,
      };
  
      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      return error;
    }
  }
var Otp = 0;
  router.post('/send-otp', async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }
  
    try {
      // Generate a new OTP
      Otp = randomize('0', 6); // Generates a 6-digit OTP
  
      // Send the new OTP via email
      await sendOtpEmail(email, Otp);
  
      return res.status(200).json({ success: true, message: 'OTP sent successfully' });
    } catch (err) {
      console.error('Error sending OTP:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  });
  
  // Verify OTP Endpoint
  router.post('/verify-otp', async (req, res) => {
    const {  otp } = req.body;
  
    if ( !otp) {
      return res.status(400).json({ success: false, message: 'OTP is required' });
    }
  
    try {
  
      if (otp !== Otp) {
        return res.status(400).json({ success: false, message: 'Invalid OTP' });
      }
      
  
      return res.status(200).json({ success: true, message: 'OTP verified successfully' });
    } catch (err) {
      console.error('Error during OTP verification:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  });
  
  // Resend OTP Endpoint
  router.post('/resend-otp', async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }
  
    try {
      // Generate a new OTP
      Otp = randomize('0', 6); // Generates a 6-digit OTP
  
      // Send the new OTP via email
      await sendOtpEmail(email, Otp);
  
      // Update the OTP in the database
  
      return res.status(200).json({ success: true, message: 'OTP resent successfully' });
    } catch (err) {
      console.error('Error resending OTP:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  });


// New School Register Route
router.post("/schoolregister", async (req, res) => {
    try {
        const { schoolname, udisecode, state, district, taluka, city, pincode, board, classfrom, classto, yearofestablishment, fname, mname, lname, email, isteacher, gender, phno, password } = req.body;

        if (!password) {
            return res.status(422).json({ message: "Please fill all the details" });
        }

        const isSchoolExist = await School.findOne({ udisecode: udisecode });

        if (isSchoolExist) {
            return res.status(422).json({ message: "School already exists" });
        }

        const newSchool = new School({ schoolname, udisecode, state, district, taluka, city, pincode, board, classfrom, classto, yearofestablishment, fname, mname, lname, email, isteacher, gender, phno, password });

        const isSchoolRegistered = await newSchool.save();

        if (isSchoolRegistered) {
            // Generate OTP
            const generatedOtp = randomize('0', 6);
            newSchool.otp = generatedOtp;
            await newSchool.save();

            // Send OTP to user's email
            await sendOtpEmail(email, generatedOtp);

            res.status(201).json({ message: "SCHOOL REGISTERED SUCCESSFULLY. OTP sent to email." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// School Login Route
router.post("/schoollogin", async (req, res) => {
    try {
        const { udisecode, email, password } = req.body;

        if (!udisecode || !email || !password) {
            return res.status(422).json({ message: "Please fill all the details" });
        }

        const isSchoolExist = await School.findOne({ udisecode: udisecode });

        if (isSchoolExist) {
            const token = isSchoolExist.generateAuthToken()
            console.log(token)

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2592000000),
                httpOnly: true,
            });

            const passwordMatch = await bcrypt.compare(password, isSchoolExist.password);

            if (!passwordMatch) {
                return res.status(401).json({ message: "INVALID CREDENTIALS" });
            } else {
                console.log(isSchoolExist);
                return res.status(200).json({ message: "Login Successfully" });
            }
        } 
        
        else {
            console.log("ERROR");
            return res.status(400).json({ message: "YOU DON'T HAVE A SCHOOL REGISTERED ACCOUNT" });
        }
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Admin Login Route
router.post("/adminlogin", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ message: "Please fill all the details" });
        }

        const adminUser = await AdminUser.findOne({ email });


        if(adminUser)
        {
            const passwordMatch = adminUser.password === password;

            if (!passwordMatch) {
                return res.status(401).json({ message: "INVALID CREDENTIALS" });
            } else {
                console.log(adminUser);
                return res.status(200).json({ message: "Login Successfully" });
            }

        }

        else
        {
            console.log("ERROR");
            return res.status(400).json({ message: "NO ADMIN WITH THESE CREDENTIALS" });
        }


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// State Login Route
router.post("/statelogin", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ message: "Please fill all the details" });
        }

        const stateUser = await StateUser.findOne({ email });


        if(stateUser)
        {
            const passwordMatch = stateUser.password === password;

            if (!passwordMatch) {
                return res.status(401).json({ message: "INVALID CREDENTIALS" });
            } else {
                console.log(stateUser);
                return res.status(200).json({ message: "Login Successfully" });
            }

        }

        else
        {
            console.log("ERROR");
            return res.status(400).json({ message: "NO STATE AUTHORITY WITH THESE CREDENTIALS" });
        }


    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



//Welcome after school login
router.get('/welcomeafterschoollogin', authenticate, (req, res) => {
    // console.log('Authenticated User:', req.rootUser);
    // res.status(200).json({ message: 'Welcome after school login', user: req.rootUser });
    console.log('mj')
    res.send(req.rootUser)
});


// New Student Dropout Route
router.post("/welcomeafterschoollogin", async (req, res) => {
    try {
        const { fname, mname, lname, email, age, gender, phno, address, aadharno, year, udisecode, reason, password } = req.body;

        if ( !fname || !mname || !lname || !email || !age || !gender || !phno || !address || !aadharno || !year || !udisecode || !reason || !password) {
            return res.status(422).json({ message: "Please fill all the details" });
        }

        const isStudentExist = await Student.findOne({ aadharno: aadharno });
        const isSchoolExist = await School.findOne({ udisecode: udisecode });

        if (isStudentExist) {
            return res.status(422).json({ message: "Student already exists" });
        }

        if (isSchoolExist) {

            const passwordMatch = await bcrypt.compare(password, isSchoolExist.password);

            if (!passwordMatch) {
                window.alert('Password not matches')
                return res.status(401).json({ message: "INVALID CREDENTIALS - Password not matching" });
            } 
            
            else {
                const newStudent = new Student({ fname, mname, lname, email, age, gender, phno, address, aadharno, year, udisecode, reason, password });
                
                const isStudentRegistered = await newStudent.save();
                
                if (isStudentRegistered) {
                    window.alert('STUDENT DROPOUT DETAILS REGISTERED SUCCESSFULLY')
                    res.status(201).json({ message: "STUDENT DROPOUT DETAILS REGISTERED SUCCESSFULLY" });
                }
            }
        } 

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
