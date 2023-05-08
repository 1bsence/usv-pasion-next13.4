import { ExaCom } from "./ExaCom";

const mate = new Date(2023, 6, 22);
const pclp2 = new Date(2023, 6, 29);
const arca = new Date(2023, 7, 3);
const coomunicare = new Date(2023, 6, 14);
const engleza = new Date(2023, 6, 13);
export default function Examene() {
  return (
    <>
      <div className="flex justify-evenly items-center flex-wrap">
        <ExaCom examen={mate} text="Mate" />
        <ExaCom examen={pclp2} text="PCLP2" />
        <ExaCom examen={arca} text="ARCA" />
        <ExaCom examen={coomunicare} text="COM" />
        <ExaCom examen={engleza} text="ENG" />
      </div>
    </>
  );
}
