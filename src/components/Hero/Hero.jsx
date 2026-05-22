import heroImage from "../../assets/hero.png";

import { Typewriter } from "react-simple-typewriter";

function Hero() {

  return (

    <section
      className="hero"
      id="home"
    >

      {/* LEFT SIDE */}

      <div className="hero-left">

        <p className="hero-mini">
          FULL STACK DEVELOPER
        </p>

        <h1 className="hero-title">

          Hi, I'm

          <br />

          <span className="gradient-text">
            Prasanth
          </span>

        </h1>

        {/* AUTO TYPING */}

        <div className="typing-wrapper">

          <span className="real-typing">

            <Typewriter

              words={[
                "Full Stack Developer",
                "Frontend Developer",
                "Problem Solver",
                "React Developer",
                "Java Backend Developer"
              ]}

              loop={true}

              cursor

              cursorStyle="|"

              typeSpeed={80}

              deleteSpeed={40}

              delaySpeed={1800}

            />

          </span>

        </div>

        {/* DESCRIPTION */}

        <p className="hero-description">

          Building modern scalable web applications
          with clean UI, powerful backend systems
          and smooth user experiences using
          React, Java, Spring Boot and Python.

        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <a
            href="#contact"
            className="primary-btn"
          >
            Hire Me
          </a>

       

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right">

        <div className="hero-3d-card">

          <div className="glow-circle"></div>

          <img
            src={heroImage}
            alt="Prasanth"
            className="hero-image"
          />

          {/* FLOATING TAGS */}

          <div className="floating-card react">
            React
          </div>

          <div className="floating-card java">
            Java
          </div>

          <div className="floating-card python">
            Python
          </div>

          <div className="floating-card frontend">
            Frontend
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;