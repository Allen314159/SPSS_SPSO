import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./Request.scss";

const Request = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("http://localhost:8080/admin/getAllPrintRequest");
        setRequests(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch print requests");
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (index) => {
    const request = requests[index];

    try {
      // Make the PUT API call for acceptance
      const response = await axios.put(
        `http://localhost:8080/admin/acceptPrintRequest?printer_id=${request.print_id}&file_id=${request.file_id}`
      );

      if (response.status === 200) {
        // Update the request status locally if the API call was successful
        const updatedRequests = [...requests];
        updatedRequests[index].statuss = 2; // Chấp nhận
        setRequests(updatedRequests);
        console.log("Accepted request with printer_id:", request.print_id, "and file_id:", request.file_id);
      }
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const handleReject = async (index) => {
    const request = requests[index];

    try {
      // Make the PUT API call for rejection
      const response = await axios.put(
        `http://localhost:8080/admin/refusePrintRequest?printer_id=${request.print_id}&file_id=${request.file_id}`
      );

      if (response.status === 200) {
        // Update the request status locally if the API call was successful
        const updatedRequests = [...requests];
        updatedRequests[index].statuss = 1; // Từ chối
        setRequests(updatedRequests);
        console.log("Rejected request with printer_id:", request.print_id, "and file_id:", request.file_id);
      }
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="request-container">
      <h1>Yêu cầu in ấn</h1>

      <div className="request-boxes">
        {requests.map((request, index) => (
          <div className="request-box" key={index}>
            <div className="request-content">
              <p>
                Sinh viên có ID <strong>{request.id}</strong> yêu cầu in file{" "}
                <strong>{request.file_name}</strong> có độ dài là{" "}
                <strong>{request.nb_of_page_used} trang</strong> từ máy in có ID{" "}
                <strong>{request.print_id}</strong> vào ngày{" "}
                <strong>{request.print_date}</strong>.
              </p>

              {request.statuss === 0 ? (
                // Chờ xét duyệt
                <div className="buttons">
                  <button className="accept-btn" onClick={() => handleAccept(index)}>
                    Chấp nhận
                  </button>
                  <button className="reject-btn" onClick={() => handleReject(index)}>
                    Từ chối
                  </button>
                </div>
              ) : request.statuss === 1 ? (
                // Đã từ chối
                <div className="status">
                  <FaTimes color="red" /> Đã từ chối
                </div>
              ) : request.statuss === 2 ? (
                // Đã chấp nhận
                <div className="status">
                  <FaCheck color="green" /> Đã chấp nhận
                </div>
              ) : (
                // Trường hợp không xác định (nếu có)
                <div className="status">Không xác định</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Request;
