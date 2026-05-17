import { useState } from "react";
import "../styles/styles.css";

const faqData = [
  {
    question: "How do I search for internships in my preferred category/profile?",
    answer: "You can use filters like profile, location, and duration to refine your search."
  },
  {
    question: "How can I apply for an internship on Internshala?",
    answer: "Click on the internship card and use the apply button."
  },
  {
    question: "Do I need to pay to apply for an internship?",
    answer: "No, applying to internships is completely free."
  },
  {
    question: "What internships are available?",
    answer: "Various internships are available across domains like tech, marketing, and design."
  },
  {
    question: "Are there courses that offer placement?",
    answer: "Yes, some courses provide placement assistance."
  },
  {
    question: "How do I get certified online?",
    answer: "You can enroll in certified online courses available on the platform."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">

      <button className="faq-title">
        Frequently asked questions ⌃
      </button>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">

          <div className="faq-question" onClick={() => toggle(index)}>
            <span>Q. {item.question}</span>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>

          {activeIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default FAQ;