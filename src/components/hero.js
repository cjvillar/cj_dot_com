import React from "react";

const data = [
  {
    title: "About Me",
    image: "./images/reading_intro.jpg",
    alt: "me",
    description: "This is an example description 1.",
    text: "This is some example text 1.",
    link: "https://example1.com",
  },
  {
    title: "Example Title 1",
    image: "./logos/django.png",
    alt: "django logo",
    description: "This is an example description 1.",
    text: "This is some example text 1.",
    link: "https://example1.com",
  },
  {
    title: "Example Title 2",
    image: "./logos/flask.png",
    alt: "flask logo",
    description: "This is an example description 2.",
    text: "This is some example text 2.",
    link: "https://example2.com",
  },
];

function Hero() {
  return (
    <section>
      {data.map((item, index) => (
        <div key={index}>
          <div className="mb-8 md:mb-16">
            <div className="sm:mx-0">
              <div
                className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
                width={500}
                height={330}
              >
                <img src={item.image} alt={item.alt} />
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
            <div>
              <h2 className="mb-4 text-4xl lg:text-5xl font-bold leading-tight">
                {item.title}
              </h2>
              <div className="mb-4 md:mb-0 text-lg">{item.description}</div>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Hero;
