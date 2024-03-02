import React from "react";

import Classes from "../Styles/Testimonials.module.css";

import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section id="testimonials" className={Classes.testimonials}>
      <h1>Happy Customers</h1>

      <div className={Classes.boxContainer}>
        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
            S P travel has such a user-friendly website.It had many blogs that
             helped me to choose the best destination. Easy to navigate,
            search and fiddle with dates instead of having to call up. Once
            decided, the booking process was swift and easy, thank you.
          </p>

          <div className={Classes.info}>
            <img src={avatar} alt="image" />
            <div>
              <h3>Ravi Kumar</h3>
              <span>Engineer</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <p>
            Great communication.Had all the information needed for me to book my plan.
             This was a rushed booking and she was very
            helpful/prompt with calls/replies to ensure we could have preferred
            dates.
          </p>

          <div className={Classes.info}>
            <img src={avatar2} alt="image" />
            <div>
              <h3>Sharath Dsouza</h3>
              <span>SalesMan</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
            The blogs were awesome and legit ,loved it.
            I must say the service we received from this company was amazing and
            would recommend them to anyone to trust and use them the rewards you
            get with your holidays are just fantastic.
          </p>

          <div className={Classes.info}>
            <img src={avatar3} alt="image" />
            <div>
              <h3>Sujith</h3>
              <span>Police</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
