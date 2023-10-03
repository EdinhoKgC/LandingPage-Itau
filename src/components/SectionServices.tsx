import CardIcon from "@/assets/icon-card.svg";
import OptionIcon from "@/assets/icon-options.svg";
import PhoneIcon from "@/assets/icon-phone.svg";
import SolutionIcon from "@/assets/icon-solutions.svg";
import ImagePhone from "@/assets/phone.png";
import Image from "next/image";
import { Container } from "./Container";

export function SectionServices() {
  return (
    <section className=" relative w-full h-[965px] bg-gray-phone">
      <Container>
        <div className="flex-1  max-w-[594px] pt-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">
            Serviços exclusivos
          </span>
          <h2 className="text-primary-gray text-5xl font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[564px] mb-16 text-second-gray">
            Veja como você pode cuidar das suas finanças pelo app itaú de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </p>
          <ul className="flex flex-col items-start gap-9">
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <Image src={PhoneIcon} alt="Phone icon" />
              <p className="flex-1 text-txt-gray pr-2">
                Acompanhar sua conta, fazer transferências e pagamentos de onde
                estiver
              </p>
            </li>
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <Image src={SolutionIcon} alt="Phone icon" />
              <p className="flex-1 text-txt-gray pr-2">
                Soluções de emprestimos e renegociações para organizar saus
                finanças
              </p>
            </li>
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <Image src={OptionIcon} alt="Phone icon" />
              <p className="flex-1 text-txt-gray pr-2">
                Diversas opções de investimento, de acordo com seu perfil de
                investidor
              </p>
            </li>
            <li className="flex items-center gap-9 pb-9">
              <Image src={CardIcon} alt="Phone icon" />
              <p className="flex-1 text-txt-gray pr-2">
                Acompanhe a fatura do seu cartão de crédito e faça compras
                online com seu cartão virtual
              </p>
            </li>
          </ul>
        </div>
      </Container>
      <div className="absolute flex items-center top-0 right-0 w-[32%] h-full">
        <Image src={ImagePhone} alt="Phone" className="translate-x-[-50%]" />
      </div>
    </section>
  );
}
