import logo from "./logo.svg";
import React, { useContext, useState, useEffect, useRef } from "react";
import './header.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Ctx } from "./App";

export default function Header() {
   const ref = useRef();
   const [date, setDate] = useState(new Date());
   const [active, setActive] = useState(false);
   const received = useContext(Ctx);
   const mode = received[0];
   const setMode = received[1];

   useEffect(() => {
      active && (ref.current = setInterval(() => setDate(new Date()), 1000));
      return () => clearInterval(ref.current);
   }, [active, date]);

   const changingMode = () => (mode === 0 ? setMode(1) : setMode(0));

   return (
      <header
         id={"header_" + mode}
         className="d-flex align-items-center justify-content-around m-0 p-0 text-center border-bottom"
      >
         <img src={logo} id="react-logo" alt="logo" />
         <h1 id='title'> React Hooks </h1>
         <button
            id={"switcher_" + mode}
            onClick={() => changingMode()}
            className="square_btn35"
         >
            {mode === 0 ? "light" : "dark"}
         </button>
         <details id="current_time">
            <summary onClick={() => setActive(!active)}>current time:</summary>
            <time>{active && date.toLocaleTimeString()}</time>
         </details>
      </header>
   );
}
