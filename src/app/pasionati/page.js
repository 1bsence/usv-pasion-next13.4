"use client";
import Head from "next/head";
import { useState } from "react";

import Popovici from "../../components/pasionati/popovici.js";
import Felea from "../../components/pasionati/felea.js";
import Vornicu from "../../components/pasionati/vornicu.js";
import Lior from "../../components/pasionati/lior.js";
import Casian from "../../components/pasionati/casian.js";
import Vadim from "../../components/pasionati/vadim.js";
import Madalina from "../../components/pasionati/madalina.js";
import Ionel from "../../components/pasionati/ionel.js";

export default function Poponari() {
  const poponari = [
    { id: "popovici", text: "Popovici" },
    { id: "felea", text: "Felea" },
    { id: "vornicu", text: "Vornicu" },
    { id: "lior", text: "Lior" },
    { id: "casian", text: "Casian" },
    { id: "vadim", text: "Vadim" },
    { id: "madalina", text: "Madalina" },
    { id: "ionel", text: "Ionel" },
  ];
  var [selected, setSelected] = useState("");
  return (
    <>
      <Head>
        <title>Pasionati</title>
      </Head>
      <div className="flex flex-col items-center">
        <select
          name=""
          id=""
          className="bg-white text-black dark:bg-slate-800 dark:text-white  w-26 h-7 text-lg border-none  rounded-md m-5"
          onChange={(e) => {
            setSelected((selected = e.target.value));
          }}
        >
          <option value="">Select Pasionat</option>
          {poponari.map((popo, index) => (
            <option value={popo.text} key={index}>
              {popo.text}
            </option>
          ))}
        </select>
        {selected == "Popovici" && <Popovici />}
        {selected == "Felea" && <Felea />}
        {selected == "Vornicu" && <Vornicu />}
        {selected == "Vadim" && <Vadim />}
        {selected == "Lior" && <Lior />}
        {selected == "Casian" && <Casian />}
        {selected == "Madalina" && <Madalina />}
        {selected == "Ionel" && <Ionel />}
      </div>
    </>
  );
}
