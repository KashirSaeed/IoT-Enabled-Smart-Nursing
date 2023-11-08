import axios from 'axios';
import validateAccess from './validateAccess';



const getDoctor = async () => {
    const axio_instance = axios.create({ withCredentials: true });
    var token = await validateAccess()
    if (token != 'unauthorized_user') {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        var res;
        await axio_instance.get('http://127.0.0.1:8000/doctor/', { headers }).then((response) => {
            if (response.status === 200) {
                res = response.data
            }
            else {
                return false
            }
        })
            .catch((error) => {
                res = error;
            })
        return res
    }
    else {
        return "unauthorized_user"
    }
}


export default getDoctor;