import React from "react";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#about h2", { type: " words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>{" "}
              from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              From the moment you step into our bar, you'll be greeted by a
              welcoming atmosphere that will transport you to a world of
              elegance and sophistication. Our team of experienced bartenders is
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy"></div>
          <img src="/images/abt1.png" alt="abt1" className="w-full" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy"></div>
          <img src="/images/abt2.png" alt="abt2" className="w-full" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy"></div>
          <img src="/images/abt5.png" alt="abt5" className="w-full" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy"></div>
          <img src="/images/abt3.png" alt="abt3" className="w-full" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy"></div>
          <img src="/images/abt4.png" alt="abt4" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
