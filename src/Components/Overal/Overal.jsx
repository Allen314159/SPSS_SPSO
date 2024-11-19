import React, { useEffect, useState } from "react";
import "./Overal.scss";
import axios from "axios"; // Make sure to install axios

const Overal = () => {
  // Declare state variables for dynamic data
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalPrinters, setTotalPrinters] = useState(null);
  const [pendingRequests, setPendingRequests] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    // Mock data for testing (replace this with an API call)
    const fetchData = async () => {
      try {
        // If you have an API, you can uncomment this:
        // const response = await axios.get("/api/dashboard"); // Example API call
        // const data = response.data;

        // Mock data directly assigned for testing
        const data = {
          totalUsers: 367,
          totalPrinters: 1156,
          pendingRequests: 367,
        };

        // Set state with the fetched data
        setTotalUsers(data.totalUsers);
        setTotalPrinters(data.totalPrinters);
        setPendingRequests(data.pendingRequests);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="frame">
      {/* Card 1 */}
      <div className="card">
        <div className="content">
          <div className="text">
            <div className="text2">Tổng số người dùng</div>
          </div>
        </div>
        <div className="content2">
          <div className="text3">
            <div className="text4">{totalUsers ? `${totalUsers}K` : "Loading..."}</div>
          </div>
          <div className="icon-text">
            <div className="text3">
              <div className="text5">-0.03%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card2">
        <div className="content">
          <div className="text">
            <div className="text6">Tổng số máy in</div>
          </div>
        </div>
        <div className="content2">
          <div className="text3">
            <div className="text7">{totalPrinters ? totalPrinters : "Loading..."}</div>
          </div>
          <div className="icon-text">
            <div className="text3">
              <div className="text8">+15.03%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <div className="content">
          <div className="text">
            <div className="text2">Yêu cầu in chưa duyệt</div>
          </div>
        </div>
        <div className="content2">
          <div className="text3">
            <div className="text4">{pendingRequests ? `${pendingRequests}K` : "Loading..."}</div>
          </div>
          <div className="icon-text">
            <div className="text3">
              <div className="text5">-0.03%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overal;
