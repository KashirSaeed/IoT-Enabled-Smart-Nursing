import axios from 'axios';

 const postingData = async (data)=>  {
    await axios.post('https://fyp-backend-abdulahad696.vercel.app/userData/', data)
        .then((response) => {
            console.log(response);
            if (response.data['response'] === "User Already Exists") {
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