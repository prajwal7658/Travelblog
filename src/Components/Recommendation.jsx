import React, { useState } from "react";

import "../Styles/Recommendation.css";

import kadri from "../assets/kadri.png";
import panambur from "../assets/panambur.png";
import kudroli from "../assets/kudroli.png";
import sulthan from "../assets/sulthan.png";
import tanniru from "../assets/tanniru.png";
import aloysius from "../assets/aloysius.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [active, setActive] = useState();

  const data = [
    {
      image: kadri,
      title: "Kadri Temple",
      subTitle: "The temple of Manjunatheshwara on the hills of Kadri is said to be built during the 10th or 11th century. It was converted to a complete stone structure during the 14th century.The bronze (panchlauha) idol of Lokeshwar (identified as Brahma), about 5 feet high, of the temple is called as oldest of the South Indian temples. It has an inscription dated 968 A.D. (or 1068 A.D.), engraved on the pedestal. The inscription states that King Kundavarma of the Alupa Dynasty installed the Lokeshwara idol in Kadarika Vihara.",
      cost: "5,800",
      duration: "Approx 1 hour",
    },
    {
      image: panambur,
      title: "Panambur Beach",
      subTitle: "Panambur Beach is a beach on the shores of the Arabian Sea in the city of Mangalore in the Indian state of Karnataka.It is the most popular, well connected and the most visited beach of Karnataka.[1]Panambur beach is about 10 km (6.2 mi) north of Mangalore city center[2] and comes under the administration of Mangalore City Corporation. It is maintained by a private enterprise under the banner of Panambur Beach Tourism Development Project.",
      cost: "2,200",
      duration: "Approx 2 hour",
    },
    {
      image: kudroli,
      title: "Gokarnanatheshwara Temple",
      subTitle: "The Gokarnanatheshwara Temple, otherwise known as Kudroli Sri Gokarnanatha Kshetra, is in the Kudroli area of Mangalore in Karnataka, India. It was consecrated by Narayana Guru. It is dedicated to Gokarnanatha, a form of Lord Shiva. This temple was built in 1912 by Adhyaksha HoigeBazar Koragappa.",
      cost: "3,500",
      duration: "Approx 2 hour",
    },
    {
      image: sulthan,
      title: "Sultan Bateri",
      subTitle: "The Sultan Bateri watch tower, constructed in 1784 by Tipu Sultan is in Boloor, 4 km from the centre of Mangalore city, the chief port city in the state of Karnataka, India.",
      cost: "1,100",
      duration: "Approx 1 hour",
    },
    {
      image: tanniru,
      title: "Tannirbhavi beach",
      subTitle: "Tannirbhavi beach is a beach in Mangalore, Karnataka, India. It is one of the most popular tourist destinations in coastal Karnataka. Along with the beach, Sultan Battery, Tannirbavi Tree Park & the proposed Marine museum are also the tourist attractions. It can be reached either by land near Kuloor Bridge or by ferry via Gurupura river from Sultan Battery.",
      cost: "3,400",
      duration: "Approx 3 hours",
    },
    {
      image: aloysius,
      title: "St. Aloysius Chapel",
      subTitle: "St. Aloysius Chapel, (Italian: Cappella di San Luigi, Portuguese: São Luís Capela) or the chapel of St. Aloysius College, is a Catholic chapel in Mangalore in the state of Karnataka in southwest India. The Chapel is situated in the heart of the city on the Lighthouse Hill.",
      cost: "1,800",
      duration: "Approx 1 hour",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Recommend</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => setActive(index + 1)}>
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="recommendationBox">
        {data.map((item) => {
          return (
            <div className="box">
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              <div className="price">
                <div>
                  <img src={info1} alt="image" />
                  <img src={info2} alt="image" />
                  <img src={info3} alt="image" />
                </div>

                <p>₹{item.cost}</p>
              </div>

              <div className="details">
                <p>12 kms</p>
                <p>{item.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
