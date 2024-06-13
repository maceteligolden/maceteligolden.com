import { MainLayout } from "@/components/layouts";
import HeroSection from "./hero";
import AboutSection from "./about";
import ServicesSection from "./services";
import ProjectSection from "./projects";
import ReviewSection from "./review";

export default function Home() {
  return (
   <MainLayout>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <ProjectSection/>
      <ReviewSection/>
   </MainLayout>
  );
}
