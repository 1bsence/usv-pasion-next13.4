const mate = new Date(2023, 6, 22);
const pclp2 = new Date(2023, 6, 29);
const arca = new Date(2023, 7, 3);
const coomunicare = new Date(2023, 6, 14);
const engleza = new Date(2023, 6, 13);
export default function Examene() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <ExaCom examen={mate}/>
        <ExaCom examen={pclp2}/>
        <ExaCom examen={arca}/>
        <ExaCom examen={coomunicare}/>
        <ExaCom examen={engleza}/>
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

export function ExaCom({examen}){
  return (
    <div className="flex justify-evenly m-3 p-2 border border-dotted border-cyan-700 bg-slate-900">
      <label className="m-2 text-lg">Mate:</label>
      <ul>
        <li>Zile: {timp(examen).zile}</li>
        <li>Ore: {timp(examen).ore}</li>
        <li>Minute: {timp(examen).minute}</li>
        <li>Secunde: {timp(examen).secunde}</li>
      </ul>
    </div>
  );
}
