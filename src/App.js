import React, { useState, useEffect } from "react";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  


  useEffect(() => {
    fetchCryptoData()
  }, [])


  const fetchCryptoData = async () => {
    const data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    const apiResponse = await data.json();
    setCryptoData(apiResponse);
  };


  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700  tracking-wider">
                    Coin
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700  tracking-wider"></th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700  tracking-wider">
                    Price
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 tracking-wider">
                    24h
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700  tracking-wider">
                    24h Volume
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700  tracking-wider">
                    Market
                  </th>
                  </tr>
              </thead>
              <tbody>
                
                {cryptoData.map((cryptocurrency) => (
                  <tr>
                  <>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10 ">
                          <img
                            className="w-full h-full rounded-full"
                            src={cryptocurrency.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="px-3 py-2 text-gray-900 whitespace-no-wrap">
                            {cryptocurrency.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">
                        {cryptocurrency.symbol}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        ${cryptocurrency.current_price.toLocaleString()}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">
                        {cryptocurrency.price_change_percentage_24h}%
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">
                        ${cryptocurrency.total_volume.toLocaleString()}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">
                        ${cryptocurrency.market_cap.toLocaleString()}
                      </p>
                    </td>
                    
                  </>
                  </tr>
                ))}
                
              </tbody>
            </table>
           
            
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
