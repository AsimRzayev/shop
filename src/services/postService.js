import axios from 'axios';
export class PostService{
  async getPostData(){
    let data=null;
    let errorMessage=null;
    let errorCode=null
   await axios.get("http://localhost:4000/").then(response=>data=response.data).catch(error=>{
    errorMessage=error.message
    errorCode=error.request.status;
})
    if(errorMessage && !data){
        throw new Error(`{"message":"Request error:${errorMessage}","code":${errorCode}}`)
    }
    return data;
   } 


  async sendPostData(data){
      
      await  axios.post("http://localhost:4000/post",data);
        
   }


}