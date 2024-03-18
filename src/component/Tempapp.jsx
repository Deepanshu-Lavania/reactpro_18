import React, { useEffect, useState } from "react";
import "./Tempapp.css";

export default function Tempapp() {
  const [city, setcity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const callApi = async () => {
      const resp = await fetch(
// API: api take from open whether api by login it 
// NOTE:==> firstly when you take the API url then firstly paste it into google to check data is get or not 
        // `https://api.openweathermap.org/data/2.5/weather?q=${search } &appid=0f664d7de3dc808088144de31ef75b85` 
    //To convert it into Celcius :==> &units=metric
        `https://api.openweathermap.org/data/2.5/weather?q=${search }&units=metric&appid=0f664d7de3dc808088144de31ef75b85`
      );
      const response = await resp.json();
      console.log(response);
      setcity(response.main);
    };

    callApi();
// })
  }, [search]);//array used so that useEffect will not show after any updation

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}//value used so that we can see the one city name by default
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errormsg">No data found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
}
