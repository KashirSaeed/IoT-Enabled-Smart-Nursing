import { Key, Token } from '@mui/icons-material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


const validateAccess = async ()=>  {

    const access_token=localStorage.getItem("access_token");
    // const exp_time=new Date(localStorage.getItem("exp_time"))
    const exp_time=localStorage.getItem("exp_time");

    const date_pk = new Date();
    const current_time=date_pk.toISOString();

    var output;

    

    
    if(exp_time<current_time){
        const refresh_token=Cookies.get("refresh_token")
        const headers = {
            'Authorization': `Bearer ${refresh_token}` 
        };
        await axios.post('http://127.0.0.1:8000/updatetoken/',null, {headers}).then((response) => {
            if(response.status === 200){
                Cookies.set('refresh_token', response.data["refresh_token"]);

                localStorage.setItem('access_token',response.data["access_token"]);
                localStorage.setItem('exp_time',response.data["exp_time"]);
                output=response.data["access_token"];
            }
        } )
        .catch( (error)=>{
            output="unauthorized_user"
        } );
        return output
    }
    else{

        return access_token;
    }
}


export default validateAccess;