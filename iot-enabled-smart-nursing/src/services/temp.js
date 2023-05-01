import { useEffect } from "react";
const GetData=async()=>{await useEffect(() => {
     fetch('http://localhost:8000/fetch/')
      .then(response => response.json())
      .then(data =>{return data;} )
      .catch(error => console.error(error));
  }, []);}
export default GetData;
