import React from 'react'
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqs = [
  {
    question: "Is CloudConnect free to use?",
    answer: "Yes! You can join and explore opportunities with top employers at no cost, always.",
  },
  {
    question: "How does CloudConnect work?",
    answer: "CloudConnect connects talented individuals with top companies through a personalized hiring platform.",
  },
  {
    question: "Will my current employer see my profile?",
    answer: "No, CloudConnect keeps your profile hidden from your current employer.",
  },
  {
    question: "Can CloudConnect speed up my job search?",
    answer: "Yes! CloudConnect helps you get matched faster with relevant roles based on your skills.",
  },
  {
    question: "Will I know the salary before interviewing for a role??",
    answer: "Yes! With each interview request, employers share upfront salary details and job descriptions, so you can always make informed decisions..",
  },
  {
    question: "Can I pause my profile on CloudConnect?",
    answer: "Yes! When you’re not actively job-hunting, you can set your profile to “off the market,” making it invisible to employers. Your profile stays saved, so when you're ready, just switch it back on and start exploring new opportunities with ease.",
  },
];

const AboutFaq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <section className="bg-[#58869434] text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto rounded-lg bg-[#23262e] p-8 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#7be9ff] mb-8 text-center">
          Frequently asked questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
              {activeIndex === index ? (
                <FaMinus className="text-teal-400" />
              ) : (
                <FaPlus className="text-teal-400" />
              )}
            </div>

            {activeIndex === index && (
              <p className="mt-4 text-gray-300 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutFaq