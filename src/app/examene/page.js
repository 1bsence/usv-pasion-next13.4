const mate = new Date(2023, 6, 22);
const pclp2 = new Date(2023, 6, 29);
const arca = new Date(2023, 7, 3);
const coomunicare = new Date(2023, 6, 14);
const engleza = new Date(2023, 6, 13);
export default function Examene() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <ExaCom examen={mate} text="Mate" />
        <ExaCom examen={pclp2} text="PCLP2" />
        <ExaCom examen={arca} text="ARCA" />
        <ExaCom examen={coomunicare} text="COM" />
        <ExaCom examen={engleza} text="ENG" />
      </div>
    </>
  );
}

function timp(examen) {
  const currDate = new Date();
  var delta = new Date(examen - currDate);
  return {
    zile: Math.floor((examen - currDate) / (24 * 60 * 60 * 1000)) - 29,
    ore: delta.getHours(),
    minute: delta.getMinutes(),
    secunde: delta.getSeconds(),
  };
}

export function ExaCom({ examen, text }) {
  return (
    <div className="flex justify-evenly m-3 p-2 border border-dotted border-cyan-700 bg-slate-900">
      <label className="m-2 text-lg">{text}:</label>
      <ul>
        <li>Zile: {timp(examen).zile}</li>
        <li>Ore: {timp(examen).ore}</li>
        <li>Minute: {timp(examen).minute}</li>
        <li>Secunde: {timp(examen).secunde}</li>
      </ul>
    </div>
  );
}
