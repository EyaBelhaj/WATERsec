import { BiTrendingDown } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-row	justify-center mt-10 mr-16">
        <div className="w-1/3 h-40 rounded-2xl border shadow-lg ms-5 p-2 ps-5">
          <p>Total Day Consumption</p>
          <div className="flex items-center m-1">
            <div className="bg-green-100 rounded-full p-0.5 me-1">
              <BiTrendingDown color="green" size={24} />
            </div>
            <p>0.0% Than your average</p>
          </div>
          <div>
            <p className="font-bold text-4xl">0 L</p>
          </div>
        </div>
        <div className="w-1/3 h-40 rounded-2xl border shadow-lg ms-5 p-2 ps-5">
          <p>Current Quarter Consumption</p>
          <div className="flex items-center m-1">
            <div className="bg-green-100 rounded-full p-0.5 me-1">
              <BiTrendingDown color="green" size={24} />
            </div>
            <p>Decrease of A with x0 L</p>
          </div>
          <div>
            <p className="font-bold text-4xl">0 L</p>
          </div>
        </div>
        <div className="w-1/3 h-40 text-sm rounded-2xl border shadow-lg ms-5 p-2 ps-5">
          <p>Total Fees</p>

          <div>
            <p className="font-bold text-4xl">0 TND</p>
            <p>SONEDE Fees 0 TND</p>
            <p>ONAS Fees 0 TND</p>
          </div>
        </div>
      </div>
      <div className="h-72 felx rounded-2xl w-11/12 border shadow-lg ms-5 mt-5">
        aze
      </div>
    </div>
  );
};

export default Dashboard;
