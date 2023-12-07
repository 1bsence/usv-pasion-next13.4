"use client";

import { ExaCom } from "./ExaCom";

const SDED = new Date(2024, 1, 30);
const pclp3 = new Date(2024, 2, 13);
const fiz2 = new Date(2024, 1, 27);
const sup = new Date(2024, 2,5);
const ts = new Date(2024, 2,9);
const cel1 = new Date(2024, 2,16);
export default function Examene() {
  return (
    <>
      <div className="flex justify-evenly items-center flex-wrap">
        <ExaCom examen={SDED} text="SDED" />
        <ExaCom examen={ts} text="TS" />
        <ExaCom examen={pclp3} text="PCLP3"/>
        <ExaCom examen={fiz2} text="FIZ2" />
        <ExaCom examen={sup} text="SuP" />
        <ExaCom examen={cel1} text="CEL1" />
      </div>
    </>
  );
}
