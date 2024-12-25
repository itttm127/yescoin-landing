import {
  AirdropComponent,
  HeroComponent,
  BestComponent,
  CashoutComponent,
  Container,
  CounterComponent,
  FaqComponent,
  ProviderComponent,
  RoadmapComponent,
} from "@/components";

export default function HomePage() {
  return (
    <div className="w-full">
      <Container>
        <HeroComponent />
        <AirdropComponent />
      </Container>

      <ProviderComponent />

      <Container>
        <CounterComponent />
        <BestComponent />
        <RoadmapComponent />
        <CashoutComponent />
        <FaqComponent />
      </Container>
    </div>
  );
}
