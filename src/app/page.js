"use client";

import orar3211b from "../components/orar/orar3211b.json";
import orar3211a from "../components/orar/orar3211a.json";
import { useEffect, useState } from "react";
var deferredPrompt;
var installed = false;
export default function Orar() {
  const date = new Date();
  const zile = [
    { id: "luni", text: "Luni" },
    { id: "marti", text: "Marti" },
    { id: "miercuri", text: "Miercuri" },
    { id: "joi", text: "Joi" },
    { id: "vineri", text: "Vineri" },
  ];
  var [orarJ, changeOrar] = useState(JSON.parse(JSON.stringify(orar3211b)));
  var [ziua, changeZi] = useState(() => {
    if (date.getDay() > 5 || date.getDay()=== 0 ) {
      return "vineri";
    } else {
      return zile[date.getDay() - 1];
    }
  });
  var [week, changeWeek] = useState(() => {
    var startDate = new Date(date.getFullYear(), 3, 29);
    var days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
    return Math.ceil(days / 7) + 8;
  });
  let cursuri = orarJ[ziua];
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });
    if (
      window.navigator.standalone ||
      window.matchMedia("(display-mode: standalone)").matches
    ) {
      installed = true;
    } else {
      installed = false;
    }

    cursuri = orarJ[ziua];
  }, [ziua, orarJ]);
  // var [cursuri, changeCurs] = useState(orarJ[ziua]);
  return (
    <>
      <div className="flex justify-evenly items-center flex-wrap ">
          {/* Orar Selection */}
          <select
            className="bg-white text-black dark:bg-slate-800 dark:text-white hover:bg-slate-100 hover:text-black w-20 h-7 text-lg border-none rounded-md m-5"
            name="selectOrar"
            onChange={(e) => {
              changeOrar((orarJ = JSON.parse(e.target.value)));
            }}
          >
            <option value={JSON.stringify(orar3211b)}>3211b</option>
            <option value={JSON.stringify(orar3211a)}>3211a</option>
          </select>
          {/* Display Sapt */}
          <h2 className="w-26 h-7 text-lg  bg-white text-black dark:bg-slate-800 dark:text-white ">
            Sapt: {week}
          </h2>
          {/* Display Install button */}
          {!installed && (
            <button
              onClick={() => {
                try {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === "accepted") {
                      console.log("User accepted the install prompt");
                    } else {
                      console.log("User dismissed the install prompt");
                    }
                  });
                } catch (err) {
                  console.log(err);
                }
              }}
              className="w-26 h-7 text-lg hover:bg-slate-100 hover:text-black rounded-lg px-2 bg-white text-black dark:bg-slate-800 dark:text-white"
            >
              Install app
            </button>
          )}
          {/* Day Selection */}
          <select
            className="bg-white text-black dark:bg-slate-800 dark:text-white hover:bg-slate-100 hover:text-black w-26 h-7 text-lg border-none rounded-md m-5"
            name="selectZi"
            id="daySelection"
            onChange={(e) => {
              changeZi((ziua = e.target.value));
            }}
          >
            <option value={ziua}>{ziua}</option>
            {zile.map((zi, index) => (
              <option value={zi.id} key={index}>
                {zi.text}
              </option>
            ))}
          </select>
        </div>
        {/* Orar Display */}
        <div className="flex flex-row flex-wrap justify-evenly items-center m-3 bg-white text-black dark:bg-slate-800 dark:text-white">
          {cursuri?.map((curs, index) => {
            if (week % 2 & (curs.special == "1")) {
              return (
                <div
                  key={index}
                  className=" w-50 h-30 overflow-visible flex justify-center items-center m-10  outline-offset-4 outline-dashed outline-gray-600 outline-4 "
                >
                  <label htmlFor="cursuri" className="m-2">
                    <h3>
                      <b>
                        {curs.ora} - {curs.ora + curs.lungime}
                      </b>
                    </h3>
                  </label>
                  <ul type="" className="m-2">
                    <li>{curs.ce}</li>
                    <li>{curs.tip}</li>
                    <li>{curs.unde}</li>
                  </ul>
                </div>
              );
            } else if ((week % 2 == 0) & (curs.special == "2")) {
              return (
                <div
                  key={index}
                  className=" w-50 h-30 overflow-visible flex justify-center items-center m-10  outline-offset-4 outline-dashed outline-gray-600 outline-4 "
                >
                  <label htmlFor="cursuri" className="m-2">
                    <h3>
                      <b>
                        {curs.ora} - {curs.ora + curs.lungime}
                      </b>
                    </h3>
                  </label>
                  <ul type="" className="m-2">
                    <li>{curs.ce}</li>
                    <li>{curs.tip}</li>
                    <li>{curs.unde}</li>
                  </ul>
                </div>
              );
            } else if (curs.special == "0") {
              return (
                <div
                  key={index}
                  className=" w-50 h-30 overflow-hidden flex justify-center items-center m-10  outline-offset-4 outline-dashed outline-gray-600 outline-4 "
                >
                  <label htmlFor="cursuri" className="m-2">
                    <h3>
                      <b>
                        {curs.ora} - {curs.ora + curs.lungime}
                      </b>
                    </h3>
                  </label>
                  <ul type="" className="m-2 ">
                    <li>{curs.ce}</li>
                    <li>{curs.tip}</li>
                    <li>{curs.unde}</li>
                  </ul>
                </div>
              );
            }
          })}
        </div>
    </>
  );
}
