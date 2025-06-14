export default function Hero() {
  return (
    <section className="pt-16  pb-32 flex flex-col items-center justify-center text-center px-4 bg-transparent">
      <img
        src="/profile.jpg"
        alt="Fernando portrait"
        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mb-6 shadow-md"
      />

      <h1 className={`font-lustria text-[36px] md:text-[48px] mb-4`}>
        Fernando Contreras
      </h1>

      <p className="font-satoshi max-w-xl text-[24px] md:text-xl text-gray-700">
        Full-stack developer crafting performant, scalable apps with clean code and thoughtful design.
      </p>
    </section>
  );
}
