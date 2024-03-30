import * as home from "@/app/(_components)/home";

export default function Home() {
  return (
    <main>
      <home.HeroSection />
      <home.FeatureSection />
      <home.ReportSection />
    </main>
  );
}
