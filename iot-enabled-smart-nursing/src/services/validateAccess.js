import { Key } from '@mui/icons-material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


const validateAccess = async ()=>  {

    const access_token=localStorage.getItem("access_token")
    const exp_time=new Date(localStorage.getItem("exp_time"))
    const date = new Date()
    const current_time=date
    if(exp_time<current_time){
        const headers = {
            'Authorization': `Bearer ${access_token}` 
        };
        await axios.post('http://127.0.0.1:8000/updatetoken/',null, {headers}).then((response) => {
            if(response.status === 200){
                Cookies.set('refresh_token', response.data["refresh_token"]);

                localStorage.setItem('access_token',response.data["access_token"]);
                localStorage.setItem('exp_time',response.data["exp_time"]);
                return response.data["access_token"];
            }
            else if(response.status===401){
                const navigate=useNavigate()
                navigate('/signin')
            }
        } )
        .catch( (error)=>{
            alert(error.response.data.message)
            console.log(error)
        } )
    }
    else{
        return access_token;
    }
}


export default validateAccess;