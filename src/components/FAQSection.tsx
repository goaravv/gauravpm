import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I get consistent sales using performance marketing?',
    answer: 'Consistent sales come from having a proven funnel strategy, the right targeting, and optimized ad creatives. In the webinar, I\'ll share the exact framework I use to help businesses generate predictable revenue month after month.',
  },
  {
    question: 'How do I set up a sales campaign correctly?',
    answer: 'Setting up a sales campaign involves multiple steps: defining your audience, crafting compelling offers, creating high-converting landing pages, and structuring your ad account properly. I\'ll walk you through each step during the live session.',
  },
  {
    question: 'How can I generate quality leads instead of just quantity?',
    answer: 'Quality leads come from precise targeting, strong qualification mechanisms, and proper funnel design. We\'ll cover lead scoring, qualifying questions, and how to structure your campaigns to attract buyers, not just browsers.',
  },
  {
    question: 'How do I grow an E-commerce brand using ads?',
    answer: 'E-commerce growth requires a multi-channel approach with proper tracking, creative testing, and scaling strategies. I\'ll share case studies of brands that went from zero to crores using the exact methods you\'ll learn.',
  },
  {
    question: 'Is this webinar suitable for beginners?',
    answer: 'Absolutely! While I\'ll cover advanced strategies, the fundamentals will be explained clearly. Whether you\'re just starting or looking to optimize existing campaigns, you\'ll get actionable insights.',
  },
  {
    question: 'Will I get the webinar link after registration?',
    answer: 'Yes! After you register, you\'ll receive the webinar link on WhatsApp. Join our community group to get reminders and connect with other participants.',
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see your question here, feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 border border-border/50 rounded-xl"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
