

import axios from 'axios';
const postingData = async (data)=>  {
    await axios.post('http://127.0.0.1:8000/signup/', data)
        .then((response) => {
            if(response.status === 201){
                alert("User Registered Successfully")
            }
        })
        .catch((error) => {
            alert(error.response.data.message)
            console.log(error)
        })
}

export default postingData