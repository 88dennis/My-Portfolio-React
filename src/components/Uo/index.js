import React from "react";
import { ListItem } from "../List";
// import { Link } from "react-router-dom";

import "./style.css";

function Uo({handleDebtDelete, name, id, hideShowUoDetails, showMeUoDetails,  lenderName, someArrayFromDebtList}) {
  return (
    <div>
    <ListItem>
        <div className="listitemdiv3">
        <div className="winecollectiondiv1">
        <div className="winecollectionname1">
        {/* <div className="fontitalicsmall">{name}</div> */}
        <div><button className="winenamebtn1" onClick={() => hideShowUoDetails(id)}>{name}</button></div>
        <div><button className="winedelbtn" onClick={() => handleDebtDelete(id)}><i className="fas fa-minus-circle"></i></button></div>
          </div>

          <div className="fontitalicbarcode">Product Id: {id}</div>
          <div>
              {showMeUoDetails ?
                <div className="overlayRestowine" onClick={() => hideShowUoDetails(id)}>
                  <div className="restowineinfo1">
                    <div className="restowineinfo2">
                      <div className="restowineinfo3">
                        <div className="infowinewrap">
                        
                          <div className="infodetails">Name: {lenderName}</div>

                          <div className="infodetails">Some Array:</div>
                          {someArrayFromDebtList.map(arr => {
                            return (
                              <div>
                              <li className="travelcompany-input">
                              <span className="input-label">{arr}</span>
      
  </li>
</div>
                                       
                            )
                        })
                       }


                        </div>

                        <br></br>

                      </div>
                      <div className="btnwrap">
                        {/* <button><Link
                          className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}
                          to="/admin"
                        >
                          admin
          </Link></button> */}
<button className="btnwrap1buserclose" onClick={() => hideShowUoDetails(id)}><i className="fas fa-times-circle"></i></button>
                        </div>
                    </div>
                  </div>
                </div>
                : null
              }
            </div>






          </div>
          </div>
    </ListItem>
    </div>
  );
}

export default Uo;
