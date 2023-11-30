"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log("data", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://jasbi-back.vercel.app/api/products");
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="py-8 text-center bg-gray-100">
        <p className="text-3xl font-bold text-green-700">All Products</p>
        <div className="  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid justify-center gap-3 my-10 mx-6">
          {data?.map((i) => (
            <div className="border shadow-md hover:shadow-sm p-2">
              <img src={i.img} alt="" className="w-72" />
              <p>{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
