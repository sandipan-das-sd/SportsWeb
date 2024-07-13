import { useState } from "react";
import uploadFiles from "../helpers/uploadFiles";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ExcelDataFormat() {
  const [uploadFile, setUploadFile] = useState({
    csvFile: ""
  });
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setUploadFile((prev) => ({
      ...prev,
      [name]: files ? files[0] : ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadResponse = await uploadFiles(uploadFile.csvFile);
      setUploadFile((prev) => ({
        ...prev,
        photoUrl: uploadResponse.secure_url
      }));
      toast.success('CsvFile uploaded successfully');

      const response = await fetch('http://localhost:5800/api/upload-csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          csvFile: uploadFile.csvFile
        })
      });

      const data = await response.json();
      if (data.success) {
        toast.success('done');
        navigate('/email');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('An error occurred during registration');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="csvFile">Upload CSV File:</label>
        <input
          type="file"
          id="csvFile"
          name="csvFile"
          onChange={handleFileChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
