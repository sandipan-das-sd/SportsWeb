

import { useState } from "react";
import "./Budget.css";
import { iconsImgs } from "../../utils/images";
import { uploadHistory } from "../../data/data";

const Budget = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [history, setHistory] = useState(uploadHistory);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate file upload and data processing
      const newEntry = {
        id: history.length + 1,
        fileName: file.name,
        uploadDate: new Date().toLocaleDateString(),
        uploadTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setHistory([...history, newEntry]);
      setLoading(false);
      setFile(null);
      alert("File uploaded successfully!");
    }, 2000);
  };

  return (
    <div className="grid-two-item grid-common grid-c4">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Excel Data Upload</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c-top text-silver-v1">
            <h2 className="lg-value">Upload Data</h2>
            <span className="lg-value">Upload your Excel file</span>
        </div>
        <div className="grid-c4-content bg-jet">
            <div className="grid-items">
                <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
                <button className="upload-button" onClick={handleUpload} disabled={!file || loading}>
                    {loading ? "Uploading..." : "Upload"}
                </button>
            </div>
            <div className="grid-items">
                <h4 className="data-title">Upload History</h4>
                {history.map((data) => (
                    <div className="grid-item" key={data.id}>
                        <div className="grid-item-l">
                            <div className="icon">
                                <img src={ iconsImgs.check } />
                            </div>
                            <p className="text text-silver-v1">
                                {data.fileName} <span>{data.uploadDate} - {data.uploadTime}</span>
                            </p>
                        </div>
                        <div className="grid-item-r">
                            <button className="view-button">View</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Budget;

