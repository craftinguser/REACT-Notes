import React from "react";
import "../style/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
   
      <div className="about-container">
        <header className="about-header">
          <h1>About Food Caravan</h1>
          <p>Your gateway to the finest cuisines, delivered to your doorstep.</p>
        </header>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Food Caravan, we are passionate about bringing people closer to the food
            they love. Whether it’s local delicacies, international flavors, or your
            favorite comfort food, we make sure it’s just a click away.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Extensive range of restaurants and cuisines to choose from.</li>
            <li>Fast and reliable delivery services.</li>
            <li>Easy-to-use platform with secure payment options.</li>
            <li>Exclusive offers and discounts to make your meals even better.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Food Caravan started with a simple idea: to connect people with great food.
            Over the years, we’ve partnered with thousands of restaurants and served
            millions of happy customers. Our journey is fueled by a love for food and
            a desire to make dining experiences memorable.
          </p>
        </section>

        <footer className="about-footer">
          <p>© {new Date().getFullYear()} Food Caravan. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
