const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const CORS = require('cors')
app.use(CORS());
app.use(bodyParser.json())
const UserModel = require('./models/User')
const EntryModel = require('./models/Entry')
const ExitModel = require('./models/Exit')

app.get('/entry', async (req, res) => {
    let {user_id} = req.headers
    console.log(req.headers)
    try {
        let findRes = await EntryModel.find({user_id})
        console.log(findRes)
        if(findRes){
            return res.send({success: true, data: findRes})
        } else {
            return res.send({success: false, data: null})
        }
    } catch (error) {
        return res.send({success: false, data: error})
        
    }
})

app.post('/entry', async (req, res) => {
    console.log(req.body)
    let newEntry = new EntryModel(req.body)
    try {
        let SaveEntry = await newEntry.save()
        return res.send({msg: 'Logged Entry', success: true, data: SaveEntry})
    } catch (error) {
        if(error){
            return res.send({msg: 'Error loggin Entry', success: false, data: null})
        }
    }
})

app.post('/exit', async (req, res) => {
    console.log(req.body)
    let newExit = new ExitModel(req.body)
    try {
        let SaveEntry = await newExit.save()
        return res.send({msg: 'Logged Exit', success: true, data: SaveEntry})
    } catch (error) {
        if(error){
            return res.send({msg: 'Error loggin Exit', success: false, data: null})
        }
    }
})

app.post('/exit', (req, res) => {
})

app.post('/register', async (req, res) => {
    console.log('register hitten')
    let {name, phoneNumber, society, password, password2} = req.body.formData;
    if( !name || !phoneNumber || !society || !password ) {
            console.log('inside if')
            return res.send({msg: 'Registration failed, Provide all data required', success: false, data: null})
        } else {
            console.log('inside else')
            try {
                console.log('inside try')
                let newUser = new UserModel(req.body.formData) 
                let SaveResp = await newUser.save()
                return res.status(200).send({msg: 'Registration success', success: true, data: SaveResp})
            } catch (error) {
                console.log('inside catch')
                return res.status(400).json({msg: 'Registration failed', success: false, data: null})
            }
        }
})

app.post('/login', async (req, res) => {
    console.log(req.body);
    let {phoneNumber, password} = req.body.LoginData;
    console.log('phoneNumber', phoneNumber)
    try {
        let User = await UserModel.findOne({phoneNumber: phoneNumber, password: password})
        if(User){
            return res.send({data: User, success: true})
        }
        
    } catch (error) {
        res.send({error, success: false})
    }
})

app.listen(5000, () => {
    console.log('Listening on 5000')
    mongoose.connect('mongodb+srv://praveen:praveen123@cluster0.yvyyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
        if(err){
            console.log('error connecting database')
        } else {
            console.log('connected to database')
        }
    });

})