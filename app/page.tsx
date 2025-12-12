import HeroSection from "./sections/HeroSection";
import SejarahSection from "./sections/SejarahSection";
import MembersSection from "./sections/MembersSection";
import MemoriesSection from "./sections/MemoriesSection";
import PrayerSection from "./sections/PrayerSection";

export default function Home() {
  return (
    <div
      className={`
        h-screen
        overflow-y-scroll 
        bg-main
        snap-y snap-mandatory
      `}
    >
      {/* Hero Section - Welcome & Identity */}
      <HeroSection />

      {/* Sejarah Section - Background & Context */}
      <SejarahSection />

      {/* Members Section - 22 Alumni Showcase */}
      {/* <MembersSection /> */}

      {/* Memories Section - Core Stories (INTI) */}
      {/* <MemoriesSection /> */}

      {/* Prayer Section - Spiritual Connection */}
      {/* <PrayerSection /> */}

      {/* Footer will be added later */}
    </div>
  );
}
