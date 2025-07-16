import { useState } from "react";
import Navbar from "../components/Navbar";
import ServiceItem from "../components/ServiceItem";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const servicesData = {
  Coiffure: [
    {
      title: "Lissage",
      description: "Des cheveux lisses, soyeux et brillants.",
      price: 2500,
      image: "/images/lissage.jpg",
    },
    {
      title: "Teinture",
      description: "Mettez en valeur votre style avec nos colorations.",
      price: 3000,
      image: "/images/teinture.jpg",
    },
    {
      title: "Coiffure 3D",
      description: "Effet volume et modernité assurés.",
      price: 4000,
      image: "/images/coifure3d.jpg",
    },
    {
      title: "Coiffure simple",
      description: "Un look naturel et élégant.",
      price: 1500,
      image: "/images/coifuresimple.webp",
    },
  ],
  Maquillage: [
    {
      title: "Maquillage soirée",
      description: "Pour briller en toutes occasions.",
      price: 3500,
      image: "/images/maquillagesoire.jpg",
    },
    {
      title: "Extension de cils",
      description: "Un regard profond et naturel.",
      price: 2000,
      image: "/images/extensioncil.jpg",
    },
    {
      title: "Maquillage du jour",
      description: "Discret et naturel pour la journée.",
      price: 2500,
      image: "/images/maquillagedujour.webp",
    },
  ],
  Onglerie: [
    {
      title: "Extension des ongles",
      description: "Des ongles longs et résistants.",
      price: 3000,
      image: "/images/extentiondesongles.avif",
    },
    {
      title: "Vernis semi-permanent",
      description: "Tenue parfaite, couleur éclatante.",
      price: 2500,
      image: "/images/vernis_semipermanant.jpg",
    },
    {
      title: "Vernis permanent",
      description: "Une tenue longue durée impeccable.",
      price: 2800,
      image: "/images/vernis_permanant.jpg",
    },
  ],
  Épilation: [
    {
      title: "Épilation jambes",
      description: "Douceur et netteté garantie.",
      price: 2000,
      image: "/images/epilationdejambes.jpeg",
    },
    {
      title: "Épilation visage",
      description: "Fini les poils indésirables.",
      price: 1500,
      image: "/images/epilationfacial.jpg",
    },
    {
      title: "Épilation complète",
      description: "Pour un résultat parfait de la tête aux pieds.",
      price: 4500,
      image: "/images/epilationcomplete.webp",
    },
  ],
};

function Services() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);

  const handleSelect = (category, service) => {
    const exists = selectedServices.find(
      (s) => s.title === service.title && s.category === category
    );
    if (exists) {
      setSelectedServices(
        selectedServices.filter(
          (s) => !(s.title === service.title && s.category === category)
        )
      );
    } else {
      setSelectedServices([...selectedServices, { ...service, category }]);
    }
  };

  const totalPrice = selectedServices.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  const handleConfirm = () => {
    const selectedNames = selectedServices.map((s) => s.title).join(", ");
    navigate(
      `/reservation?services=${encodeURIComponent(
        selectedNames
      )}&total=${totalPrice}`
    );
  };

  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center text-gray-800">
      <Navbar />
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {Object.entries(servicesData).map(([category, services]) => (
          <div key={category} className="mb-14">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 border-b-2 border-pink-400 pb-2">
              {category}
            </h2>

            <div className="flex flex-wrap md:flex-nowrap gap-6 md:overflow-x-auto md:scrollbar-hide px-2 pb-4">
              {services.map((service) => (
                <ServiceItem
                  key={service.title}
                  {...service}
                  onSelect={() => handleSelect(category, service)}
                  isSelected={selectedServices.some(
                    (s) => s.title === service.title && s.category === category
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 py-4 px-6 flex justify-between items-center border-t border-pink-300">
        <p className="text-lg font-semibold text-gray-900">
          Total : {totalPrice.toLocaleString()} DA
        </p>
        <button
          onClick={handleConfirm}
          className="bg-pink-500 text-white px-6 py-2 rounded-xl hover:bg-pink-600 transition"
        >
          Confirmer ma sélection
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
