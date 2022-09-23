import React, { useState } from 'react'
import axios from 'axios';

const Pagenashan = () => {
      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
      const [image, setImage] = useState(null) 

      const saveFile = (e) => {
       
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setImage(URL.createObjectURL(e.target.files[0]));

       
      };


      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);   
      axios.post(`http://localhost:8080/uploadphoto`,formData)
      .then(
        (result) => {
          alert(result.data);
        },
        (error) => {
          alert(error)
        })

      }
      const dounloardFile = () => {
      axios.get(`http://localhost:8080/dounloardfile/2`)
      .then(
        (result) => {
       setImage(result.data);
          alert(result.data);
        },
        (error) => {
          alert(error)
        })

      }
      
  return (
    <div>
      
      <h1>file upload</h1>
        file:
        
        <a>
        <img src={image} alt="Upload img image" width={200} height={200}  /> <br />

        <input type="file" style={{ backgroundImage: `url(${image})`,width:"200px" }} onChange={saveFile}/>
        </a>
        <button onClick={uploadFile}>Upload</button>
        <button onClick={dounloardFile}>dounloardfile</button>
        <br></br>
        <a>
        {/* ${image} */}
        <img src="/Project1/myImage/imageDisplay?id=${image}"/>
        <img src="data:image/jpeg;${image}" />
        </a>

    </div>
  )
}

export default Pagenashan