// import axios from 'axios';

//  const postingData = async (data)=>  {
//     await axios.post('https://fyp-backend-abdulahad696.vercel.app/userData/', data)
//         .then((response) => {
//             console.log(response);
            
//             if (response.data['response'] === "User Already Exists") {
//                 alert(response.data['response'])
//             }
//             else {
//                 alert("User Registered Successfully")
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

// export default postingData



import axios from 'axios';
const postingData = async (data)=>  {
    await axios.post('http://127.0.0.1:8000/userData/', data)
        .then((response) => {
            console.log(response);
            
            if (response.data['response'] === "Already Exist User") {
                alert(response.data['response'])
            }
            else {
                alert("User Registered Successfully")
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

export default postingData