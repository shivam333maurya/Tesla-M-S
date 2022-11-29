import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import "./Inventory.css";

const Inventory = () => {
  // const carsData = [{name:"",url:""}];
  const interiorColors = [
    {
      url: "https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtBlack@3x.png",
    },
    {
      url: "https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/IntWhite@3x.png",
    },
    {
      url: "https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/IntCream@3x.png",
    },
  ];
  const exteriorPaints = [
    {
      url: "https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtWhite@3x.png",
    },
    {
      url: "https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtBlack@3x.png",
    },
    {
      url: "https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtBlue@3x.png",
    },
    {
      url: "https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtGrey@3x.png",
    },
    {
      url: "https://www.tesla.com/app-assets-inventory/inventory-search-tool/dist/assets/ExtRed@3x.png",
    },
  ];

  return (
    <div className="inventoryContainer">
      <div className="stickySection">
        <div className="heading">
          <h1>Inventory</h1>
        </div>
        <div className="actionBlock">
          <div>
            <select className="select">
              <option value="volvo">Relevance</option>
              <option value="saab">Price : low to high</option>
              <option value="mercedes">Price : high to low</option>
              <option value="audi">Mileage : low to high</option>
              <option value="audi">Mileage : high to low</option>
            </select>
          </div>
          <div
            style={{
              display: " flex",
              alignItems: "center",
              marginInline: "15px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <div className="block"></div>
                <div className="block"></div>
              </div>
              <div>
                <div className="block"></div>
                <div className="block"></div>
              </div>
            </div>
            <div className="verticalLine"></div>
            <div>
              <div className="rectangle"></div>
              <div className="rectangle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="middleBlock">
        <section className="filterBlock">
          <div className="zipCode marginBottom">
            <label className="labelMargin">
              Registration Zip Code
              <br />
              Where you will register the vehicle
            </label>
            <input value={95113} />
          </div>
          <div className="selectRange marginBottom">
            <label htmlFor="price" className="labelMargin">
              Search within
            </label>
            <select id="price" className="select">
              <option value="volvo">Relevance</option>
              <option value="saab">Price : low to high</option>
              <option value="mercedes">Price : high to low</option>
              <option value="audi">Mileage : low to high</option>
              <option value="audi">Mileage : high to low</option>
            </select>
          </div>
          <div className="marginBottom" style={{ display: "flex" }}>
            <div style={{ width: "40%" }}>
              <div className="labelMargin">Models</div>
              <div className="radioStyle">
                <input type="radio" id="l" />
                <label htmlFor="l">Model S </label>
              </div>
              <div className="radioStyle">
                <input type="radio" id="l" />
                <label htmlFor="l">Model 3 </label>
              </div>
              <div className="radioStyle">
                <input type="radio" id="l" />
                <label htmlFor="l">Model X </label>
              </div>
              <div className="radioStyle">
                <input type="radio" id="l" />
                <label htmlFor="l"> Model Y</label>
              </div>
            </div>
            <div>
              <div className="labelMargin">Inventory Type</div>
              <div className="radioStyle">
                <input type="radio" id="l" />
                <label htmlFor="l">New</label>
              </div>
              <div className="radioStyle">
                <input type="radio" id="l" />
                <label htmlFor="l">Used</label>
              </div>
            </div>
          </div>
          <div className="marginBottom">
            <div className="labelMargin">Exterior Paint</div>
            <div className="paint">
              {exteriorPaints.map((color, id) => (
                <img src={color.url} key={id + 1 + ""} />
              ))}
            </div>
          </div>
          <div className="marginBottom">
            <div className="labelMargin">Interior Color</div>
            <div className="colors">
              {interiorColors.map((color, id) => (
                <img src={color.url} key={id + ""} />
              ))}
            </div>
          </div>
          <div className="marginBottom">
            <div className="labelMargin">Wheels</div>
            <div className="radioStyle">
              <input type="checkbox" id="l" />
              <label htmlFor="l">19" Wheels</label>
            </div>
            <div className="radioStyle">
              <input type="checkbox" id="l" />
              <label htmlFor="l">21" Wheels</label>
            </div>
          </div>
          <div className="marginBottom">
            <div className="labelMargin">Autopilot</div>
            <div className="radioStyle">
              <input type="checkbox" id="l" />
              <label htmlFor="l">Autopilot</label>
            </div>
            <div className="radioStyle">
              <input type="checkbox" id="l" />
              <label htmlFor="l">Full Self Driving</label>
            </div>
          </div>
        </section>
        <section className="resultBlock">
          <div></div>
        </section>
      </div>
      <div className="footer">
        <footer>
          <span>Tesla © 2022 </span>
          <span> Privacy & Legal</span>
          <span>Vehicle Recalls</span>
          <span>Contact</span>
          <span>Careers</span>
          <span>News</span>
          <span>Engage</span>
          <span>Locations</span>
        </footer>
      </div>
    </div>
  );
};

export default Inventory;
