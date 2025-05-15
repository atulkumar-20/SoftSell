import { ContactForm } from './ContactForm';
import { AIChatBot } from './AIChatBot';
import { HowItWorks } from './HowItWorks';
import { Testimonials } from './Testimonials';
import { WhyChooseUs } from './WhyChoseUs';

export const ExtraSections = () => {
  return (
    <>
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <AIChatBot />
    </>
  );
};
