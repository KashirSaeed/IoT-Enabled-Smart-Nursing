import axios from 'axios';
import validateAccess from './ValidateAccess';

const queryingBard = async (data) => {

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
        await axios.post('http://127.0.0.1:8000/queryBard/query/', data, { headers }).then((response) => {

        if (response.status === 200) {
            res = response.data.response
           
        }
    })
        .catch((error) => {
            return false;
        })
        return res
    }
}


export default queryingBard;