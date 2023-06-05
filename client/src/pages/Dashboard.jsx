import { BiTrendingDown } from "react-icons/bi";
import { MyResponsiveLine } from "../components/LineChart";
import axios from "../api/axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [consumption, setConsumption] = useState([]);
  // const [totalcons, setTotalcons] = useState(0);
  const fetchconsumption = async () => {
    try {
      const res = await axios.get("fetch_all_consumption");
      res.data = res.data.map((item) => {
        return parseInt(item.data);
      });
      setConsumption(res.data);
    } catch (err) {
      console.log(err);
      alert("try again", err);
    }
  };
  useEffect(() => {
    fetchconsumption();
  }, []);

  console.log(consumption[consumption.length - 1].data);
  return (
    <div>
      <div className="flex flex-row	justify-center mt-10 mr-16">
        <div className="w-1/3 h-40 rounded-2xl border shadow-lg ms-5 p-5">
          <p>Total Day Consumption</p>
          <div className="flex items-center m-1">
            <div className="bg-green-100 rounded-full p-0.5 me-1">
              <BiTrendingDown color="green" size={24} />
            </div>
            <p>2% Than your average</p>
          </div>
          <div>
            <p className="font-bold text-4xl">
              {consumption[consumption.length - 1]}L
            </p>
          </div>
        </div>
        <div className="w-1/3 h-40 rounded-2xl border shadow-lg ms-5 p-5">
          <p>Current Quarter Consumption</p>
          <div className="flex items-center m-1">
            <div className="bg-green-100 rounded-full p-0.5 me-1">
              <BiTrendingDown color="green" size={24} />
            </div>
            <p>Decrease of A with x25 L</p>
          </div>
          <div>
            <p className="font-bold text-4xl">
              {consumption.reduce((a, b) => a + b, 0)} L
            </p>
          </div>
        </div>
        <div className="w-1/3 h-40 text-sm rounded-2xl border shadow-lg ms-5 p-5">
          <p>Total Fees</p>

          <div>
            <p className="font-bold text-4xl">54 TND</p>
            <p>SONEDE Fees 45 TND</p>
            <p>ONAS Fees 9 TND</p>
          </div>
        </div>
      </div>
      <div className="h-72 felx rounded-2xl w-11/12 border shadow-lg ms-5 mt-5">
        <MyResponsiveLine />
      </div>
    </div>
  );
};

export default Dashboard;
