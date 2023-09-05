// import { logRoles } from "@testing-library/react";

// axios.get('url').then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error)
// })

// fetch('url').then((data)=>data.json())
// .then((item)=> console.log(item))
// .then((error)=> console.log(error))
// import React,{useEffect,useState} from 'react'
// import axios from 'axios';
// const APICompo = () => {
//     const [weatherData, setWeatherData] = useState(null);

//     useEffect(() => {
//       axios.get('https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=1a6f8c9b7ca40dbf9746938138fecc4f')
//         .then(response => {
//           setWeatherData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching weather data:', error);
//         });
//     }, []);
  
//     return (
//       <div>
//         {weatherData && (
//           <div>
//             <input type='text' placeholder='enter city'onChange={(e)=> set}></input>
//             <h1>Weather in {weatherData.name}</h1>
//             <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
//             <p>Humidity: {weatherData.main.humidity}%</p>
//             <p>Weather: {weatherData.weather[0].description}</p>
//             <p></p>
//           </div>
//         )}
//       </div>
//     );
// }

// export default APICompo


//   import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function APICompo() {
//     const [val, setVal] = useState('')
//     const [names, setNames] = useState('')
//     const [city, setCity] = useState('')
//     useEffect(() => {
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=1a6f8c9b7ca40dbf9746938138fecc4f`).then((data) => {
//         setVal(data.data)        
//     }).catch((err) => {
//         console.log(err);
//     })
//     console.log('Hello');
// }, [])

// const handleUpdate = () => {
//     setNames(city)
// }
// console.log(val);
//   return (
//     <>
//         <input type='text' placeholder='Enter City' name='city'   onChange={(e) => setCity(e.target.value)} />
//        <h1>City Temp. {val && parseInt((val.main.temp) - 273) } deg</h1>
//        {/* <h1>City Name - {val && ((val.name)) } </h1> */}
//        <button onClick={handleUpdate} >Click</button>
//     </>
//   )
// }

// export default APICompo;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';

const ApiTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch API data when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>API Data Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiTable;


