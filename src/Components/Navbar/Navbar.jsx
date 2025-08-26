import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-900 p-4 sticky top-0 z-50">
        <div className="bg-black text-green-400 font-mono text-lg p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <p className="mb-2 text-gray-400">dev@project:~$</p>
          <p>
            $ git commit -m{" "}
            <span className="text-yellow-300">
              "Project in progress... don't judge 😅"
            </span>
          </p>
        </div>
      </div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>Tulasi Wear</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            Shop {menu === "shop" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            Men {menu === "mens" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            Women {menu === "womens" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            Kids {menu === "kids" && <hr />}
          </li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
