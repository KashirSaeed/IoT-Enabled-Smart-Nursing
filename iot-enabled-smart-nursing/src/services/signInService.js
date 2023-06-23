import axios from 'axios';
import localStorageInstance from './localStorage';
async function readingData(myEmail,myPassword,isAuthenticatedByGoogle){
    var ls = localStorageInstance
    var loggedin = false
    await axios.get(`http://127.0.0.1:8000/user/${myEmail}/${myPassword}/${isAuthenticatedByGoogle}/`).then( (response) =>{
        // console.log(response.data['response']);
        if( response.data['response'] === "true"){
            alert("login in successfully")
            ls.setCredentials(myEmail)
            loggedin =  true;
        }
        else if(response.data['response'] === "false"){
            alert("login in failed");
            loggedin =  false;
        }
        // event.target.reset();
    } )
    .catch( (error)=>{
        console.log(error)
    } )
    return loggedin;
}

export default readingData