import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import "./Inventory.css";
const carsData = [
  {
    name: "Model S",
    year: "2016",
    modelType: "75 Rear-Wheel Drive",
    price: "$49,900",
    totalRange: "33,269 mile odometer",
    location: "",
    emiPerMonth: "$714 /mo",
    shippingFee: "$1000",
    range: "149mi",
    torque: "5.5s",
    topSpeed: "140mph",
    color: "Solid Black Paint",
    wheelType: `19" Silver Cyclone Wheels`,
    damagePolicy: true,
    interiorType: "Tan Next Generation Seats",
    roofType: "Body Color Roof",
    "30DayTrial": true,
    autoPilot: true,
    updatedAutopilot: true,
    repaired: true,
    ludicrousMode: "Ludicrous Mode",
    spoilerFiber: "Carbon Fiber Spoiler",
    smartAirSusp: "Smart Air Suspension",
    url: [
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=ms&options=$BP00,$ADPX2,$GLFR,$AU01,$APF2,$APH4,$APPF,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDBO,$X026,$DRLH,$AF00,$FG00,$DCF0,$FR03,$X008,$X011,$PI00,$IX00,$X002,$LP00,$LT1T,$MI01,$X037,$MDLS,$DV2W,$X025,$X003,$ZCST,$PBSB,$PS01,$PK00,$X031,$PX00,$PF00,$X044,$TM00,$BR04,$RENA,$RFBC,$USSB,$X014,$S15T,$ME02,$QNLT,$SR01,$SP00,$X021,$SC04,$SU00,$TP00,$TR00,$TIG4,$DSH5,$MT75R,$UTAW,$WTTB,$WR01,$YFFC,$CPF0&crop=1400,850,300,130&",
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_SEAT_ALTA&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF1,$APH2,$APPB,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDCF,$X027,$DRLH,$AF02,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPB,$PI01,$IX01,$X001,$LP01,$LT3B,$MI01,$X037,$MDLS,$DV4W,$X025,$X003,$ZINV,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X044,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$ME02,$QTPB,$SR01,$SP00,$X021,$SC04,$SU00,$TP03,$TR00,$TIG4,$DSH7,$MT75A,$UTAB,$WTAS,$WR01,$YFFC,$CPF0&crop=1400,850,300,130&",
    ],
  },
  {
    name: "Model S",
    year: "2017",
    modelType: "75 Rear-Wheel Drive",
    price: "$52,000",
    totalRange: "49,347 mile odometer",
    location: "Libertyville, IL",
    emiPerMonth: "$750 /mo",
    shippingFee: "$1000",
    range: "149mi",
    torque: "5.5s",
    topSpeed: "140mph",
    color: "Red Multi-Coat Paint",
    wheelType: `19" Silver Cyclone Wheels`,
    damagePolicy: true,
    interiorType: "Black Premium Interior",
    roofType: "Body Color Roof",
    "30DayTrial": true,
    autoPilot: true,
    updatedAutopilot: true,
    repaired: true,
    ludicrousMode: "Ludicrous Mode",
    spoilerFiber: "Carbon Fiber Spoiler",
    smartAirSusp: "Smart Air Suspension",
    url: [
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF2,$APH4,$APPF,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDBO,$X027,$DRLH,$DU01,$AF00,$FMP6,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPP,$PI00,$IX00,$X001,$LP01,$LT5P,$MI01,$X037,$MDLS,$DV2W,$X025,$X003,$ZCST,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X043,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$S32P,$ME02,$QTPP,$SR07,$SP00,$X021,$SC04,$SU01,$TR00,$TIG4,$DSH5,$MT75R,$UTSB,$WTAS,$WR01,$YFCC,$CPF0&crop=1400,850,300,130&",
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_SEAT_ALTA&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF1,$APH2,$APPB,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDCF,$X027,$DRLH,$AF02,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPB,$PI01,$IX01,$X001,$LP01,$LT3B,$MI01,$X037,$MDLS,$DV4W,$X025,$X003,$ZINV,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X044,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$ME02,$QTPB,$SR01,$SP00,$X021,$SC04,$SU00,$TP03,$TR00,$TIG4,$DSH7,$MT75A,$UTAB,$WTAS,$WR01,$YFFC,$CPF0&crop=1400,850,300,130&",
    ],
  },
  {
    name: "Model S",
    year: "2016",
    modelType: "75 Rear-Wheel Drive",
    price: "$49,900",
    totalRange: "33,269 mile odometer",
    location: "",
    emiPerMonth: "$714 /mo",
    shippingFee: "$1000",
    range: "149mi",
    torque: "5.5s",
    topSpeed: "140mph",
    color: "Solid Black Paint",
    wheelType: `19" Silver Cyclone Wheels`,
    damagePolicy: true,
    interiorType: "Tan Next Generation Seats",
    roofType: "Body Color Roof",
    "30DayTrial": true,
    autoPilot: true,
    updatedAutopilot: true,
    repaired: true,
    ludicrousMode: "Ludicrous Mode",
    spoilerFiber: "Carbon Fiber Spoiler",
    smartAirSusp: "Smart Air Suspension",
    url: [
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=ms&options=$BP00,$ADPX2,$GLFR,$AU01,$APF2,$APH4,$APPF,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDBO,$X026,$DRLH,$AF00,$FG00,$DCF0,$FR03,$X008,$X011,$PI00,$IX00,$X002,$LP00,$LT1T,$MI01,$X037,$MDLS,$DV2W,$X025,$X003,$ZCST,$PBSB,$PS01,$PK00,$X031,$PX00,$PF00,$X044,$TM00,$BR04,$RENA,$RFBC,$USSB,$X014,$S15T,$ME02,$QNLT,$SR01,$SP00,$X021,$SC04,$SU00,$TP00,$TR00,$TIG4,$DSH5,$MT75R,$UTAW,$WTTB,$WR01,$YFFC,$CPF0&crop=1400,850,300,130&",
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_SEAT_ALTA&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF1,$APH2,$APPB,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDCF,$X027,$DRLH,$AF02,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPB,$PI01,$IX01,$X001,$LP01,$LT3B,$MI01,$X037,$MDLS,$DV4W,$X025,$X003,$ZINV,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X044,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$ME02,$QTPB,$SR01,$SP00,$X021,$SC04,$SU00,$TP03,$TR00,$TIG4,$DSH7,$MT75A,$UTAB,$WTAS,$WR01,$YFFC,$CPF0&crop=1400,850,300,130&",
    ],
  },
  {
    name: "Model S",
    year: "2017",
    modelType: "75 Rear-Wheel Drive",
    price: "$52,000",
    totalRange: "49,347 mile odometer",
    location: "Libertyville, IL",
    emiPerMonth: "$750 /mo",
    shippingFee: "$1000",
    range: "149mi",
    torque: "5.5s",
    topSpeed: "140mph",
    color: "Red Multi-Coat Paint",
    wheelType: `19" Silver Cyclone Wheels`,
    damagePolicy: true,
    interiorType: "Black Premium Interior",
    roofType: "Body Color Roof",
    "30DayTrial": true,
    autoPilot: true,
    updatedAutopilot: true,
    repaired: true,
    ludicrousMode: "Ludicrous Mode",
    spoilerFiber: "Carbon Fiber Spoiler",
    smartAirSusp: "Smart Air Suspension",
    url: [
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF2,$APH4,$APPF,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDBO,$X027,$DRLH,$DU01,$AF00,$FMP6,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPP,$PI00,$IX00,$X001,$LP01,$LT5P,$MI01,$X037,$MDLS,$DV2W,$X025,$X003,$ZCST,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X043,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$S32P,$ME02,$QTPP,$SR07,$SP00,$X021,$SC04,$SU01,$TR00,$TIG4,$DSH5,$MT75R,$UTSB,$WTAS,$WR01,$YFCC,$CPF0&crop=1400,850,300,130&",
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_SEAT_ALTA&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF1,$APH2,$APPB,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDCF,$X027,$DRLH,$AF02,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPB,$PI01,$IX01,$X001,$LP01,$LT3B,$MI01,$X037,$MDLS,$DV4W,$X025,$X003,$ZINV,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X044,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$ME02,$QTPB,$SR01,$SP00,$X021,$SC04,$SU00,$TP03,$TR00,$TIG4,$DSH7,$MT75A,$UTAB,$WTAS,$WR01,$YFFC,$CPF0&crop=1400,850,300,130&",
    ],
  },
  {
    name: "Model S",
    year: "2017",
    modelType: "75 Rear-Wheel Drive",
    price: "$52,000",
    totalRange: "49,347 mile odometer",
    location: "Libertyville, IL",
    emiPerMonth: "$750 /mo",
    shippingFee: "$1000",
    range: "149mi",
    torque: "5.5s",
    topSpeed: "140mph",
    color: "Red Multi-Coat Paint",
    wheelType: `19" Silver Cyclone Wheels`,
    damagePolicy: true,
    interiorType: "Black Premium Interior",
    roofType: "Body Color Roof",
    "30DayTrial": true,
    autoPilot: true,
    updatedAutopilot: true,
    repaired: true,
    ludicrousMode: "Ludicrous Mode",
    spoilerFiber: "Carbon Fiber Spoiler",
    smartAirSusp: "Smart Air Suspension",
    url: [
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF2,$APH4,$APPF,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDBO,$X027,$DRLH,$DU01,$AF00,$FMP6,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPP,$PI00,$IX00,$X001,$LP01,$LT5P,$MI01,$X037,$MDLS,$DV2W,$X025,$X003,$ZCST,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X043,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$S32P,$ME02,$QTPP,$SR07,$SP00,$X021,$SC04,$SU01,$TR00,$TIG4,$DSH5,$MT75R,$UTSB,$WTAS,$WR01,$YFCC,$CPF0&crop=1400,850,300,130&",
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_SEAT_ALTA&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF1,$APH2,$APPB,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDCF,$X027,$DRLH,$AF02,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPB,$PI01,$IX01,$X001,$LP01,$LT3B,$MI01,$X037,$MDLS,$DV4W,$X025,$X003,$ZINV,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X044,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$ME02,$QTPB,$SR01,$SP00,$X021,$SC04,$SU00,$TP03,$TR00,$TIG4,$DSH7,$MT75A,$UTAB,$WTAS,$WR01,$YFFC,$CPF0&crop=1400,850,300,130&",
    ],
  },
  {
    name: "Model S",
    year: "2017",
    modelType: "75 Rear-Wheel Drive",
    price: "$52,000",
    totalRange: "49,347 mile odometer",
    location: "Libertyville, IL",
    emiPerMonth: "$750 /mo",
    shippingFee: "$1000",
    range: "149mi",
    torque: "5.5s",
    topSpeed: "140mph",
    color: "Red Multi-Coat Paint",
    wheelType: `19" Silver Cyclone Wheels`,
    damagePolicy: true,
    interiorType: "Black Premium Interior",
    roofType: "Body Color Roof",
    "30DayTrial": true,
    autoPilot: true,
    updatedAutopilot: true,
    repaired: true,
    ludicrousMode: "Ludicrous Mode",
    spoilerFiber: "Carbon Fiber Spoiler",
    smartAirSusp: "Smart Air Suspension",
    url: [
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF2,$APH4,$APPF,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDBO,$X027,$DRLH,$DU01,$AF00,$FMP6,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPP,$PI00,$IX00,$X001,$LP01,$LT5P,$MI01,$X037,$MDLS,$DV2W,$X025,$X003,$ZCST,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X043,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$S32P,$ME02,$QTPP,$SR07,$SP00,$X021,$SC04,$SU01,$TR00,$TIG4,$DSH5,$MT75R,$UTSB,$WTAS,$WR01,$YFCC,$CPF0&crop=1400,850,300,130&",
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_SEAT_ALTA&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF1,$APH2,$APPB,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDCF,$X027,$DRLH,$AF02,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPB,$PI01,$IX01,$X001,$LP01,$LT3B,$MI01,$X037,$MDLS,$DV4W,$X025,$X003,$ZINV,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X044,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$ME02,$QTPB,$SR01,$SP00,$X021,$SC04,$SU00,$TP03,$TR00,$TIG4,$DSH7,$MT75A,$UTAB,$WTAS,$WR01,$YFFC,$CPF0&crop=1400,850,300,130&",
    ],
  },
  {
    name: "Model S",
    year: "2017",
    modelType: "75 Rear-Wheel Drive",
    price: "$52,000",
    totalRange: "49,347 mile odometer",
    location: "Libertyville, IL",
    emiPerMonth: "$750 /mo",
    shippingFee: "$1000",
    range: "149mi",
    torque: "5.5s",
    topSpeed: "140mph",
    color: "Red Multi-Coat Paint",
    wheelType: `19" Silver Cyclone Wheels`,
    damagePolicy: true,
    interiorType: "Black Premium Interior",
    roofType: "Body Color Roof",
    "30DayTrial": true,
    autoPilot: true,
    updatedAutopilot: true,
    repaired: true,
    ludicrousMode: "Ludicrous Mode",
    spoilerFiber: "Carbon Fiber Spoiler",
    smartAirSusp: "Smart Air Suspension",
    url: [
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF2,$APH4,$APPF,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDBO,$X027,$DRLH,$DU01,$AF00,$FMP6,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPP,$PI00,$IX00,$X001,$LP01,$LT5P,$MI01,$X037,$MDLS,$DV2W,$X025,$X003,$ZCST,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X043,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$S32P,$ME02,$QTPP,$SR07,$SP00,$X021,$SC04,$SU01,$TR00,$TIG4,$DSH5,$MT75R,$UTSB,$WTAS,$WR01,$YFCC,$CPF0&crop=1400,850,300,130&",
      "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_SEAT_ALTA&size=1400&model=ms&options=$BP02,$HC00,$ADPX2,$GLFR,$AU00,$APF1,$APH2,$APPB,$X028,$BTX5,$BS00,$BCMB,$CH05,$CW00,$COUS,$X040,$IDCF,$X027,$DRLH,$AF02,$FG02,$DCF0,$FR04,$TD00,$X007,$X011,$INBPB,$PI01,$IX01,$X001,$LP01,$LT3B,$MI01,$X037,$MDLS,$DV4W,$X025,$X003,$ZINV,$PPMR,$PS01,$PK00,$X031,$PX00,$PF00,$X044,$TM00,$BR04,$RENA,$RFFG,$USSB,$X014,$ME02,$QTPB,$SR01,$SP00,$X021,$SC04,$SU00,$TP03,$TR00,$TIG4,$DSH7,$MT75A,$UTAB,$WTAS,$WR01,$YFFC,$CPF0&crop=1400,850,300,130&",
    ],
  },
];
const Inventory = () => {
  const [index, setIndex] = useState(
    Array.from({ length: carsData?.length }).map((_, id) => ({
      cardIndex: id,
      imgIndex: 0,
    }))
  );

  const [isShow, setIsShow] = useState(-1);

  const handleIndexChange = (id: any, length: any, name: string) => {
    if (name === "next") {
      const indexArray = index;
      const totalIndex = length;
      const nextIndex = indexArray[id]?.imgIndex + 1;

      indexArray[id] = {
        cardIndex: id,
        imgIndex: nextIndex >= totalIndex ? 0 : nextIndex,
      };
      setIndex(indexArray);
    } else {
      const indexArray = index;
      const totalIndex = length;
      const nextIndex = indexArray[id]?.imgIndex - 1;
      indexArray[id] = {
        cardIndex: id,
        imgIndex: nextIndex < 0 ? totalIndex - 1 : nextIndex,
      };
      setIndex(indexArray);
    }
  };

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
                <input type="radio" id="Model S" />
                <label htmlFor="Model S">Model S </label>
              </div>
              <div className="radioStyle">
                <input type="radio" id="l" />
                <label htmlFor="l">Model 3 </label>
              </div>
              <div className="radioStyle">
                <input type="radio" id="Model X" />
                <label htmlFor="Model X">Model X </label>
              </div>
              <div className="radioStyle">
                <input type="radio" id="Model Y" />
                <label htmlFor="Model Y"> Model Y</label>
              </div>
            </div>
            <div>
              <div className="labelMargin">Inventory Type</div>
              <div className="radioStyle">
                <input type="radio" id="New" />
                <label htmlFor="New">New</label>
              </div>
              <div className="radioStyle">
                <input type="radio" id="Used" />
                <label htmlFor="Used">Used</label>
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
              <input type="checkbox" id="19Wheels" />
              <label htmlFor="19Wheels">19" Wheels</label>
            </div>
            <div className="radioStyle">
              <input type="checkbox" id="21Wheels" />
              <label htmlFor="21Wheels">21" Wheels</label>
            </div>
          </div>
          <div className="marginBottom">
            <div className="labelMargin">Autopilot</div>
            <div className="radioStyle">
              <input type="checkbox" id="Autopilot" />
              <label htmlFor="Autopilot">Autopilot</label>
            </div>
            <div className="radioStyle">
              <input type="checkbox" id="FullSelfDriving" />
              <label htmlFor="FullSelfDriving">Full Self Driving</label>
            </div>
          </div>
        </section>
        <section className="resultBlock">
          <div
            style={{
              textAlign: "left",
              color: "#5c5e62",
              paddingLeft: "10px",
              paddingTop: "60px",
            }}
          >
            <span>
              Order online for touchless delivery.<a> Learn more</a>
            </span>
          </div>
          <div className="cardWrapper">
            {carsData.map((item, id) => (
              <div
                className="card"
                key={"card" + id}
                onMouseEnter={() => setIsShow(id)}
                onMouseLeave={() => setIsShow(-1)}
              >
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingInline: "42px",
                    marginBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "10px",
                      textAlign: "left",
                      lineHeight: "24px",
                      wordSpacing: "3px",
                    }}
                  >
                    <h3>{item?.year + " " + item?.name}</h3>
                    <span
                      style={{
                        color: "#5c5e62",
                      }}
                    >
                      {item?.modelType}
                    </span>
                    <span
                      style={{
                        color: "#5c5e62",
                      }}
                    >
                      {item?.totalRange}
                    </span>
                    <span
                      style={{
                        color: "#5c5e62",
                      }}
                    >
                      {item?.location}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "10px",
                      textAlign: "left",
                      lineHeight: "24px",
                      wordSpacing: "3px",
                    }}
                  >
                    <h3>{item?.price}</h3>
                    <span
                      style={{
                        color: "#5c5e62",
                      }}
                    >
                      {item?.emiPerMonth}
                    </span>
                    <span
                      style={{
                        color: "#5c5e62",
                      }}
                    >
                      {item?.shippingFee}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="imageBtnWrapper">
                    <button
                      onClick={() =>
                        handleIndexChange(id, item?.url?.length, "prev")
                      }
                      className={isShow === id ? "show" : ""}
                    >
                      {"<"}
                    </button>
                    {(item.url || []).map((img, imgId) => (
                      <img
                        className={
                          index[id]?.imgIndex === imgId &&
                          index[id]?.cardIndex === id
                            ? "activeImage"
                            : ""
                        }
                        src={img}
                        alt="tesla"
                      />
                    ))}
                    <button
                      onClick={() =>
                        handleIndexChange(id, item?.url?.length, "next")
                      }
                      className={isShow === id ? "show" : ""}
                    >
                      {">"}
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingInline: "42px",
                    marginBottom: "15px",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <h3 style={{ marginBottom: "8px" }}>{item?.torque}</h3>
                    <span
                      style={{
                        color: "#5c5e62",
                      }}
                    >
                      0-60 mph
                    </span>
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "8px" }}>{item?.topSpeed}</h3>
                    <span
                      style={{
                        color: "#5c5e62",
                      }}
                    >
                      0-60 mph
                    </span>
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "8px" }}>{item?.range}</h3>
                    <span
                      style={{
                        color: "#5c5e62",
                      }}
                    >
                      0-60 mph
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingInline: "42px",
                    marginBottom: "10px",
                    textAlign: "left",
                    color: "#5c5e62",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "10px",
                      textAlign: "left",
                      color: "#5c5e62",
                      lineHeight: "24px",
                      wordSpacing: "3px",
                    }}
                  >
                    <span>{item?.color}</span>
                    <span>{item?.wheelType}</span>
                    <span>{item?.interiorType}</span>
                    <span>{item?.autoPilot}</span>
                    <span>{item?.roofType}</span>
                    <span>{item?.ludicrousMode}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "10px",
                      flexDirection: "column",
                      textAlign: "left",
                      lineHeight: "24px",
                      wordSpacing: "3px",
                    }}
                  >
                    {item?.updatedAutopilot && (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span className="autopilot"></span>
                        <span>Enhanced Autopilot</span>
                      </span>
                    )}
                    {item?.damagePolicy && (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span className="historyClean"></span>
                        <span>No Reported Accidents/Damage</span>
                      </span>
                    )}
                    {item?.repaired && (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span className="repair"></span>
                        <span>Previously Repaired</span>
                      </span>
                    )}
                    {item?.["30DayTrial"] && (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span className="historyClean">
                          {/* <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span> */}
                        </span>
                        <span>30-Day Premium Connectivity Trial</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
