
import axios from 'axios';
import validateAccess from './ValidateAccess';

const activityData = async () => {
    let token = await validateAccess()


    try {
        let response = await axios.get('http://127.0.0.1:8000/activities/');
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        alert(error.response.data.message)
        console.log(error)
    }
};

export default activityData;