import React, {useEffect} from 'react';
import SideMenu from "./SideMenu";
import TableOfVehicleData from "./TableOfVehicleData";
import axios from "axios";
import {useDispatch} from "react-redux"
import {setVehicleData} from "./reduxStore/actions"


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const response = await axios.get("http://console-api.tracmobility.com/test/vehicles?page=0&size=10")
        dispatch(setVehicleData(response.data.content))
      }
      catch (err) {
        console.error(err)
      }
    }
    fetchVehicleData()
  }, [dispatch])

  return (
    <div>
      <SideMenu/>
      <div style={{paddingLeft: "300px", paddingTop: "64px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "10vh", textDecoration: "underline"}}>
        <h2>Vehicle Data</h2>
        <TableOfVehicleData/> 
      </div>
    </div>
  );
};

export default App; 