import { SiGoogleearth } from "react-icons/si";
import { MdAutorenew, MdElectricalServices } from "react-icons/md";
import { RiWindyFill } from "react-icons/ri";
import { FaLightbulb, FaPaw } from "react-icons/fa";

// Mapeamento de ícones
const iconMap = {
  SiGoogleearth: <SiGoogleearth />,
  MdAutorenew: <MdAutorenew />,
  RiWindyFill: <RiWindyFill />,
  MdElectricalServices: <MdElectricalServices />,
  FaLightbulb: <FaLightbulb />,
  FaPaw: <FaPaw />,
};

// Componente BeneficioCard
export default function BeneficioCard({ id, titulo, descricao, icone }) {
  return (
    <div className="flex flex-col items-center text-center bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 text-green-600 text-4xl">
        {iconMap[icone] || null}
      </div>
      <h3 className="text-slate-50 text-lg font-semibold mb-2">{titulo}</h3>
      <p className="text-gray-400 text-sm">{descricao}</p>
    </div>
  );
}
