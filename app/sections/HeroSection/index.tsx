export default function HeroSection() {
  return (
    <section
      style={{ backgroundImage: "url(images/hero_image.jpg)" }}
      className={`
        snap-center
        h-screen
        bg-cover bg-center
        relative overflow-hidden
      `}
    >
      <div className="h-full w-full relative flexc bg-black/90">
        <div
          className={`
          text-center 
          z-10
        `}
        >
          <h1
            className={`
            text-4xl md:text-6xl lg:text-6xl
            font-bold font-alexandria
            mb-4
          `}
          >
            <span className="text-white">Zavetoria</span>
            <span className="text-primary">Boys</span>
            <span className="text-white">.</span>
          </h1>
          <p
            className={`
            text-lg md:text-3xl lg:text-3xl
            font-[family-name:var(--font-body)]
            text-white
            font-semibold
            opacity-80
          `}
          >
            Laksana Kemenangan
          </p>
        </div>

        {/* Floating elements will be added here */}
        <div
          className={`
            absolute 
            w-full h-full bottom-0 left-0
            pointer-events-none
            bg-gradient-to-t from-primary/40 to-transparent
            `}
        />

        {/* Background decorations placeholder */}
      </div>
    </section>
  );
}
