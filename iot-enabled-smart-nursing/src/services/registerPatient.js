
import axios from 'axios';
import validateAccess from './validateAccess';
import backend_url from '../constants.js'

const registerPatient = async (data) => {
    const token=await validateAccess()
    if(token!="unauthorized_user"){
        console.log("Main a gya")
        const headers = {
            'Authorization': `Bearer ${token}` 
        };
        await axios.post('http://127.0.0.1:8000/patient/patient-register/',data, {headers}).then((response) => {
            if(response.status === 200){
                return true

            }
        } )
        .catch( (error)=>{
            // output="unauthorized_user"
            return false
        } );
    }
};

export default registerPatient;
