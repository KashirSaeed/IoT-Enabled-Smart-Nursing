// import axios from 'axios';

// async function readingData(myEmail,myPassword,isAuthenticatedByGoogle){
//     await axios.get(`http://fyp-backend-abdulahad696.vercel.app/user/${myEmail}/${myPassword}/${isAuthenticatedByGoogle}/`).then( (response) =>{
//         console.log(response.data['response']);
//         if( response.data['response'] === "true"){
//             alert("login in successfully")
//         }
//         else if(response.data['response'] === "false"){
//             alert("login in failed");
//         }
//         // event.target.reset();
//     } )
//     .catch( (error)=>{
//         console.log(error)
//     } )
// }

// export default readingData



import axios from 'axios';

async function readingData(myEmail,myPassword,isAuthenticatedByGoogle){
    await axios.get(`http://127.0.0.1:8000/user/${myEmail}/${myPassword}/${isAuthenticatedByGoogle}/`).then( (response) =>{
        console.log(response.data['response']);
        if( response.data['response'] === "true"){
            alert("login in successfully")
        }
        else if(response.data['response'] === "false"){
            alert("login in failed");
        }
        // event.target.reset();
    } )
    .catch( (error)=>{
        console.log(error)
    } )
}

export default readingData