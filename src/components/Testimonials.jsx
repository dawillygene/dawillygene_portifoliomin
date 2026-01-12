import React from 'react';

const testimonials = [
  {
    delay: '0.1s',
    stars: 5,
    text: "Dawilly consistently demonstrated outstanding technical skills and dedication in software engineering during his studies. His problem-solving ability is impressive and he quickly adapts to new challenges.",
    initials: "RH",
    name: "Rorland Horombo",
    title: "Lecturer, Arusha Technical College",
  },
  {
    delay: '0.2s',
    stars: 5,
    text: "Dawilly's interdisciplinary knowledge and innovative mindset have been key in advancing biomedical projects at Proud Biomedics. His software solutions have streamlined several complex processes.",
    initials: "MM",
    name: "Masoud Mbelwa",
    title: "Biomedical Engineer, CEO @ Proud Biomedics",
  },
  {
    delay: '0.3s',
    stars: 4.5,
    text: "I have seen Dawilly's growth firsthand. His commitment to quality and client satisfaction makes him a reliable software engineer for any project, especially in consultancy and employment services.",
    initials: "MC",
    name: "Mohamed",
    title: "CEO, Alpha Employment Agency and Consultancy Limited",
  },
  {
    delay: '0.4s',
    stars: 5,
    text: "Dawilly is a highly skilled developer whose tech expertise supports operational efficiency at Salum Transport and Salum Construction. His solutions are practical and impactful.",
    initials: "FM",
    name: "Fatma Masimba",
    title: "CEO, Salum Transport Limited & Salum Construction",
  },
];


const renderStars = (stars) => {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 !== 0;
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="fas fa-star text-yellow-500"></i>
      ))}
      {halfStar && <i className="fas fa-star-half-alt text-yellow-500"></i>}
    </>
  );
};

const Testimonials = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="section-title fade-in">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonials.map((t, idx) => (
          <div
            className="p-6 rounded-lg relative fade-in"
            style={{
              animationDelay: t.delay,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}
            key={idx}
          >
            <div
              className="text-5xl absolute top-6 right-6 opacity-20"
              style={{ color: 'var(--accent1)' }}
            >
              <i className="fas fa-quote-right"></i>
            </div>
            <div className="mb-6">{renderStars(t.stars)}</div>
            <p className="text-gray-300 mb-6">{t.text}</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-4">
                <span className="text-lg font-bold">{t.initials}</span>
              </div>
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;