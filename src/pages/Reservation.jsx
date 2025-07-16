import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Reservation() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const services = queryParams.get("services");
  const total = queryParams.get("total");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const note = e.target.note.value;

    const message = `Bonjour, je souhaite réserver les services suivants : ${services}
Total : ${total} DA
Nom : ${name}
Téléphone : ${phone}
Date : ${date}
Remarque : ${note}`;

    setTimeout(() => {
      window.open(
        `https://wa.me/213552753765?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gradient-to-br from-pink-100/80 to-pink-300/40 border border-pink-300 rounded-2xl shadow-xl p-8 text-gray-900 backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Réservation</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Nom et Prénom</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-pink-300 p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/90"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Numéro de téléphone</label>
              <input
                name="phone"
                type="tel"
                required
                className="w-full rounded-xl border border-pink-300 p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/90"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Date souhaitée</label>
              <input
                name="date"
                type="date"
                required
                className="w-full rounded-xl border border-pink-300 p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/90"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">
                Remarque / Description
              </label>
              <textarea
                name="note"
                rows="3"
                placeholder="(facultatif)"
                className="w-full rounded-xl border border-pink-300 p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/90 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600"
              } text-white py-3 rounded-xl font-semibold`}
            >
              {loading ? "Envoi en cours..." : "Confirmer ma réservation"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Reservation;
