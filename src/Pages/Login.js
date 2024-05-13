import { useState } from 'react';
import Swal from 'sweetalert2'

import MyNav from '../Componenet/Nav/MyNav';
import './Login.css';
import { useNavigate } from 'react-router-dom';
export default function Login(){
    const [userName , SetUserName]= useState('');
    const [password , SetPassword] = useState('');
    
    const navigate = useNavigate();
    const submitHandler = () =>{
        if (userName == 'admin' && password == '1234'){
            document.cookie = "username=admin; expires=Thu, 18 Dec 2029 12:00:00 UTC; path=/";
            Swal.fire({
                title: 'Accept!',
                text: 'seccessfully Entry',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            navigate('/panel');
            
           
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'Wrong Awnser',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            navigate('/login');
          

        }
    }   

    return(
        <>
            <MyNav />
            <form className='form'>
                <input onChange={ (e) => SetUserName(e.target.value)} type="text" placeholder='User Name' /><br />
                <input onChange={(e) => SetPassword(e.target.value) } type="password" placeholder='Password' /><br />
                <input onClick={submitHandler} type="button" value={'submit'}/>



            </form>
        </>
    )
}