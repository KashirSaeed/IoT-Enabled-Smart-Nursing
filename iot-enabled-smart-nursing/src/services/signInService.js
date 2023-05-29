import axios from 'axios';

async function readingData(myEmail,myPassword){
    await axios.get(`http://localhost:8000/user/${myEmail}/${myPassword}/`)
    .then( (response) =>{
        console.log(response.data['response']);
        // event.target.reset();
    } )
    .catch( (error)=>{
        console.log(error)
    } )
}

export default readingData