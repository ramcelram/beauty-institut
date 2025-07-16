import { useEffect, useState } from "react";

function WelcomeOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[url('/images/background.png')] bg-cover bg-center">
      <div className="bg-white/50 backdrop-blur-lg rounded-3xl p-12 shadow-xl text-center animate-fade">
        <h1 className="text-4xl font-bold text-pink-500 font-playfair">
          Bienvenue chez Celina Beauty Queen
        </h1>
      </div>
    </div>
  );
}

export default WelcomeOverlay;
