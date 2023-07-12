import React from "react";
import "../store/Store.css";
import { HashLink } from "react-router-hash-link";

export default function Store() {
  return (
    <div>
      <div className="nv">
        <h2> Our Telegram channel. You can see all orders here. Telegram </h2>
      </div>
      <div className="sto-obw">
        <div className="store-div1">
          <div className="laptop">
            <img
              src="https://razer-shop.netlify.app/static/media/Laptop.d5c74f1ada69752ebf4a.png"
              alt=""
            />
            <HashLink smooth to="/path#">
              <h1>Laptops</h1>
            </HashLink>
            ;
          </div>
          <div className="laptop">
            <img
              src="https://razer-shop.netlify.app/static/media/Mice.4dc6e8d4c1c2e7c1a850.png"
              alt=""
            />
            <HashLink smooth to="/path#">
              <h1>Mice</h1>
            </HashLink>
          </div>
          <div className="laptop">
            <img
              src="https://razer-shop.netlify.app/static/media/Keyboards.cc6728540732d34de418.png"
              alt=""
            />
            <HashLink smooth to="/path#">
              <h1>Keyboards</h1>
            </HashLink>
          </div>
          <div className="laptop">
            <img
              src="https://razer-shop.netlify.app/static/media/Headsets.055c7381a2db316c6b06.png"
              alt=""
            />
            <HashLink smooth to="/path#">
              <h1>Headsets</h1>
            </HashLink>
          </div>
          <div className="laptop">
            <img
              src="https://razer-shop.netlify.app/static/media/stream.eac9b2d0384dfb7ddb48.png"
              alt=""
            />
            <HashLink smooth to="/path#">
              <h1>Streaming</h1>
            </HashLink>
          </div>
          <div className="laptop">
            <img
              src="https://razer-shop.netlify.app/static/media/Chairs.4374138c3b8091b28574.png"
              alt=""
            />
            <HashLink smooth to="/path#">
              <h1>Chairs</h1>
            </HashLink>
          </div>
          <div className="laptop">
            <img
              src="https://razer-shop.netlify.app/static/media/c-mobile.02115c644944a6e01634.png"
              alt=""
            />
            <HashLink smooth to="/path#">
              <h1>Console</h1>
            </HashLink>
          </div>
          <div className="laptop">
            <img
              src="https://razer-shop.netlify.app/static/media/console.222c8f89eb05c3c6d219.png"
              alt=""
            />
            <HashLink smooth to="/path#">
              <h1>Mobile</h1>
            </HashLink>
          </div>
          <div className="laptop">
            <img
              src="https://razer-shop.netlify.app/static/media/Gear.3497e9ce0031c997e830.png"
              alt=""
            />
            <HashLink smooth to="/path#">
              <h1>Gear</h1>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
// //import React from 'react'
// import {Link} from 'react-router-dom'
// import '../section2/Section2.css'
// import Products from '../../products/Products'

// const Section2 = () => {

//   const data = Products.filter(el => el.category === "bussines")

//   return (
//     <div className='mt-5'>
//       <h2 className='p-5'>Бизнес-класс</h2>

//                <div className='card-rows'>
//         {data.map((el) => {
//           return (
//             <div>
//               <div className='cards-menu d-flex w-100'>
//                <Link to={${el.id}}>
//                 <div className="cardPc">
//                   <p className='text-primary'>{el.namePc}</p>
//                   <div className="card-img">
//                     <img src={el.img} alt="img" />
//                   </div>
//                   <div className="card-body">
//                     <p>{el.screen}</p>
//                     <p>{el.processor}</p>
//                     <p>{el.videcard}</p>
//                     <div className='card-icon-effect d-flex align-items-center justify-content-between'>
//                 <span className='text-primary'>{el.price}</span>
//                 <i class="fa-sharp fa-solid fa-cart-shopping"></i>
//                 </div>
//                 <div className='line-need'></div>
//                   <div className=''>

//                   </div>
//                   </div>
//                 </div>
//                 </Link>
//               </div>
//             </div>
//           );
//         })}

//       </div>

//     </div>
//   )
// }

// export default Section2
