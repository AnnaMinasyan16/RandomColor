import { API_URL } from "../Constants/API_URL";

export const fetchColors = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("Error loading colors:", error);
      return null;
    }
  };
  

  export const fetchPost = async(name) => {
    try{
      const response = await fetch(API_URL,{
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${name}`,
      })
      const data = await response.json();
      return data;
    } catch(error){
      console.log(error);
    }
  }