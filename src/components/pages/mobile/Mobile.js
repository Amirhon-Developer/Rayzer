import "../mobile/Mobile.css";
import Footer from "../../footer/Footer";

const Mobile = () => {
  return (
    <div>
      <div className="nv">
        <h2> Our Telegram channel. You can see all orders here. Telegram </h2>
      </div>
      <div className="pc-div1">
        <h1>ENGINEERED FOR THE GAME, DESIGNED FOR LIFE</h1>
        <h5>
          This is freedom of play, redefined. Our mobile gaming and lifestyle
          audio products are crafted to seamlessly integrate gaming into every
          aspect of your life.
        </h5>
      </div>
      <div className="mob-div1">
        <h1>RAZER EDGE</h1>
        <h2>The Ultimate Android Gaming Handheld</h2>
        <h3>Learn More </h3>
      </div>
      <div className="pc-div5">
        <div className="container">
          <div className="display-card">
            <div className="pc-card4">
              <img
                src="https://razer-shop.netlify.app/static/media/iphone.13ece4ea997fd66f9fd2.jpg"
                alt=""
              />
              <div className="blu">
                <h1>RAZER KISHI V2 FOR IPHONE </h1>
                <h5>
                  Make your move with our award-winning universal mobile
                  controller that fits most smartphone devices, designed to
                  bring console-level control and comfort to your on-the-go
                  gaming.
                </h5>
                <p> Learn more</p>
              </div>
            </div>
            <div className="pc-card4">
              <img
                src="https://razer-shop.netlify.app/static/media/android.d268e8bce7dcefe7f19b.jpg"
                alt=""
              />
              <div className="blu">
                <h1>RAZER KISHI V2 FOR ANDROID </h1>
                <h5>
                  Make your move with our award-winning universal mobile
                  controller that fits most smartphone devices, designed to
                  bring console-level control and comfort to your on-the-go
                  gaming.
                </h5>
                <p> Learn more</p>
              </div>
            </div>
            <div className="pc-card4">
              <img
                src="https://razer-shop.netlify.app/static/media/kishi.a3af1219ca17ee677674.jpg"
                alt=""
              />
              <div className="blu">
                <h1>RAZER KISHI </h1>
                <h5>
                  Make your move with our award-winning universal mobile
                  controller that fits most smartphone devices, designed to
                  bring console-level control and comfort to your on-the-go
                  gaming.
                </h5>
                <p> Learn more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="mob-div2">
        <h1>GO THE EXTRA MILE</h1>
        <h5>
          When you’re filling those few minutes in line at the coffee shop or
          commuting to work with a quick game or listening to that banger on
          repeat, Razer has the accessory that lets fellow gamers know they’re
          among their own.
        </h5>
        <p>Learn More </p>
      </div>

      <div className="pc-div5">
        <div className="container">
          <div className="display-card">
            <div className="pc-card4">
              <img
                src="https://razer-shop.netlify.app/static/media/m-case.19a2ca51d2cec42dbc72.jpg"
                alt=""
              />
              <div className="blu">
                <h1>RAZER ARCTECH CASES </h1>
                <h5>Universal Mobile Gaming Controller for iPhone</h5>
                <p> Learn more</p>
              </div>
            </div>
            <div className="pc-card4">
              <img
                src="https://razer-shop.netlify.app/static/media/m-wireless.4b3c374c2269c73165db.jpg"
                alt=""
              />
              <div className="blu">
                <h1>RAZER HAMMERHEAD TRUE </h1>
                <h5>Universal Mobile Gaming Controller for Android</h5>
                <p> Learn more</p>
              </div>
            </div>
            <div className="pc-card4">
              <img
                src="https://razer-shop.netlify.app/static/media/m-cooler.857e1f6419774cff32d9.png"
                alt=""
              />
              <div className="blu">
                <h1>RAZER PHONE COOLER CHROMA </h1>
                <h5>Smartphone Cooling Fan with Razer Chroma™ RGB</h5>
                <p> Learn more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <Footer />
    </div>
  );
};
export default Mobile;
