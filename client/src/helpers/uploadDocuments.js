const url = `https://api.cloudinary.com/v1_1/dlwi5at62/auto/upload`;

const uploadDocuments=async(file)=>{
const formData=new FormData();
formData.append('file',file)
formData.append('upload_preset','chat-app-file')
const response=await fetch (url,{
    method:"POST",
    body:formData
})
const responseData=await response.json();
return responseData
}
export default uploadDocuments;