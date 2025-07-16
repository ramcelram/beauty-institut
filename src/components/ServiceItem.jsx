function ServiceItem({
  title,
  description,
  price,
  image,
  onSelect,
  isSelected,
}) {
  return (
    <div
      onClick={onSelect}
      className={`
          cursor-pointer rounded-2xl shadow-lg overflow-hidden
          max-w-xs w-full
          transition-transform transform
          ${isSelected ? "scale-105 ring-4 ring-pink-400" : "hover:scale-105"}
          bg-gradient-to-br from-pink-100/80 to-pink-300/60
          border border-pink-300
          text-gray-900
          flex flex-col
        `}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-t-2xl"
        loading="lazy"
      />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2 tracking-wide">{title}</h3>
        <p className="text-sm text-gray-700 flex-grow">{description}</p>
        <p className="mt-4 font-semibold text-pink-700 text-lg">
          {price.toLocaleString()} DA
        </p>
      </div>
    </div>
  );
}

export default ServiceItem;
