import React from "react";
import { BsStars } from "react-icons/bs";

const AboutBenefit = () => {
  const perks = [
    {
      title: "Pay For Performance",
      desc: "We conduct performance reviews biannually to ensure promotions and compensation adjustments are equitable and competitive.",
    },
    {
      title: "401(k)",
      desc: "We care about your future. Our 401(k) is managed by our retirement partner.",
    },
    {
      title: "Annual Lifestyle Reimbursement",
      desc: "Receive a $250 stipend yearly to invest in learning, development, or wellness — your choice!",
    },
    {
      title: "Medical, Dental, Vision",
      desc: "Your health is our priority. Flexible options so you can choose what fits best.",
    },
    {
      title: "Stock Options",
      desc: "All full-time employees receive stock options as part of their compensation.",
    },
    {
      title: "401(k)",
      desc: "We care about your future. Our 401(k) is managed by our retirement partner.",
    },
    {
      title: "1/2 Day Fridays",
      desc: "Yep! Your weekend starts at 12:30 PM every Friday.",
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
          Perks & Benefits<span className="text-green-500">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-md rounded-lg p-10 flex items-start gap-4 hover:shadow-lg transition duration-300"
            >
              <BsStars className="text-blue-600 text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  {perk.title}
                </h3>
                <p className="text-slate-600 text-sm">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBenefit;
