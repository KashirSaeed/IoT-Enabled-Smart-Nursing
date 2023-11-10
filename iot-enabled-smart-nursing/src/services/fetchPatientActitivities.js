import validateAccess from './ValidateAccess';
import axios from "axios";

const fetchPatientActs=async()=>{
    // Fetching updated access token
    let val = await validateAccess()
    let res;
    console.log(val)
    if (val == "unauthorized_user"){
        window.location('/sign-in');
    }
    else{
        
        const headers = {
            'Authorization': `Bearer ${val}` 
        };
        let response = await axios.get('http://127.0.0.1:8000/fetchUserData/',{headers})
        // console.log(response);
        if (response.status == 200){
            res = response
        }
        else{
            return {"response":"Failed"}
        }
        return res
    }
}

export default fetchPatientActs;