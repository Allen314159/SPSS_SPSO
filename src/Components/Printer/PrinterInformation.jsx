import React, { useState, useEffect } from "react";
import "./PrinterInformation.scss";
import printerImage1 from "../images/PrinterImage1.jpg";
import axios from "axios";

const PrinterInformation = () => {
  const [printerData, setPrinterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPrinterId, setSearchPrinterId] = useState("P23456789");

  // Function to fetch printer data by ID
  const fetchPrinterData = async (printerId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8080/admin/getPrinterById?printer_id=${printerId}`
      );
      setPrinterData(response.data);
    } catch (err) {
      setError("Failed to fetch printer information.");
    } finally {
      setLoading(false);
    }
  };

  // Function to toggle printer state
  const togglePrinterState = async () => {
    if (!printerData) return;
    setLoading(true);
    try {
      const newState = printerData.state === 0 ? 1 : 0; // Toggle state
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

  // Fetch initial data when the component loads
  useEffect(() => {
    fetchPrinterData(searchPrinterId);
  }, []);

  const getStateLabel = (state) => {
    switch (state) {
      case 0:
        return "Vô hiệu";
      case 1:
        return "Hoạt dộng";
      default:
        return "Không xác định";
    }
  };

  if (loading) return <div className="loading">Loading printer information...</div>;
  if (error) return <div className="error">Error: {error}</div>;

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
      {printerData && (
        <>
          <div className="images">
            <img src={printerImage1} alt="Printer" className="image" />
          </div>
          <div className="infoRow">
            <strong>Mã số máy in:</strong>
            <span>{printerData.printer_id}</span>
          </div>
          <div className="infoRow">
            <strong>Tòa nhà:</strong>
            <span>{printerData.building}</span>
          </div>
          <div className="infoRow">
            <strong>Mẫu mã:</strong>
            <span>{printerData.model}</span>
          </div>
          <div className="infoRow">
            <strong>Ngày nhập:</strong>
            <span>{printerData.import_date}</span>
          </div>
          <div className="infoRow">
            <strong>Trạng thái:</strong>
            <span>{getStateLabel(printerData.state)}</span>
          </div>
          <div className="toggleRow">
            <button
              onClick={togglePrinterState}
              className={`toggle-button ${printerData.state === 1 ? "active" : "inactive"}`}
            >
              {printerData.state === 0 ? "Hoạt động hóa" : "Vô hiệu hóa"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PrinterInformation;
