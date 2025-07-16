import { useNavigate } from "react-router-dom";

function HeroCard({ title, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-2xl shadow-lg overflow-hidden
                 max-w-xs w-full
                 transition-transform transform hover:scale-105
                 bg-gradient-to-br from-pink-100/80 to-pink-300/60
                 border border-pink-300
                 text-gray-900
                 flex flex-col items-center"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-t-2xl"
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="font-bold text-2xl tracking-wide text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default HeroCard;
