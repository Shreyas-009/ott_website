import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const questionRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && questionRef.current) {
      gsap.to(contentRef.current, {
        height: isOpen ? "auto" : 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(questionRef.current, {
        color: isOpen ? "#FFA500" : "#F0F0F0",
        duration: 0.3,
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-orange-700 last:border-b-0">
      <div
        ref={questionRef}
        className="flex justify-between items-center py-6 cursor-pointer text-xl font-medium transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{question}</h3>
        <i
          className={`ri-add-line text-2xl transition-transform duration-300 ${
            isOpen ? "transform rotate-45" : ""
          }`}
        ></i>
      </div>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <p className="pb-6 text-lg text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    gsap.from(componentRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const faqData = [
    {
      question: "What is VOD?",
      answer:
        "VOD (Video on Demand) is a media distribution system that allows users to access video content whenever they choose, rather than at a scheduled broadcast time. It gives viewers the flexibility to watch their favorite shows and movies at their convenience.",
    },
    {
      question: "How does OTT differ from traditional TV?",
      answer:
        "OTT (Over-The-Top) content is delivered directly to viewers via the internet, bypassing traditional cable, broadcast, and satellite television platforms. Unlike traditional TV, OTT allows users to stream content anytime, anywhere, and often across multiple devices, providing greater flexibility and personalization.",
    },
    {
      question: "What devices can I use to watch?",
      answer:
        "Our service is available on a wide range of devices to ensure you can enjoy your favorite content wherever you are. This includes smart TVs, smartphones (iOS and Android), tablets, web browsers, gaming consoles (such as PlayStation and Xbox), and popular streaming devices like Roku, Amazon Fire TV Stick, and Apple TV.",
    },
    {
      question: "Can I watch offline?",
      answer:
        "Yes, we offer an offline viewing feature. Many of our shows and movies are available for download on our mobile app, allowing you to watch your favorite content without an internet connection. This is perfect for when you're traveling or in areas with limited internet access.",
    },
  ];

  return (
    <div ref={componentRef} className="w-full px-6 md:px-12 lg:px-24 py-20 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-200 mb-12">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-2xl text-orange-200 mb-6">
            Ready to start streaming?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full bg-orange-950 text-orange-200 placeholder-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg w-full sm:w-auto"
            />
            <button className="px-8 py-4 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition duration-300 text-lg flex items-center justify-center">
              Get Started
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
