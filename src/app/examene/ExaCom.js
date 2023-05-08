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
