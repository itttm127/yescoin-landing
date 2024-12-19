import AirdropComponent from "@/components/Airdrop";
import BannerComponent from "@/components/Banner";
import BestComponent from "@/components/Best";
import CashoutComponent from "@/components/Cashout";
import CounterComponent from "@/components/Counter";
import FaqComponent from "@/components/FAQ";
import Container from "@/components/layout/container";
import ProviderComponent from "@/components/Provider";
import RoadmapComponent from "@/components/Roatmap";

export default function Home() {
  return (
    <div className="w-full">
      <Container>
        {/* Banner */}
        <BannerComponent />

        {/* Airdrop */}
        <AirdropComponent />
      </Container>

      {/* Provider */}
      <ProviderComponent />

      <Container>
        {/* Counter */}
        <CounterComponent />

        {/* Best */}
        <BestComponent />

        {/* Roadmap */}
        <RoadmapComponent />

        {/* CashoutComponent */}
        <CashoutComponent />

        {/* Faq */}
        <FaqComponent />
      </Container>

    </div>
  );
}
