import React, {useState} from 'react'
import './Login.css'
import Button from '../CommonComponents/Button/Button'
import axios from 'axios'

function Login({setAppState, Appstate}) {
    const [LoginData, setLoginData] = useState({
        phoneNumber: '',
        password: ''
    })

    const onChange = (e) => setLoginData({ ...LoginData, [e.target.name]: e.target.value });
    const HandleLogin = async () => {
        let LoginResp = await axios.post("http://localhost:5000/login",{LoginData})
        console.log(LoginResp.data.success)
        if(LoginResp.data.success){
            setAppState({...Appstate, user: LoginResp.data.data})
        }
    }
    return (
        <div className="LoginContainer">
            <input type="number" placeholder="Mobile Number" name="phoneNumber" onChange={onChange}/>
            <input type="password" placeholder="Password" name="password" onChange={onChange}/>
            <Button title={`Login`} onClick={() => {HandleLogin()}}/>
        </div>
    )
}

export default Login
