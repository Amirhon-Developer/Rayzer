import React from "react";
import "../servise/Servise.css";
import Footer from "../../footer/Footer";
export default function Services() {
  return (
    <div>
      <div className="nv">
        <h2> Our Telegram channel. You can see all orders here. Telegram </h2>
      </div>
      <div className="ser-div1">
        <h1>RAZER SERVICES</h1>
        <h5>
          If you have any questions about our products or Razer.com in general,
          please contact us here. <br />
          <br />
          If there is any defect or problem with the products supplied by
          Razer.com, please contact us by Email! And we will give you the help
          we can. If there is any defect or error in our product, we will
          provide you with a new product free of charge. <br />
          <br />
          Send us your email address from the input below and write down the
          problem!
        </h5>
      </div>
      <div className="ser-div2">
        <h1>Contact us</h1>

        <div className="input1">
          <input placeholder="Your name" type="text" />
          <input placeholder="Your email" type="text" />
          <input placeholder="Message" type="text" />
          <button>Send</button>
        </div>
      </div>
      <div className="ser-div3">
        <div>
          <h1>RAZERCARE</h1>
          <p>
            Protect your Razer gear with RazerCare—includes extended warranty
            that covers both mechanical and electrical issues due to normal
            product usage.
          </p>
          <h3> Learn More </h3>
        </div>
      </div>
      <div className="ser-div4">
        <div>
          <h1>RAZER ID</h1>
          <p>
            Gain a competitive advantage and leverage on our support, expertise
            and community with your Razer ID. Integrated with Razer's services
            and software, you can gain access to tons of tools with your Razer
            ID—including buying the best gamer gear on our site, redeeming Razer
            Silver, saving your personalized configs in Synapse, and more.
          </p>
          <h3> Learn More </h3>
        </div>
      </div>
      <div className="orasi"></div>
      <Footer />
    </div>
  );
}
