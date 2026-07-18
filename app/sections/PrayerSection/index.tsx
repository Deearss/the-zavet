export default function PrayerSection() {
  return (
    <section
      className={`
        min-h-screen
        bg-dark
        py-16 md:py-24
        px-4 md:px-8
      `}
    >
      <div
        className={`
          max-w-6xl 
          mx-auto
        `}
      >
        <div
          className={`
            text-center
            mb-12
          `}
        >
          <h2
            className={`
              text-3xl md:text-5xl lg:text-6xl
              font-[family-name:var(--font-heading)]
              font-bold
              text-text_light
              mb-4
            `}
          >
            Doa Bersama
          </h2>
          <p
            className={`
              text-base md:text-lg
              font-[family-name:var(--font-body)]
              text-text_light
              opacity-80
            `}
          >
            Kumpulan Doa dan Harapan dari Hati
          </p>
        </div>

        {/* Prayer collection will be implemented here */}
        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-6 md:gap-8
          `}
        >
          {/* Prayer cards placeholder */}
          <div
            className={`
              bg-light
              rounded-lg
              p-6
              text-center
              h-48
              flex items-center justify-center
              text-text_primary
              opacity-50
            `}
          >
            Prayer Collection Coming Soon...
          </div>
        </div>

        {/* Category filters placeholder */}
        <div
          className={`
            flex justify-center
            mt-12
            gap-4
            flex-wrap
          `}
        >
          {["friendship", "success", "reunion", "blessing", "guidance"].map(
            (category) => (
              <button
                key={category}
                className={`
                px-4 py-2
                bg-primary
                text-text_light
                rounded-lg
                opacity-50
                capitalize
              `}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
