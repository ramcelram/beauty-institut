function ServiceCard({ title, price, description }) {
  return (
    <div className="bg-white/80 rounded-xl p-6 shadow-lg w-64 text-gray-800">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <p className="text-lg font-semibold">{price} DA</p>{" "}
      {/* DA pour dinar algérien */}
    </div>
  );
}

export default ServiceCard;
