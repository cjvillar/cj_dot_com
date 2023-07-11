import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Connect:
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/cjvillarreal-bay-area/"
              style={{
                backgroundImage: "url(./logos/linkedin.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100px",
                height: "100px",
              }}
            >
              {/* Empty anchor tag */}
            </a>

            <a
              href="https://github.com/cjvillar"
              style={{
                backgroundImage: "url(./logos/github.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100px",
                height: "100px",
              }}
            >
              {/* Empty anchor tag */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
