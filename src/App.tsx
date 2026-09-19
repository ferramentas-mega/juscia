import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Advantages } from "@/components/Advantages";
import { Metrics } from "@/components/Metrics";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AccelerateTasks } from "@/components/AccelerateTasks";
import { RealtimeTracking } from "@/components/RealtimeTracking";
import { SuccessCases } from "@/components/SuccessCases";
import { Testimonials } from "@/components/Testimonials";
import { Demo } from "@/components/Demo";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { SignupModal } from "@/components/SignupModal";

function App() {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Hero />
      <SocialProof />
      <Advantages />
      <Metrics />
      <Features />
      <HowItWorks />
      <AccelerateTasks />
      <RealtimeTracking />
      <SuccessCases />
      <Testimonials />
      <Demo />
      <Pricing onOpenSignup={() => setSignupOpen(true)} />
      <About />
      <Faq />
      <FinalCta onOpenSignup={() => setSignupOpen(true)} />
      <Footer />
      <SignupModal open={signupOpen} onClose={() => setSignupOpen(false)} />
    </div>
  );
}

export default App;
