import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import { BottomData } from "./BottomData";
import myImage from '../images/ritajIcon.png';


function Sidebar() {
    return (
        <div className="Sidebar">
          <div className="imageDiv"> <img className="MyImage" src={myImage} alt="MyImage" /> </div> 
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li className="row" 
                        key={key}
                         onClick={() => { window.location.pathname = val.link }}>
                            <div id="icon"> {val.icon}</div>
                            <div id="title"> {val.title}</div>

                        </li>
                    )



                })}
            </ul>

            <ul className="BottomList">
                {BottomData.map((val, key) => {
                    return (
                        <li className="row"
                         key={key} 
                         onClick={() => { window.location.pathname = val.link }}>
                            <div id="icon"> {val.icon}</div>
                            <div id="title"> {val.title}</div>

                        </li>
                    )



                })}
            </ul>
            
    

        </div>
    )
}

export default Sidebar