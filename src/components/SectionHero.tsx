import Arrow from "@/assets/arrow-explorer.svg";
import ImageAppleStore from "@/assets/btn-apple-store.svg";
import ImageGooglePlay from "@/assets/btn-google-play.svg";
import WomanImage from "@/assets/woman.png";
import Image from "next/image";
import { Container } from "./Container";

export function SectionHero() {
  return (
    <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-white font-bold text-7xl mb-3">
            Tenha seu banco na palma da mão
          </h1>
          <p className="text-white text-xl max-w-[408] mb-8">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito pra você.
          </p>
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={ImageAppleStore} alt="AppStore" />
            </button>
            <button>
              <Image src={ImageGooglePlay} alt="PlayStore" />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={Arrow} alt="ArrowExplorer" />
            <span className="text-white text-sm font-bold">
              Continue explorando
            </span>
          </button>
        </div>
        <Image src={WomanImage} alt="mulher" className="mr-[-26px]" />
      </Container>
    </section>
  );
}
