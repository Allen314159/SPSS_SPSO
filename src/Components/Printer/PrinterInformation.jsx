import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PrinterInformation.scss";
import "./PrinterHistory.scss";
import printerImage1 from "../images/PrinterImage1.jpg";

const PrinterHis = ({ printerId }) => {
  const [printHistory, setPrintHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getStatusLabel = (statuss) => {
    switch (statuss) {
      case 0:
        return "Đang đợi";
      case 1:
        return "Đã bị từ chối";
      case 2:
        return "Đã hoàn thành";
      default:
        return "Không xác định";
    }
  };
  
  const getStatusClass = (statuss) => {
    switch (statuss) {
      case 0:
        return "waiting";
      case 1:
        return "rejected";
      case 2:
        return "completed";
      default:
        return "unknown";
    }
  };
  

  const fetchPrintHistory = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("pass");
      const response = await axios.get(
        `http://localhost:8080/admin/getAllRequestOnPrinter/${printerId}`
      );
      setPrintHistory(response.data);
    } catch (err) {
      console.log("error");
      setError("Failed to fetch print history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (printerId) {
      fetchPrintHistory();
    }
  }, [printerId]);

  if (loading) return <div className="loading">Loading print history...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="printer-history">
      <h3 className="history-title">Lịch sử In</h3>
      {printHistory.length > 0 ? (
      <table className="history-table">
      <thead>
        <tr>
          <th>Mã số sinh viên</th>
          <th>Mã số file in</th>
          <th>Tên file</th>
          <th>Địa điểm</th>
          <th>Ngày in</th>
          <th>Số Trang</th>
          <th>Trạng Thái</th>
        </tr>
      </thead>
      <tbody>
        {printHistory.map((request) => (
          <tr key={request.id}>
            <td>{request.id}</td>
            <td>{request.file_id}</td>
            <td>{request.file_name}</td>
            <td>{request.building}</td>
            <td>{request.print_date}</td>
            <td>{request.nb_of_page_used}</td>
            <td className={`status ${getStatusClass(request.statuss)}`}>
              {getStatusLabel(request.statuss)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
     
      ) : (
        <div className="no-history">Không có lịch sử in.</div>
      )}
    </div>
  );
};

const PrinterInformation = () => {
  const [printerData, setPrinterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPrinterId, setSearchPrinterId] = useState("");
  const [selectedPrinterId, setSelectedPrinterId] = useState(null);

  const fetchPrinterData = async (printerId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8080/admin/getPrinterById?printer_id=${printerId}`
      );
      setPrinterData(response.data);
      setSelectedPrinterId(printerId); // Update selected printer ID for history
    } catch (err) {
      setError("Failed to fetch printer information.");
    } finally {
      setLoading(false);
    }
  };

  const togglePrinterState = async () => {
    if (!printerData) return;
    setLoading(true);
    try {
      const newState = printerData.state === 0 ? 1 : 0;
      await axios.put(
        `http://localhost:8080/admin/setPrinterState?printer_id=${printerData.printer_id}`,
        { state: newState }
      );
      setPrinterData((prevData) => ({
        ...prevData,
        state: newState,
      }));
    } catch (err) {
      setError("Failed to update printer state.");
    } finally {
      setLoading(false);
    }
  };

  const getStateLabel = (state) => {
    switch (state) {
      case 0:
        return "Vô hiệu";
      case 1:
        return "Hoạt động";
      default:
        return "Không xác định";
    }
  };

  return (
    <div className="container">
      <div className="header-bar">
        <h2 className="header-title">Thông tin máy in</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Printer ID"
            value={searchPrinterId}
            onChange={(e) => setSearchPrinterId(e.target.value)}
            className="search-input"
          />
          <button
            onClick={() => fetchPrinterData(searchPrinterId)}
            className="search-button"
          >
            Tìm kiếm
          </button>
        </div>
      </div>
      {loading && <div className="loading">Loading printer information...</div>}
      {error && <div className="error">Error: {error}</div>}
      {printerData && (
  <>
    <div className="printer-info-card">
      <div className="images">
        <img src={printerImage1} alt="Printer" className="image" />
      </div>
      <div className="info-grid">
        <div className="info-row">
          <strong>Mã số máy in:</strong>
          <strong>  <span>{printerData.printer_id}</span> </strong>
        
        </div>
        <div className="info-row">
          <strong>Tòa nhà:</strong>
          <strong>    <span>{printerData.building}</span></strong>
       
        </div>
        <div className="info-row">
          <strong>Mẫu mã:</strong>
          <strong>    <span>{printerData.model}</span> </strong>
      
        </div>
        <div className="info-row">
          <strong>Ngày nhập:</strong>
          <strong> <span>{printerData.import_date}</span> </strong>
         
        </div>
        <div className="info-row">
          <strong>Trạng thái:</strong>
      <strong> <span>{getStateLabel(printerData.state)}</span>   </strong>   
        </div>
      </div>
      <div className="toggle-row">
        <button
          onClick={togglePrinterState}
          className={`toggle-button ${printerData.state === 1 ? "active" : "inactive"}`}
        >
          {printerData.state === 0 ? "Hoạt động hóa" : "Vô hiệu hóa"}
        </button>
      </div>
    </div>
    <PrinterHis printerId={selectedPrinterId} />
  </>
)}

    </div>
  );
};

export default PrinterInformation;
