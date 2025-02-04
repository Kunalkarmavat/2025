import { Button } from "@/components/ui/button";
import { Lexend_Giga, Noto_Traditional_Nushu } from "next/font/google";

const lexendGiga = Lexend_Giga({ weight: ["100", "900"], subsets: ["latin"] });
const notoNushu = Noto_Traditional_Nushu({ weight: ["400"], subsets: ["latin"] });

export const Navbar = () => {
  return (
    <nav className="flex px-48 m-auto justify-between items-center py-8 bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className={`text-4xl font-semibold`}>PRATISHRUTI.</div>
      <div className="flex gap-6">
        <Button variant="ghost" className="text-white text-base hover:text-purple-400 transition-colors">
          HOME
        </Button>
        <Button variant="ghost" className="text-white text-base hover:text-purple-400 transition-colors">
          EVENTS
        </Button>
        <Button variant="outline" className="rounded-3xl px-8 py-[1.4rem] text-white hover:bg-white/20 transition-colors text-base">
          BECOME A PARTNER
        </Button>
      </div>
    </nav>
  );
};
