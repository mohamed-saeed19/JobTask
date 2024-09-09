import React, { useEffect } from "react";
import "./Home.css";
import Aos from "aos";
import left from "../../images/left.png";
import middle from "../../images/Oval.png";
import right from "../../images/right.png";
import half from "../../images/half.png";

export default function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <header>
        <h1
          className="text1 "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Grow. Preserve. Transfer.
        </h1>
      </header>
      <div className="section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="855"
          height="1025"
          viewBox="0 0 855 1025"
          fill="none"
          className="midCircle "
        >
          <path
            opacity="0.1"
            d="M1025 512.507C1025 229.901 795.099 0 512.508 0C229.902 0 0.000976562 229.901 0.000976562 512.507C0.000976562 795.099 229.902 1025 512.508 1025C795.099 1025 1025 795.099 1025 512.507ZM1001.83 512.507C1001.83 782.327 782.328 1001.83 512.508 1001.83C242.689 1001.83 23.1827 782.327 23.1827 512.507C23.1827 242.688 242.689 23.1817 512.508 23.1817C782.313 23.1817 1001.83 242.688 1001.83 512.507Z"
            fill="url(#paint0_linear_2793_8439)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2793_8439"
              x1="0.000976563"
              y1="0"
              x2="1146.19"
              y2="864.742"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D7914E" />
              <stop offset="0.307292" stop-color="#FFE2B4" />
              <stop offset="0.713542" stop-color="#FDAE62" />
              <stop offset="1" stop-color="#FEC973" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          className="comma"
        >
          <g opacity="0.4" clip-path="url(#clip0_2793_8438)">
            <path
              d="M129.308 150C146.26 150 160.001 135.861 160.001 118.421C160.001 100.979 146.26 86.8416 129.308 86.8416C98.6173 86.8416 119.079 25.7885 160.001 25.7885L160.001 11.0515C86.9688 11.0515 58.3454 150 129.308 150ZM40.8864 150C57.8381 150 71.5792 135.861 71.5792 118.421C71.5792 100.979 57.8381 86.8416 40.8864 86.8416C10.1956 86.8416 30.6568 25.7885 71.5792 25.7885L71.5792 11.0515C-1.45291 11.0515 -30.0763 150 40.8864 150Z"
              fill="url(#paint0_linear_2793_8438)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2793_8438"
              x1="160.001"
              y1="150"
              x2="0.000968001"
              y2="11"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D7914E" />
              <stop offset="0.307292" stop-color="#FFE2B4" />
              <stop offset="0.713542" stop-color="#FDAE62" />
              <stop offset="1" stop-color="#FEC973" />
            </linearGradient>
            <clipPath id="clip0_2793_8438">
              <rect
                width="160"
                height="160"
                fill="white"
                transform="translate(0.000976562)"
              />
            </clipPath>
          </defs>
        </svg>

        <h1 className="pros my-5">Our Philosophy</h1>

        <p className="vision ">
          “My vision of bringing conflict-free and independent
          <br /> advice to you at Coral Lab, is the reason of our
          <br /> existence and at the core of what we do.”
        </p>

        <div className="container my-5">
          <div className="row">
            <div
              className="col-md-4 d-flex justify-content-center align-items-center"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={left} alt="ppl" />
            </div>
            <div
              className="col-md-4 "
              data-aos="zoom-out"
              data-aos-easing="linear"
            >
              <div className="zabbat d-flex align-items-center">
                <img src={middle} alt="ppl" className="middle" />
                <h2 className="Kelvin">Kelvin Ling</h2>
                <p className="Founder">Co-Founder</p>
              </div>
            </div>
            <div
              className="col-md-4 d-flex justify-content-center align-items-center "
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={right} alt="ppl" />
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div
              className="col-md-6 d-flex justify-content-center align-items-center "
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="3000"
              data-aos-delay="300"
            >
              <img src={half} alt="ppl" />
            </div>
            <div
              className="col-md-6 d-flex justify-content-center  zabbat"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
              data-aos-delay="300"
            >
              <h1 className="Principles">Principles & Values</h1>
              <h2 className="Coral my-4">Coral Lab</h2>
              <p className="believe">
                We believe that building great wealth legacies for Families and
                High Net
                <br /> worth Individuals requires anticipating our clients’
                needs and envisioning
                <br /> their growth. Whether in business or family wealth, you
                need a great
                <br /> partner like Coral Lab who understands and foresees your
                opportunities as
                <br /> well as potential pitfalls in the future.
              </p>
            </div>
          </div>
        </div>
        <div
          className="last"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h1 className="Next">Next Generation</h1>
          <p className="focuses">
            Coral Lab consciously focuses on your next generation and
            thereafter. In this age of truly disruptive
            <br /> environment promoted by high technology, we focus on making a
            true difference that impacts the
            <br />
            unity of families by utilizing best practices and the right
            framework for wealth succession planning.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 main"   data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500">
            <h1 className="first m-4">Value</h1>
            <p className="letter ms-4">
              We add execution power, deep knowledge, and
              <br /> insights that translate into long term
              <br /> sustainable solutions for our clients and
              <br />
              partners. We assure stability and growth for
              <br /> family businesses and their portfolios. This is
              <br /> where a strong and prosperous future begins.
            </p>
          </div>
          <div className="col-md-4 main"   data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="1500">
            <h1 className="first m-4">“YOU” </h1>
            <p className="letter ms-4">
              Coral Lab’s priority centers on YOU. With
              <br /> heart and soul, we listen, empathize,
              <br /> strategize, jointly collaborate and tailor
              <br />
              holistic and structured bespoke plans and
              <br /> processes.
            </p>
          </div>
          <div className="col-md-4 main"   data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500">
            <h1 className="first m-4">Solution Driven </h1>
            <p className="letter ms-4">
              Every client or family’s need is unique. Coral <br /> Lab’s
              propositions derive from the immediate <br /> and long term needs
              that will be driven by <br /> solutions that effect a stable
              future legacy for <br /> our clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
