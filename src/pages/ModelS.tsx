import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./ModelS.css";
import "../components/Card.css";
import { PICTURE_SVG, AUTO_DRIVING_DATA } from "../constants/constData";
import { Link } from "react-router-dom";

const videoContaint = [
  {
    id: 0,
    src: "https://tesla-cdn.thron.com/delivery/public/video/tesla/9a153db3-198b-4502-98bc-3bc6041597fd/bvlatuR/WEBHD/model-s-interior-carousel-1-cinematic-display-desktop-global",
    overView: `A 17” touchscreen with left-right tilt offers 2200 x
    1300 resolution, true colors and exceptional
    responsiveness for gaming, movies and more.`,
    heading: "Cinematic Experience",
  },
  {
    id: 1,
    src: "https://tesla-cdn.thron.com/delivery/public/video/tesla/c39b1f9b-dfe6-4e45-a0d7-0156ff7d2706/bvlatuR/WEBHD/MS-Interior-Carousel-2-Yoke-Desktop",
    overView: `A bold new approach gives you a true connection to
    Model S, offering better steering feel and
    unobstructed views of your dash and the road ahead.
    Tap the brake and Model S automatically selects the
    correct direction to start your trip.`,
    heading: "Yoke Steering",
  },
  {
    id: 2,
    src: "https://tesla-cdn.thron.com/delivery/public/video/tesla/ac921a72-b7e7-404b-9acc-373a02ef2869/bvlatuR/WEBHD/MS-Interior-Carousel-3-Environment-Desktop",
    overView: `Air vents are hidden throughout the cabin, while
    tri-zone temperature controls, ventilated seats and
    HEPA filtration deliver the perfect environment.`,
    heading: "Perfect Environment",
  },
  {
    id: 3,
    src: "https://tesla-cdn.thron.com/delivery/public/video/tesla/ce17484f-f941-4040-92b3-cc2a1564a6ff/bvlatuR/WEBHD/MS-Interior-Carousel-4-Rear-Seats-Desktop",
    overView: `Seating for three adults, with extra legroom, headroom
    and a stowable armrest with integrated storage and
    wireless charging.`,
    heading: "Redesigned Second Row",
  },
  {
    id: 4,
    src: "https://tesla-cdn.thron.com/delivery/public/video/tesla/66dae454-284f-41e6-b730-1773e87126f0/bvlatuR/WEBHD/MS-Interior-Carousel-5-Gaming-Mobile",
    overView: `Up to 10 teraflops of processing power unlock in-car
    gaming on-par with today’s newest consoles. Play from
    any seat with wireless controller and headset
    compatibility.`,
    heading: "Console-Grade Gaming",
  },
];

const picturs = [
  {
    url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0f44fadf-7d40-43b6-b94d-de289b38840c/bvlatuR/std/1920x900/model-s-performance-dual-motor-desktop_carousel-new",
    header: "Model S",
    description: `Dual Motor All-Wheel Drive unlocks more range than any other
    vehicle in our current lineup, with insane power and maximum
    control.`,
    component: (
      <>
        <div className="specs">
          <div className="range">
            <h1>3.1 s</h1>
            <p>0-60 mph</p>
          </div>
          <div className="range">
            <h1>405 mi</h1>
            <p>Range (EPA est.)</p>
          </div>
          <div className="range">
            <h1>670 hp </h1>
            <p>Peak Power</p>
          </div>
        </div>
      </>
    ),
  },
  {
    url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/a4207386-4e7d-4028-924c-f7f21a0781b4/bvlatuR/std/1920x900/model-s-performance-tri-motor-desktop_carousel-new",
    header: "Model S Plaid",
    description: `Maintain 1,000+ horsepower all the way to 200 mph with
    Tri-Motor All-Wheel Drive, featuring torque vectoring and
    three independent carbon-sleeved rotors.`,
    component: (
      <>
        <div className="specs">
          <div className="range">
            <h1>1.99 s*</h1>
            <p>0-60 mph</p>
          </div>
          <div className="range">
            <h1>396 mi</h1>
            <p>Range (EPA est.)</p>
          </div>
          <div className="range">
            <h1>1,020 hp </h1>
            <p>Peak Power</p>
          </div>
        </div>
      </>
    ),
  },
];

const delay = 5000;

function ModelS() {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);

  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex) => {
        const totalLength = videoContaint.length;
        const nextIndex = currentIndex + 1;
        return nextIndex >= totalLength ? 0 : nextIndex;
      });
    }, 5000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setIndex2((prevIndex) =>
          prevIndex === picturs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [index2]);

  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setIndex3((prevIndex) =>
          prevIndex === PICTURE_SVG.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [index3]);

  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setIndex4((prevIndex) =>
          prevIndex === AUTO_DRIVING_DATA.length - 1 ? 0 : prevIndex + 1
        ),
      delay + 3000
    );
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [index4]);

  const tabsData = [
    {
      tabName: "Model S Plaid",
      component: (
        <>
          <div className="left">
            <hr />
            <div>
              <span>Range (EPA est.)</span>
              <span>396 mi</span>
            </div>
            <hr />
            <div>
              <span>1/4 Mile</span>
              <span>9.23@155 mph trap speed</span>
            </div>
            <hr />
            <div>
              <span>Peak Power</span>
              <span>1,020 hp</span>
            </div>
            <hr />
            <div>
              <span>Wheels</span>
              <span>19" or 21"</span>
            </div>
            <hr />
            <div>
              <span>Cargo</span>
              <span>28 cu ft</span>
            </div>
            <hr />
            <div>
              <span>Weight</span>
              <span>4,766 lbs</span>
            </div>
          </div>
          <div className="right">
            <hr />
            <div>
              <span>*Acceleration</span>
              <span>1.99 s 0-60 mph with rollout subtracted</span>
            </div>
            <hr />
            <div>
              <span>†Top Speed</span>
              <span>200 mph when equipped with paid hardware upgrades</span>
            </div>
            <hr />
            <div>
              <span>Drag Coefficient</span>
              <span>0.208 Cd </span>
            </div>
            <hr />
            <div>
              <span>Powertrain</span>
              <span>Tri Motor</span>
            </div>
            <hr />
            <div>
              <span>Supercharging Max</span>
              <span>250 kW</span>
            </div>
          </div>
        </>
      ),
    },
    {
      tabName: "Model S",
      component: (
        <>
          <div className="left">
            <hr />
            <div>
              <span>Range (EPA est.)</span>
              <span>396 mi</span>
            </div>
            <hr />
            <div>
              <span>Peak Power</span>
              <span>1,020 hp</span>
            </div>
            <hr />
            <div>
              <span>Wheels</span>
              <span>19" or 21"</span>
            </div>
            <hr />
            <div>
              <span>Cargo</span>
              <span>28 cu ft</span>
            </div>
            <hr />
            <div>
              <span>*Acceleration</span>
              <span>1.99 s 0-60 mph with rollout subtracted</span>
            </div>
          </div>
          <div className="right">
            <hr />
            <div>
              <span>†Top Speed</span>
              <span>200 mph when equipped with paid hardware upgrades</span>
            </div>
            <hr />
            <div>
              <span>Weight</span>
              <span>4,766 lbs</span>
            </div>
            <hr />
            <div>
              <span>Powertrain</span>
              <span>Tri Motor</span>
            </div>
            <hr />
            <div>
              <span>Drag Coefficient</span>
              <span>0.208 Cd </span>
            </div>
            <hr />
            <div>
              <span>Supercharging Max</span>
              <span>250 kW</span>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container">
      <section>
        <div>
          <picture
            className="teslaImage"
            data-alt="Red Model S"
            data-iesrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
            data-loaded="true"
          >
            <source
              srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/ebbd6957-54ec-4ec3-a0b6-f0645d87d72e/bvlatuR/std/1927x4096/Model-S-Main-Hero-Mobile-LHD"
              media="(max-width: 599px) and (orientation: portrait)"
            />
            <source
              srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
              media="(max-width: 899px) and (orientation: landscape)"
            />
            <source
              srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
              media="(min-width: 900px) and (orientation: landscape)"
            />
            <source
              srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
              media="(min-width: 600px) and (orientation:portrait)"
            />
            <noscript>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
                srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
                alt="Red Model S"
              />
            </noscript>
            <img
              alt="Red Model S"
              className="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center"
            />
          </picture>
        </div>
        <div className="aboutMe">
          <div className="modelName">
            <h1>Model S</h1>
            <p>Plaid</p>
          </div>
          <div className="techSpecs">
            <div className="specs">
              <div className="range">
                <h1>396 mi</h1>
                <p>Range (EPA est.)</p>
              </div>
              <div className="range">
                <h1>1.99s</h1>
                <p>0-60 mph*</p>
              </div>
              <div className="range">
                <h1>200 mph </h1>
                <p>Top Speed+</p>
              </div>
              <div className="range">
                <h1>1,020 hp </h1>
                <p>Peak Power</p>
              </div>
            </div>
            <div className="orderBtn">
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="exception">
          <h2 className="text-align-center">Interior of the Future</h2>
        </div>
      </section>
      <section>
        <div>
          <picture
            className="teslaImage"
            data-alt="Model S with white interior"
            data-class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center"
            data-iesrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/c0c475f7-2856-46e1-87ab-dd67ec8dd43f/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"
            data-loaded="true"
          >
            <source
              srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/ba1a4a2a-b86e-46f2-a100-cee94b80929a/bvlatuR/std/960x1350/MS-Interior-Hero-Mobile"
              media="(max-width: 599px) and (orientation: portrait)"
            />
            <source
              srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/c0c475f7-2856-46e1-87ab-dd67ec8dd43f/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"
              media="(max-width: 899px) and (orientation: landscape)"
            />
            <source
              srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/c0c475f7-2856-46e1-87ab-dd67ec8dd43f/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"
              media="(min-width: 900px) and (orientation: landscape)"
            />
            <source
              srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/c0c475f7-2856-46e1-87ab-dd67ec8dd43f/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"
              media="(min-width: 600px) and (orientation:portrait)"
            />
            <noscript>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c0c475f7-2856-46e1-87ab-dd67ec8dd43f/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"
                srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/c0c475f7-2856-46e1-87ab-dd67ec8dd43f/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"
                alt="Model S with white interior"
              />
            </noscript>
            <img alt="Model S with white interior" />
          </picture>
        </div>
      </section>
      <section>
        <div>
          <div className="videoSection">
            <div className="videoWrapper">
              <div className="video">
                {/* {videoContaint.map((item, id) => (
                  <video
                    className="videoSlides fade"
                    key={"Video" + id}
                    preload="auto"
                    loop
                    muted
                    autoPlay
                    src={item?.src}
                    data-loaded="true"
                  />
                ))} */}

                <video
                  className="fade"
                  preload="auto"
                  loop
                  muted
                  autoPlay
                  src={videoContaint[index]?.src}
                  data-loaded="true"
                />
              </div>
            </div>
            <div style={{ paddingTop: "42px" }}>
              <section>
                <section>
                  <section className="overViewWrapper">
                    <div role="tablist">
                      <div></div>
                      {videoContaint?.map((_, id) => (
                        <button
                          key={"Button" + id}
                          className={id === index ? "active" : ""}
                          role="tab"
                          onClick={() => setIndex(id)}
                        ></button>
                      ))}
                    </div>
                    <div className="demoOverview">
                      {/* {videoContaint.map((item, id) => (
                        <section key={"String" + id} className="overView">
                          <span role="heading">{item?.heading}</span>
                          <p>{item?.overView}</p>
                        </section>
                      ))} */}
                      <section>
                        <span role="heading">
                          {videoContaint[index]?.heading}
                        </span>
                        <p>{videoContaint[index]?.overView}</p>
                      </section>
                    </div>
                  </section>
                </section>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="cardsWrapper">
          <div className="interiorMedia">
            <Card>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/180e927c-0542-4428-beb7-1411502fe3bb/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop"
                alt="Console wireless charging 2 mobile devices"
              />
            </Card>
            <Card>
              <div className="mediaData">
                <p>
                  <strong>Stay Connected</strong>
                </p>
                <p>
                  Instantly connect with multi-device Bluetooth, or fast charge
                  devices with wireless and 36-watt USB-C charging.
                </p>
              </div>
            </Card>
          </div>
          <div className="interiorMedia">
            <Card>
              <video
                preload="auto"
                playsInline
                muted
                loop
                src="https://tesla-cdn.thron.com/delivery/public/video/tesla/7aa04cc1-863e-4ac6-952e-4ea01457bf47/bvlatuR/WEBHD/MS-Interior-Grid-2-Audio-Desktop"
                autoPlay
              />
            </Card>
            <Card>
              <div className="mediaData">
                <p>
                  <strong>Immersive Sound</strong>
                </p>

                <p>
                  A 22-speaker, 960-watt audio system with Active Road Noise
                  Reduction offers immersive listening and studio-grade sound
                  quality.
                </p>
              </div>
            </Card>
          </div>
          <div className="interiorMedia">
            <Card>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop"
                alt="Model S rear trunk with white bike and helmet"
              />
            </Card>
            <Card>
              <div className="mediaData">
                <p>
                  <strong>Room for Everything</strong>
                </p>

                <p>
                  With front and rear trunks and fold-flat seats you can fit
                  your bike without taking the wheel off—and your luggage too.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <div className="void"></div>
      </section>
      <section>
        <div className="void"></div>
      </section>
      <section>
        <div className="descreat">
          <div className="heightImage">
            <div className="imageWrapper">
              <picture
                className="teslaImage"
                data-alt="Blue Model S"
                data-iesrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/08585f00-c0b7-4bda-80e4-2b78406b5582/bvlatuR/std/4096x2560/Model-S-Performance-Hero-Desktop-LHD"
                data-loaded="true"
              >
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/42366a1a-8a97-419e-80a3-4991bc4c2b4d/bvlatuR/std/2882x4096/Model-S-Performance-Hero-Mobile-LHD"
                  media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
                />
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/08585f00-c0b7-4bda-80e4-2b78406b5582/bvlatuR/std/4096x2560/Model-S-Performance-Hero-Desktop-LHD"
                  media="(min-width: 900px) and (orientation: landscape)"
                />
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/08585f00-c0b7-4bda-80e4-2b78406b5582/bvlatuR/std/4096x2560/Model-S-Performance-Hero-Desktop-LHD"
                  media="(min-width: 600px) and (orientation:portrait)"
                />
                <noscript>
                  <img
                    // src="https://tesla-cdn.thron.com/delivery/public/image/tesla/08585f00-c0b7-4bda-80e4-2b78406b5582/bvlatuR/std/4096x2560/Model-S-Performance-Hero-Desktop-LHD"
                    srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/08585f00-c0b7-4bda-80e4-2b78406b5582/bvlatuR/std/4096x2560/Model-S-Performance-Hero-Desktop-LHD"
                    alt="Blue Model S"
                  />
                </noscript>
                <img alt="Blue Model S" />
              </picture>
            </div>
            <div className="powerSpecs">
              <div className="specs">
                <div className="range">
                  <h1>396 mi</h1>
                  <p>Range (EPA est.)</p>
                </div>
                <div className="range">
                  <h1>1.99s</h1>
                  <p>0-60 mph*</p>
                </div>
                <div className="range">
                  <h1>200 mph </h1>
                  <p>Top Speed+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="heightUtilities">
            <div className="leftBlock">
              <div className="text">
                <div>
                  <span>Plaid</span>
                  <h1>Beyond Ludicrous</h1>
                </div>
              </div>
              <div className="actions">
                <div className="actionWrapper">
                  <button className="orderBtn">Order Now</button>
                  <Link to="./inventory">
                    <button className="viewBtn">View Inventory</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightBlock">
              <p>
                Model S Plaid has the quickest acceleration of any vehicle in
                production. Updated battery architecture for all Model S trims
                enables back-to-back track runs without performance degradation.{" "}
                <a>Chat with a Tesla Advisor</a> to learn more about Model S.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="voidLight"></div>
      </section>
      <section>
        <div className="modelSAndSPlaid">
          <div className="electricPowertrain">
            <h1>Electric Powertrain</h1>
            <p>
              Model S platforms unite powertrain and battery technologies for
              unrivaled performance, range and efficiency. New module and pack
              thermal architecture allows faster charging and gives you more
              power and endurance in all conditions.
            </p>
          </div>
          <div className="electricPowerPicture">
            <div>
              {picturs.map((pictur, id) => (
                <img
                  className={`powerTrainImg${
                    index2 === id ? " showImage" : ""
                  }`}
                  key={"picture" + id}
                  src={pictur.url}
                  srcSet={pictur.url}
                  alt="Model S Dual Motor All-Wheel Drive"
                />
              ))}
            </div>

            <div className="specsTabs">
              {picturs.map((item, id) => (
                <div
                  key={"items" + id}
                  className={`specsTab${index2 === id ? " active" : ""}`}
                  onClick={() => setIndex2(id)}
                >
                  <div className="tabBar" />
                  <h1>{item.header}</h1>
                  <p>{item.description}</p>
                  <div className="powerSpecs">{item.component}</div>
                </div>
              ))}
            </div>
            <section>
              <div className="voidLight">
                <div>* With rollout subtracted</div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <div className="descreatDark">
          <div className="heightImage">
            <div className="imageWrapper">
              <picture className="teslaImage">
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/9f8e2f46-abae-4d49-9266-021975a6f086/bvlatuR/std/1390x1651/Model-S-Exterior-Hero-Mobile-Global"
                  media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
                />
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/1981e29b-2ce8-4620-9c6a-fe1eaf005656/bvlatuR/std/3456x2160/Model-S-Exterior-Hero-Desktop-Global"
                  media="(min-width: 900px) and (orientation: landscape)"
                />
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/1981e29b-2ce8-4620-9c6a-fe1eaf005656/bvlatuR/std/3456x2160/Model-S-Exterior-Hero-Desktop-Global"
                  media="(min-width: 600px) and (orientation:portrait)"
                />
                <noscript>
                  <img
                    src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1981e29b-2ce8-4620-9c6a-fe1eaf005656/bvlatuR/std/3456x2160/Model-S-Exterior-Hero-Desktop-Global"
                    srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/1981e29b-2ce8-4620-9c6a-fe1eaf005656/bvlatuR/std/3456x2160/Model-S-Exterior-Hero-Desktop-Global"
                    alt="Side view of red Model S"
                  />
                </noscript>
                <img alt="Side view of red Model S" />
              </picture>
            </div>
            {/* <div className="powerSpecs">
              <div className="specs">
                <div className="range">
                  <h1>396 mi</h1>
                  <p>Range (EPA est.)</p>
                </div>
                <div className="range">
                  <h1>1.99s</h1>
                  <p>0-60 mph*</p>
                </div>
                <div className="range">
                  <h1>200 mph </h1>
                  <p>Top Speed+</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="heightUtilities">
            <div className="leftBlock">
              <div className="text">
                <div>
                  <span>Exterior</span>
                  <h1>Designed for Efficiency</h1>
                </div>
              </div>
              <div className="actions">
                <div className="actionWrapper">
                  <button className="orderBtn">Order Now</button>
                  <Link to="./inventory">
                    <button className="viewBtn">View Inventory</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightBlock">
              <p>
                With a drag coefficient of just .208 Cd, the lowest on the
                planet, Model S is built for speed, endurance and range.
                Improved aerodynamics and a wider chassis offer more responsive
                performance so you can take corners quicker and with more
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="void"></div>
      </section>
      <section>
        <div className="cardsWrapper">
          <div className="exteriorMedia">
            <Card>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/fe86a447-03fe-43ce-bf53-daff2a81210d/bvlatuR/std/3949x2217/Model-S-Exterior-Grid-A-Desktop-Global"
                alt="Red Model S front left wheel"
              />
            </Card>
            <Card>
              <div className="mediaData">
                <p>
                  <b>Relentless Performance</b>
                </p>
                <p>
                  Staggered, performance wheels and tires keep the car planted
                  and help transfer maximum power down to the road.
                </p>
              </div>
            </Card>
          </div>
          <div className="exteriorMedia">
            <Card>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1020d97e-9a6f-4932-9914-0ce889ecfaa6/bvlatuR/std/3840x2156/Model-S-Exterior-Grid-B-Desktop-Global"
                alt="Red Model S back view"
              />
            </Card>
            <Card>
              <div className="mediaData">
                <p>
                  <b>Optimized Aerodynamics</b>
                </p>
                <p>
                  Attention to detail on all exterior surfaces makes Model S the
                  most aerodynamic production car on Earth.
                </p>
              </div>
            </Card>
          </div>
          <div className="exteriorMedia">
            <Card>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b592fbac-9ccd-4951-94b8-f5c5157dfe5b/bvlatuR/std/3657x2039/Model-S-Exterior-Grid-C-Desktop-Global"
                alt="Red Model S front-side view"
              />
            </Card>
            <Card>
              <div className="mediaData">
                <p>
                  <b>Refined Styling</b>
                </p>
                <p>
                  An iconic silhouette meets refreshed, elegant proportions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <div className="void"></div>
      </section>
      <section>
        <div className="descreat">
          <div className="heightImage">
            <div className="imageWrapper">
              <video
                preload="auto"
                playsInline
                muted
                loop
                src="https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4"
                autoPlay
              />
            </div>
            <div className="powerSpecs">
              <div className="specs">
                <div className="range">
                  <h1>396 mi</h1>
                  <p>Range (EPA est.)</p>
                </div>
                <div className="range">
                  <h1>1.99s</h1>
                  <p>0-60 mph*</p>
                </div>
                <div className="range">
                  <h1>200 mph </h1>
                  <p>Top Speed+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="heightUtilities">
            <div className="leftBlock">
              <div className="text">
                <div>
                  <span>Exterior</span>
                  <h1>Designed for Efficiency</h1>
                </div>
              </div>
              <div className="actions">
                <div className="actionWrapper">
                  <button className="orderBtn">Order Now</button>
                  <Link to="./inventory">
                    <button className="viewBtn">View Inventory</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightBlock">
              <p>
                With up to 405 miles of estimated range and access to the
                world’s largest and most powerful fast charging network, you’ll
                spend less time plugged in and more time on the road.{" "}
                <a>Chat with a Tesla Advisor</a> to learn more about Model S.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="voidWhite"></div>
      </section>
      <section>
        <div className="voidWhite"></div>
      </section>
      <section>
        <div className="mapSection">
          <div className="text">
            <div>
              <span>Freedom to Travel</span>
              <p>
                Enter a destination on your touchscreen and Trip Planner will
                automatically calculate your route with Superchargers along the
                way.
              </p>
            </div>
          </div>

          <div className="svgMapImageWrapper">
            {PICTURE_SVG.map((item, id) => (
              <div
                key={"hsjdf" + id}
                className={`mapImage${index3 === id ? " showMapImage" : ""}`}
              >
                {item.component}
              </div>
            ))}
          </div>
          <div>
            <div className="specsTabs">
              {PICTURE_SVG.map((item, id) => (
                <div
                  key={"item4" + id}
                  className={`specsTab${index3 === id ? " active" : ""}`}
                  onClick={() => setIndex3(id)}
                >
                  <div className="tabBar" />
                  <p>{item.header}</p>
                  <h1 className="description">{item.description}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="voidWhite"></div>
      </section>
      <section>
        <div className="voidWhite"></div>
      </section>
      <section>
        <div className="voidWhite">
          <button className="">Learn More</button>
        </div>
      </section>
      <section>
        <div className="voidWhite"></div>
      </section>
      <section>
        <div className="chassisModel">
          <div className="chassisImgSection">
            <picture>
              <source
                srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/9dbc96d7-f4ab-42d8-a044-fa067b2db86e/bvlatuR/std/1570x1864/Model-S-Safety-Hero-Mobile-Global-960x1140"
                media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
              />
              <source
                srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/d9cf0882-127e-406a-9f2d-a599c5988bd8/bvlatuR/std/3840x2160/Model-S-Safety-Hero-Desktop-Global"
                media="(min-width: 900px) and (orientation: landscape)"
              />
              <source
                srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/d9cf0882-127e-406a-9f2d-a599c5988bd8/bvlatuR/std/3840x2160/Model-S-Safety-Hero-Desktop-Global"
                media="(min-width: 600px) and (orientation:portrait)"
              />
              <img
                className="chassisImg"
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/d9cf0882-127e-406a-9f2d-a599c5988bd8/bvlatuR/std/3840x2160/Model-S-Safety-Hero-Desktop-Global"
                srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/d9cf0882-127e-406a-9f2d-a599c5988bd8/bvlatuR/std/3840x2160/Model-S-Safety-Hero-Desktop-Global"
                alt="Chassis of Model S	"
              />
            </picture>
            <div className="poitLine">
              <div>
                <span>Front-Impact Protection</span>
              </div>
              <div>
                <span>Side-Impact Protection</span>
              </div>
              <div>
                <span>Very Low Rollover Risk</span>
              </div>
            </div>
          </div>
          {/* <div> */}
          <div className="heightUtilities">
            <div className="leftBlock">
              <div className="text">
                <div>
                  <span>Safety</span>
                  <h1>High Impact Protection</h1>
                </div>
              </div>
              <div className="actions">
                <div className="actionWrapper">
                  <button className="orderBtn">Order Now</button>
                  <Link to="./inventory">
                    <button className="viewBtn">View Inventory</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightBlock">
              <p>
                Model S is built from the ground up as an electric vehicle, with
                a high-strength architecture and floor-mounted battery pack for
                incredible occupant protection and low rollover risk. Every new
                Model S includes Tesla’s latest active safety features, such as
                Automatic Emergency Braking, at no extra cost.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
      {/* <section>
        <div className="voidWhite"></div>
      </section> */}
      <section>
        <div className="descreat autoPilotSection">
          <div className="heightImage">
            <div className="imageWrapper">
              <picture className="teslaImage">
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/a637a5e9-c033-4774-b654-e1a27c2cf0b4/bvlatuR/std/1600x1900/Autopilot-Hero-Vision-Mobile"
                  media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
                />
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/c960989c-3359-4caf-8cc7-afb07c372d6f/bvlatuR/std/4096x2560/Autopilot-Hero-Vision-Desktop"
                  media="(min-width: 900px) and (orientation: landscape)"
                />
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/c960989c-3359-4caf-8cc7-afb07c372d6f/bvlatuR/std/4096x2560/Autopilot-Hero-Vision-Desktop"
                  media="(min-width: 600px) and (orientation:portrait)"
                />
                <noscript>
                  <img
                    src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c960989c-3359-4caf-8cc7-afb07c372d6f/bvlatuR/std/4096x2560/Autopilot-Hero-Vision-Desktop"
                    srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/c960989c-3359-4caf-8cc7-afb07c372d6f/bvlatuR/std/4096x2560/Autopilot-Hero-Vision-Desktop"
                    alt="Autopilot with Tesla Vision"
                  />
                </noscript>
                <img alt="Autopilot with Tesla Vision" />
              </picture>
            </div>
            <div className="powerSpecs">
              <div className="specs">
                <div className="range">
                  <h1>360°</h1>
                  <p>
                    Rear, side and forward-facing cameras provide maximum
                    visibility
                  </p>
                </div>
                <div className="range">
                  <h1>250 m</h1>
                  <p>Powerful visual processing at up to 250 meters of range</p>
                </div>
                <div className="range">
                  <h1>
                    <div className="svgCircle">
                      <div className="solidBlack">
                        <div className="bigWhite"></div>
                        <div className="smallWhite"></div>
                      </div>
                    </div>
                  </h1>
                  <p>
                    Tesla Vision detects nearby cars, helps prevent potential
                    collisions and assists with parking
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="heightUtilities">
            <div className="leftBlock">
              <div className="text">
                <div>
                  <span>Autopilot</span>
                  <h1>Future of Driving</h1>
                </div>
              </div>
              <div className="actions">
                <div className="actionWrapper">
                  <button className="orderBtn">Order Now</button>
                  <Link to="./inventory">
                    <button className="viewBtn">View Inventory</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightBlock">
              <p>
                Autopilot enables your car to steer, accelerate and brake
                automatically within its lane under your active supervision,
                assisting with the most burdensome parts of driving. With
                over-the-air software updates, the latest enhancements are
                available instantly. <a>Chat with a Tesla Advisor</a> to learn
                more about Model S.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="voidWhite"></div>
      </section>
      <section>
        <div className="features">
          <h1>Features</h1>
          <p>
            Enhanced Autopilot and Full Self-Driving capability introduce
            additional features and improve existing functionality to make your
            car more capable over time, including:
          </p>
        </div>
      </section>
      <section>
        <div className="autoPilotFeature">
          <div className="electricPowerPicture">
            <div style={{ height: "80%" }}>
              {AUTO_DRIVING_DATA.map((video, id) => (
                <video
                  key={"video" + id}
                  className={`hideVideo${index4 === id ? " showVideo" : ""}`}
                  preload="auto"
                  loop
                  muted
                  autoPlay
                  src={video?.src}
                  data-loaded="true"
                />
              ))}
            </div>

            <div>
              <div className="specsTabs" style={{ textAlign: "left" }}>
                {AUTO_DRIVING_DATA.map((item, id) => (
                  <div
                    key={"item2" + id}
                    className={`specsTab${index4 === id ? " active" : ""}`}
                    onClick={() => setIndex4(id)}
                  >
                    <div className="tabBar" />
                    <h1 className="description">{item.description}</h1>
                    <p>{item.header}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* <section>
              <div className="voidLight">
                <div>* With rollout subtracted</div>
              </div>
            </section> */}
          </div>
        </div>
      </section>
      <section>
        <div className="voidWhite"></div>
      </section>
      <section>
        <div className="voidWhite"></div>
      </section>
      <section>
        <div className="void"></div>
      </section>
      <section>
        <div className="tabSection">
          <div className="blockWrapper">
            <div className="imageBlock">
              <picture>
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/1ecc87a0-ad20-4434-ab7b-6aaf3a79476c/bvlatuR/std/4096x3072/Model-S-Specs-Hero-Mobile-LHD"
                  media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
                />
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD"
                  media="(min-width: 900px) and (orientation: landscape)"
                />
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD"
                  media="(min-width: 600px) and (orientation:portrait)"
                />
                <noscript>
                  <img
                    src="https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD"
                    srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD"
                    alt="Front view of black Model S"
                  />
                </noscript>
                <img alt="Front view of black Model S" />
              </picture>
            </div>
            <div className="tabBlock">
              <div>
                <p className="heading">
                  <strong> Model S </strong>Specs
                </p>
              </div>
              <div className="tabButtonWrapper">
                {tabsData.map((tabName, id) => (
                  <button
                    key={"button" + id}
                    className={`tabButton${
                      selectedTab === id ? " active" : ""
                    }`}
                    onClick={() => setSelectedTab(id)}
                  >
                    {tabName.tabName}
                  </button>
                ))}
              </div>
              <div className="tabData">{tabsData[selectedTab]?.component}</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="void"></div>
      </section>
      <section>
        <div className="void">
          <div className="actionWrapper">
            <button className="orderBtn">Order Now</button>
          </div>
        </div>
      </section>
      <section>
        <div className="lastSection">
          <div className="heightUtilities">
            <div className="leftBlock">
              <div className="text">
                <div>
                  <span>Autopilot</span>
                  <h1>Future of Driving</h1>
                </div>
              </div>
              <div className="actions">
                <div className="actionWrapper">
                  <button className="orderBtn">Order Now</button>
                  <Link to="./inventory">
                    <button className="viewBtn">View Inventory</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightBlock">
              <picture>
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/e00bf240-9973-494f-a217-786b736d8dde/bvlatuR/std/3840x2128/Model-S-Order-Hero-Desktop-Mobile-Global"
                  media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
                />
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/e00bf240-9973-494f-a217-786b736d8dde/bvlatuR/std/3840x2128/Model-S-Order-Hero-Desktop-Mobile-Global"
                  media="(min-width: 900px) and (orientation: landscape)"
                />
                <source
                  srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/e00bf240-9973-494f-a217-786b736d8dde/bvlatuR/std/3840x2128/Model-S-Order-Hero-Desktop-Mobile-Global"
                  media="(min-width: 600px) and (orientation:portrait)"
                />
                <noscript>
                  <img
                    src="https://tesla-cdn.thron.com/delivery/public/image/tesla/e00bf240-9973-494f-a217-786b736d8dde/bvlatuR/std/3840x2128/Model-S-Order-Hero-Desktop-Mobile-Global"
                    srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/e00bf240-9973-494f-a217-786b736d8dde/bvlatuR/std/3840x2128/Model-S-Order-Hero-Desktop-Mobile-Global"
                    alt="Side view of pearl white Model S"
                  />
                </noscript>
                <img alt="Side view of pearl white Model S" />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            height: "300px",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
          }}
          className="more"
        >
          <p
            style={{
              marginTop: "unset",
              width: "80%",
              marginInline: "auto",
              color: "#565151",
            }}
          >
            Certain high data usage vehicle features require at least Standard
            Connectivity, including maps, navigation and voice commands. Access
            to features that use cellular data and third-party licenses are
            subject to change.
            <a
              style={{
                color: "#000",
              }}
            >
              {" "}
              Learn more about Standard Connectivity and any limitations.
            </a>
          </p>
        </div>
      </section>
      <section>
        <div
          style={{ height: "50px", backgroundColor: "#fff", color: "#565151" }}
        >
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
      </section>
    </div>
  );
}

export default ModelS;
