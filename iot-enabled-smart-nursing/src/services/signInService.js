

import axios from 'axios';
const readingData = async (data)=>  {
    await axios.post('http://127.0.0.1:8000/signin/', data).then((response) => {

        if(response.status === 201){
            alert("User Login Successfully");
        }
    } )
    .catch( (error)=>{
        alert(error.response.data.message)
        console.log(error)
    } )
}


export default readingData;