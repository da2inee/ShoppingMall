import React, {useState} from "react";
import Dropzone from 'react-dropzone'
//import Icon from '@ant-design/icons';
import axios from 'axios'; 

function Fileupload() {
    const [Images,setImages] = useState([])

    const dropHandler = (files) =>{
        const formData = new FormData();
        const config = {
            headers:{'content-type':`multipart/form-data`}
        }
        formData.append("file",files[0])
        
        axios.post('/api/product/image',formData,config)
        .then(response => {
            
            if(response.data.success){
                console.log(response.data.filePath)
                setImages([...Images, response.data.filePath]);


            }else{
                alert('파일을 저장하는데 실패했습니다.')
            }
        })
        console.log("pgp");
    }

    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps,getInputProps}) => (
                    <div
                        style={{
                            width:300,height:240,border:'1px solid lightgray',
                            display:'flex',alignItems:'center',justifyContent:'center'
                        }}
                        {...getRootProps()}>
                        <input {...getInputProps()}/>
                        
                    </div>
                )}
            </Dropzone>
            <div style = {{display:"flex", width:'350px',height:'240px',overflow: 'scroll'}}>
                    {Images.map((image,index) => (
                        
                        <div key = {index}>
                            <img style = {{minWidth:'300px', width:'300px',height:'240px'}}
                                src = {`http://localhost:5000/${image}`}
                            />
                        </div>
                    
                    ))}
            </div>
        </div>
    )
}

export default Fileupload