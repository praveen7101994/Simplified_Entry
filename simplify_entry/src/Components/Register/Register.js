import React, {useState} from 'react'
import './Register.css'
import Button from '../CommonComponents/Button/Button'
import axios from 'axios';

function Register({setAppState,Appstate}) {

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        society:'',
        password: '',
        password2: ''
    });

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const HandleRegister = async () => {
        let RegisterResp = await axios.post('http://localhost:5000/register',{
            headers: {"Access-Control-Allow-Origin": "*"},
            formData
        })
        console.log(RegisterResp)
        if(RegisterResp.data.success){
            setAppState({...Appstate, user: RegisterResp.data.data})
        }
    }
    return (
        <div className="RegisterContainer">
            <input type="text" placeholder="Name" name="name" onChange={onChange}/>
            <input type="number" placeholder="Phone Number" name="phoneNumber"onChange={onChange}/>
            <input type="text" placeholder="Society" name="society"onChange={onChange}/>
            <input type="password" placeholder="Password" name="password" onChange={onChange}/>
            <input type="password" placeholder="Confirm Password" name="password2"onChange={onChange}/>
            <Button title={`Submit`} onClick={() => {HandleRegister()}} onChange={onChange}/>
        </div>
    )
}

export default Register
