
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How long does it take to set up the Aurallon system?",
    answer: "Our white-glove onboarding process ensures you're up and running in under 30 minutes. We handle integration with your existing tools, custom configuration, and provide training for your team—all in a single session."
  },
  {
    question: "How does Aurallon maintain data privacy and security?",
    answer: "We take data security seriously. Aurallon is GDPR compliant, uses SSL encryption for all communications, and maintains strict data isolation policies. Your client information remains private, secure, and fully controlled by your brokerage."
  },
  {
    question: "What kind of ROI can I expect from implementing Aurallon?",
    answer: "Real estate teams using Aurallon report an average 32% increase in qualified leads and 47% faster response times. Most brokerages see positive ROI within the first 30 days through increased conversions and more efficient team workflows."
  },
  {
    question: "Can Aurallon integrate with my existing CRM and tools?",
    answer: "Absolutely. Aurallon seamlessly connects with all major real estate CRMs including Salesforce, Follow Up Boss, and Zoho. We also offer API-based integration with custom systems and optional data migration services."
  },
  {
    question: "What channels can Aurallon handle for lead communication?",
    answer: "Aurallon works across Telegram, WhatsApp, SMS, Email, and Slack—covering all major communication channels where your leads might reach out. Our AI concierge maintains consistent branding and messaging across all platforms."
  }
];

const FaqAccordion: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border-b border-white/10 py-2"
        >
          <AccordionTrigger className="text-white text-lg font-medium hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-white/70">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
