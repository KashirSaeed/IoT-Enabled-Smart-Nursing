import { Key } from '@mui/icons-material';
import axios from 'axios';
import Cookies from 'js-cookie';



const readingData = async (data)=>  {
    const axio_instance=axios.create({withCredentials:true});
    var login=false
    await axio_instance.post('http://127.0.0.1:8000/signin/', data).then((response) => {

        if(response.status === 200){
            Cookies.set('refresh_token', response.data["refresh_token"]);

            localStorage.setItem('access_token',response.data["access_token"]);
            localStorage.setItem('exp_time',response.data["exp_time"]);
            localStorage.setItem('user_type',response.data["user_type"]);

            // alert("User Login Successfully");
            login=true
        }
    } )
    .catch( (error)=>{
        // alert(error.response.data.message);
        // console.log(error);
        login=false;
    } )
    
    return login
}


export default readingData;