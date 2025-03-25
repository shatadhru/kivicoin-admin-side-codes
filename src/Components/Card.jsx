function Card({
  title,
  value,
  Icon,
  color_container = "#fff",
  color_icon_container = "#ff9100",
}) {
  return (
    <div
      className="card_container flex justify-between items-center p-4 rounded-2xl shadow-lg h-[100px] lg:w-[80%]"
      style={{ backgroundColor: color_container }}
    >
      <div className="text_box flex flex-col justify-center">
        <h1 className="text-lg font-bold text-black">{title}</h1>
        <h1 className=" text-[30px] -m-t-2 text-white">{value}</h1>
      </div>
      <div
        className="icon_box flex justify-center items-center h-16 w-16 rounded-full"
        style={{ backgroundColor: color_icon_container }}
      >
        {Icon && <Icon size={26} color="#CCA049" />}
      </div>
    </div>
  );
}

export default Card;
