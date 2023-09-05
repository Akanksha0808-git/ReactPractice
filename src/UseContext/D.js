import React, { useContext } from "react";
import UserContext from "../Components/UserContext";

const D = () => {

    const Data = useContext(UserContext);
console.log(Data)
    return (
        <div>
            D
            <h1>{Data.name}</h1>
            <h1>{Data.salary}</h1>
            <h1>{Data.Designation}</h1>
        </div>
    )
}
export default D;   