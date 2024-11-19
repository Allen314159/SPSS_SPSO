import React, { useEffect, useState } from "react";
import axios from "axios"; // Install axios if you haven't already
import { FaCheck, FaTimes } from "react-icons/fa"; // Import icons for check and cross
import "./Request.scss"; // Assuming you're using SCSS or CSS for styling

const Request = () => {
  // Declare state variables for storing print requests
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle any errors

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        // Replace with your backend API endpoint to fetch print requests
        // const response = await axios.get("/api/print-requests"); 
        // setRequests(response.data); // Assuming the API returns an array of requests

        // Mock data (this should be replaced with the response from your API)
        const data = [
          {
            "studentName": "Mạnh Cường",
            "studentID": "2212737",
            "printerNumber": "001",
            "pages": 15
          },
          {
            "studentName": "Mai Lan",
            "studentID": "2212738",
            "printerNumber": "002",
            "pages": 10
          },
          {
            "studentName": "Mai Lan",
            "studentID": "2212738",
            "printerNumber": "002",
            "pages": 10
          },
          {
            "studentName": "Mai Lan",
            "studentID": "2212738",
            "printerNumber": "002",
            "pages": 10
          },
          {
            "studentName": "Mai Lan",
            "studentID": "2212738",
            "printerNumber": "002",
            "pages": 10
          }
        ];

        // Set the requests state with the mock data
        setRequests(data);
        setLoading(false); // Set loading to false once the data is fetched
      } catch (err) {
        setError("Failed to fetch print requests");
        setLoading(false);
      }
    };

    fetchRequests();
  }, []); // Empty dependency array ensures this runs once on component mount

  const handleAccept = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = "accepted";
    setRequests(updatedRequests);

    console.log("pass acp")
  };

  const handleReject = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = "rejected";
    setRequests(updatedRequests);

    console.log("pass reject")
  };

  if (loading) return <div>Loading...</div>; // Show loading message
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div className="request-container">
      <h1>Yêu cầu in ấn</h1>
      
      {/* Display each request as a box */}
      <div className="request-boxes">
        {requests.map((request, index) => (
          <div className="request-box" key={index}>
            <div className="request-content">
              <p>
                <strong>Sinh viên {request.studentName}</strong> có ID {request.studentID} yêu cầu máy in mã số {request.printerNumber} in {request.pages} trang.
              </p>

              {/* Display buttons or status based on the request's current status */}
              {(!request.status) ? (
                <div className="buttons">
                  <button 
                    className="accept-btn"
                    onClick={() => handleAccept(index)}>
                    Chấp nhận
                  </button>
                  <button 
                    className="reject-btn"
                    onClick={() => handleReject(index)}>
                    Từ chối
                  </button>
                </div>
              ) : request.status === "accepted" ? (
                <div className="status">
                  <FaCheck color="green" /> {/* Green tick for accepted */}
                </div>
              ) : (
                <div className="status">
                  <FaTimes color="red" /> {/* Red cross for rejected */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Request;
