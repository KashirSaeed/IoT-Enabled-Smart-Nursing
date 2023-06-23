// import React from "react";

class LocalStorage{
    
    constructor(){
        console.log('Local Storage Initialised')
    }
    getCredentials(){
        let email = localStorage.getItem('email')
        return email;
    }
    setCredentials(Id){
        console.log("Email ID Stored in localstorage")
        localStorage.setItem('email',Id)
    }
    removeCredentials(){
        localStorage.removeItem('email');
    }
}

const localStorageInstance = new LocalStorage()

export default localStorageInstance;