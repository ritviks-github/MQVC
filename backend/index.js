const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


// middlewares
app.use(express.json());
app.use(cors());

// mongodb connection
mongoose.connect('mongodb://localhost:27017/MQVC').then(()=>{
    console.log("Connected to mongoDB");
}).catch(()=>{
    console.log("Error connecting to mongoDB");
})

// the entire login process is done here via number
const phoneReg = new mongoose.Schema({
    mobile:Number
});
const Mobilenum = mongoose.model('Mobilenum',phoneReg);
app.post('/numberlog',(req,res)=>{
    const number = req.body.number;
    Mobilenum.findOne({mobile:number}).then((result)=>{
        console.log(result);
        if(!result){
            Mobilenum.create({mobile:number}).then((doc)=>{
                console.log(doc);
                res.json("created");
            })
        }
        if(result){
            res.json("You are logged in");
        }
    }).catch((err)=>{
        console.log(err);
    })
})
// login process via number ends here
// register processs starts here
const registerSchema = new mongoose.Schema({
    email:String,
    name:String,
    company:String,
    designation:String,
});
const Person = mongoose.model('Person',registerSchema);

app.post('/register',(req,res)=>{
    const {email,name,compname,desig} = req.body;
    Person.create({email:email,name:name,company:compname,designation:desig}).then((doc)=>{
        console.log(doc);
        res.json("Done");
    }).catch((err)=>{
        res.json("error");
        console.log(err);
    })
})
// register process ends here




// attendance process starts here
const attendeeSchema = new mongoose.Schema({
    passcode:String,
    attendanceStatus:String,
    mobile:Number
});
const Attenders = mongoose.model('Attenders',attendeeSchema);

app.post('/attend',(req,res)=>{
    const {passcode,number} = req.body;
    if(!Attenders.findOne({mobile:number})){
        if(passcode === '1000'){
            Attenders.create({passcode:passcode,attendanceStatus:"Present",mobile:number}).then((doc)=>{
                console.log(doc);
                res.json("Present");
            }).catch(()=>{
                console.log("Error has occoured");
            });
        }
    }
    else{
        res.json("D");
    } 
})
// attendance process ends here


// querying starts here

const querySchema = new mongoose.Schema({
    question:String,
    mobile:Number
});
const Query = mongoose.model('Query',querySchema);

app.post('/query',(req,res)=>{
    const {question,number} = req.body;
    Query.create({question:question,mobile:number}).then((doc)=>{
        console.log(doc);
        res.json("Query Submitted");
    }).catch((err)=>{
        console.log(err);
        res.json("Error");
    })
})
// querying ends here

// feedback starts here
const feedbackSchema = new mongoose.Schema({
    How_do_you_rate_the_Market_Quality_Vendor_Convention_Initiative:Number,
    Is_the_information_shared_useful_for_market_defect_analysis:Number,
    How_do_you_rate_the_initiative_of_Best_Practices_Sharing_Session:Number,
    How_do_you_rate_the_format_of_Interactive_survey_session_and_its_content:Number,
    How_do_you_rate_the_Panel_Discussion:Number,
    How_do_you_rate_the_Overall_arrangements:Number,
    Improvements:String
});
const Feedback = mongoose.model('Feedback',feedbackSchema);
app.post('/feedbacks',(req,res)=>{
    const {num1,num2,num3,num4,num5,num6,suggest} = req.body;
    Feedback.create({
        How_do_you_rate_the_Market_Quality_Vendor_Convention_Initiative:num1,
        Is_the_information_shared_useful_for_market_defect_analysis:num2,
        How_do_you_rate_the_initiative_of_Best_Practices_Sharing_Session:num3,
        How_do_you_rate_the_format_of_Interactive_survey_session_and_its_content:num4,
        How_do_you_rate_the_Panel_Discussion:num5,
        How_do_you_rate_the_Overall_arrangements:num6,
        Improvements:suggest
    }).then((doc)=>{
        console.log(doc);
        res.json("Feed Shared");
    }).catch((err)=>{
        console.log(err);
        res.json("Error");
    })
})















// feedback ends here

// attendance process ends here
// listening to server
const port = 3001;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})