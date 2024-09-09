import React from "react";
import "./AboutUs.css";
import brek from "../../images/break.png";
import last from "../../images/last2.png";

export default function AboutUs() {
  return (
    <>
      <div className="contain">
        <h1
          className="About2 my-5 "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          About Us
        </h1>
        <div className="container">
          <div className="row">
            <div
              className="col-md-7"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="leter mt-4">
                Coral Lab’s Wealth Management is a multi-family office
                <br />
                registered in Vietnam, operating under the MAS CMS <br />{" "}
                framework for the provision of private wealth management,
                <br /> advisory, and asset management to High Net Worth families
                <br /> and Accredited Investors in the region.
              </p>
              <p className="leter my-5">
                The founders of Coral Lab started the firm primarily to realize
                <br />
                their vision of bringing unbiased and conflict-free wealth
                <br />
                management service and advisory to their longstanding high
                <br /> net worth clients that they had served during their
                almost
                <br />
                two-decades-long careers with international private banks.
              </p>
              <p className="leter mb-5">
                Coral Lab specializes in asset management and legacy <br />
                planning. We work with best of breed private banks
                <br />, insurance companies, international brokers and
                independent
                <br /> fund and securities houses, immigration companies, tax
                <br /> advisors and lawyers, independent trustees and other
                <br /> providers globally to cover all aspects of family
                governance
                <br /> and family constitution. Our value proposition is in our
                <br /> bespoke solutions and our people.
              </p>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center my-5">
          <img src={brek} alt="" />
        </div>
        <h1
          className="About2 my-5 "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Career
        </h1>
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 "
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={last} alt="" />
            </div>
            <div
              className="col-md-6 "
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="take">
                It takes vision and fascination to make Coral Lab gold
              </p>
              <p className="take">
                If you’re someone who values empathy and humility, delivers
                <br />
                excellence through listening skills, who is often energized by
                <br />
                accomplishments and complex situations, and who expects
                <br /> high standards in accountability and discretion, then you
                are <br />
                the one we are looking for.
              </p>
              <p className="take">
                We invest in people who want to help our teams be
                <br /> successful in delivering world-class wealth management
                <br /> solutions to our clients.
              </p>
            </div>
          </div>
        </div>
        <h1
          className="About2 my-5 "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Our Leadership
        </h1>
        <div className="container mb-5">
          <div className="row">
            <div
              className="col-md-6 "
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="take">
                Our distinct way of applying empathy and
                <br /> listening skills combines a holistic approach
                <br /> towards understanding what works and what
                <br /> not, resulting in the deepest possible
                <br /> understanding of family business dynamics
                <br /> and preserving for their future well-being
              </p>
            </div>
            <div
              className="col-md-6 "
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="take">
                Relentlessly passionate and unbiased by<br />  nature, our executive
                team brings together<br />  100+ years of industry experience,
                providing<br />  expert leadership for the Coral Lab team and<br />  long-term
                value for our clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
