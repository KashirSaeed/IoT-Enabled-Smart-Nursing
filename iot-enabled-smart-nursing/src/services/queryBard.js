import axios from 'axios';
import validateAccess from './validateAccess';

const queryingBard = async (data) => {
    // {withCredentials:true}
    
    // const axio_instance=axios.create({withCredentials:true});
    let headers;
    await validateAccess().then(() => {
        const access_token=localStorage.getItem("access_token")
        headers = {
            'Authorization': `Bearer ${access_token}`
        };
    }).catch((error) => console.log(error))

    // console.log(access_token)
    await axios.post('http://127.0.0.1:8000/queryBard/', data, { headers }).then((response) => {

        if (response.status === 200) {
            return response['data']['response'];
        }
    })
        .catch((error) => {
            return false;
        })

}


export default queryingBard;