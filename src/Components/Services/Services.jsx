import React from "react";
import "./Services.css";
import brekgold from "../../images/breakGold.png";
import cup from "../../images/cups.png";
import plant from "../../images/plant.png";
export default function services() {
  return (
    <>
      <div className="containr2">
        <h1
          className="text-center first1 my-5 "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          More independence.
          <br />
          More possibilities.
        </h1>
        <div className=" d-flex justify-content-center my-5">
          <img src={brekgold} alt="brk" />
        </div>
        <p
          className="midle text-center my-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Our solutions are designed to provide you with choices and flexibility
          to help you meet your family wealth needs.
          <br />
          While having two decades of legacy planning commands gold, we find
          that these are what makes Coral Lab stands out further:
        </p>
        <div className="container m-5">
          <div className="row">
            <div
              className="col-md-5 d-flex justify-content-end"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={cup} alt="vvv" />
            </div>
            <div
              className="col-md-7 d-flex  justify-content-center  flex-column"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1 className="Nurturing mb-3">Nurturing</h1>
              <p className="Believe">
                Believe that Coral Lab’s priority CENTERS ON YOU
                <br /> . We strive to be attentive and keep our clients’ needs
                and goals close to us
                <br />
                so that we are all aligned for success.
              </p>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center my-5">
          <img src={brekgold} alt="brk" />
        </div>
        <div className="container m-5">
          <div className="row">
            <div
              className="col-md-5 d-flex justify-content-end"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={plant} alt="vvv" />
            </div>
            <div
              className="col-md-7 d-flex  justify-content-center  flex-column"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1 className="Nurturing mb-3">
                Meaningful Investments, Meaningful Relationships.
              </h1>
              <p className="Believe">
                Visionary, yet highly focused on what’s best for our clients.
                <br />
                Here, we leverage our deep investors’ mind and entrepreneurial
                expertise <br />
                to source and advice on suitable investments as well as upcoming
                <br /> opportunities at home and abroad. Here, we serve as your
                trusted long
                <br /> term partners and co-negotiators for new and current
                engagements, <br />
                assuring that our clients’ portfolio delivers optimal returns.
              </p>
            </div>
          </div>
        </div>
        <div className="hedar2">
          <h1 className="wealth my-5"               data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500">wealth transfer & Succession planning</h1>
          <div className="container cntn m-5">
            <div className="row">
              <div className="col-md-8 "              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500">
                <h1 className="hear mt-3 mb-2">We hear YOU</h1>
                <p className="lastpr">
                  To ensure success and long-term operation of any family
                  businesses, challenges
                  <br /> such as unity in the family must be addressed with
                  shared values
                </p>
                <p className="lastpr">
                  Coral Lab has developed in-house expertise to assist clients
                  with swift strategic
                  <br /> succession plans and processes, with distinct family
                  values at its very core.
                </p>
                <p className="lastpr">
                  With the above, we assure strength and stability in your
                  portfolios, preparing
                  <br /> for continued long term growth and prosperity
                </p>
                <p className="lastpr">
                  On top of that, we spent 20 years in forging deep partnerships
                  with highly
                  <br />
                  skilled specialists at home and abroad. The team consists of
                  internationally
                  <br />
                  accredited insurance brokers, trust companies, legal firms,
                  fiduciary service
                  <br />
                  providers and many more partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
