import React, { useState } from 'react';
import { AccordionPlus, AccordionClose } from '../../icons';

const faqData = [
  {
    question: 'Are there customization options available?',
    answer: 'Stay up-to-date with the latest features and improvements by checking our blog or subscribing to our newsletter for updates on Fontis Blocks.', // No answer provided in image
  },
  {
    question: 'Where can I find the latest updates?',
    answer: 'Stay up-to-date with the latest features and improvements by checking our blog or subscribing to our newsletter for updates on Fontis Blocks.',
  },
  {
    question: 'How can I join the Fontis Blocks community?',
    answer: 'Stay up-to-date with the latest features and improvements by checking our blog or subscribing to our newsletter for updates on Fontis Blocks.',
  },
  {
    question: 'Can I get support if I have issues with the plugin?',
    answer: 'Stay up-to-date with the latest features and improvements by checking our blog or subscribing to our newsletter for updates on Fontis Blocks.',
  },
];

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(1); // Default open: second item
  
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className={`accordion`}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${'accordionItem'} ${openIndex === index ? 'active' : ''}`}
          >
            <button
              className={`accordionHeader`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span className={`question`}>{item.question}</span>
              <span className={`icon`}>
                {openIndex === index ? <AccordionClose /> : <AccordionPlus />}
              </span>
            </button>
            {item.answer && openIndex === index && (
              <div className={`accordionContent`}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default FAQAccordion;