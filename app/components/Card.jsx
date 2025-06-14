export default function Card({
  title,
  description,
  image,
  bgColor = "bg-white",
  stats = [],
  buttons = [],
}) {
  return (
    <div
  className={`w-full h-full rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center ${bgColor}`}
>

      <div className="flex flex-col justify-between max-w-[600px] h-full">
        <h2 className="text-[30 px] font-satoshi text-3xl font-bold mb-4">{title}</h2>
        <p className="font-satoshi text-[20px] text-base mb-4">{description}</p>

        {stats.length > 0 && (
          <div className="flex gap-6 mb-4">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <span className="font-satoshi text-sm text-gray-600">
                  {stat.label}
                </span>
                <br />
                <span className="font-satoshi text-lg font-semibold">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {buttons.length > 0 && (
          <div className="flex gap-4 mt-auto">
            {buttons.map((btn, idx) => (
              <button
                key={idx}
                className="font-satoshi px-4 py-2 bg-black text-white rounded-full hover:opacity-85 transition"
                onClick={btn.onClick}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
      </div>
       
       
      {image && (
        <div className="flex-1 h-[269px] mt-6 md:mt-0 md:ml-8">
          {/* If I want width its w-[478px]  */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
