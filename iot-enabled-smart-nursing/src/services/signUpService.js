import axios from 'axios';

 const postingData = async (data)=>  {
    await axios.post('http://localhost:8000/userData/', data)
        .then((response) => {
            console.log(response);
            if (response.data['response'] == "Already Exist User") {
                alert(response.data['response'])
            }
            else {
                alert("User Registered Successfully")
            }
            // event.target.reset();
        })
        .catch((error) => {
            console.log(error)
        })
}

export default postingData