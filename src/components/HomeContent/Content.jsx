import React from "react";
import { useNavigate } from "react-router-dom";
import landing_img from "../../assets/landing_img.svg";
import "./Content.css";
import { BackgroundBeams } from "../ui/background-beams";

const Content = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/SignIn");
  };
  const handleSignUp = () => {
    navigate("/SignUp");
  };

  return (
    <>
      <section>
        <div className="relative mx-auto lg:max-w-none lg:px-8 md:px-4 max-w-[1100px] xl:px-8 bg-cover">
          <div className="section-label">Find Your Potential Now </div>
          <br />
          <p className="lg:text-balance mx-auto mt-3.5 max-w-xl text-[19px] font-light leading-snug -tracking-[0.04em] text-gray-new-80 lg:mt-2.5 lg:max-w-lg lg:text-base sm:max-w-xs pt-4">
            Our innovative platform offers an effortless and seamless approach
            to learning, <br /> empowering volunteers and organizers to match up
            their skills
          </p>
          <div className="button-group">
            <a onClick={handleSignUp} className="start-button">
              Get Started
            </a>
          </div>
          <BackgroundBeams />
        </div>
      </section>
    </>
  );
};

export default Content;
//waht is the path of landing_img.svg
