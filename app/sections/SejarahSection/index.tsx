"use client";

import MaknaAsli from "./MaknaAsli";
import TerbentuknyaZavetoria from "./TerbentuknyaZavetoria";
import ZavetoriaBoys from "./ZavetoriaBoys";
import BerpencarImpian from "./BerpencarImpian";

export default function SejarahSection() {
  return (
    <section className="snap-end h-screen w-full bg-white" id="sejarah">
      <div className="w-full h-full relative p-10 bg-red-500">
        {/* Section 1: Makna Asli Zavetoria */}
        <MaknaAsli className={`atranscenter z-[4]`} />

        {/* Section 2: Terbentuknya Zavetoria */}
        {/* <TerbentuknyaZavetoria className={`atranscenter z-[3]`} /> */}

        {/* Section 3: Zavetoria Boys */}
        {/* <ZavetoriaBoys className={`atranscenter z-[2]`} /> */}

        {/* Section 4: Berpencar Mengejar Impian */}
        {/* <BerpencarImpian className={`atranscenter z-[1]`} /> */}
      </div>
    </section>
  );
}
