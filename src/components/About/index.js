import React from "react";
import devImage from "../../assets/small/portraits/0.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={devImage}
        className="my-2"
        style={{ width: "20%" }}
        alt="cover"
      />
      <p>
        My professional career started in sales and customer service. This
        helped me understand the consumers' expectations in the scope of what is
        feasible and marketable in today's digital environment.
      </p>
      <br></br>
      <p>
        I am a full stack developer with a passion for learning and problem
        solving. I am currently on the tail-end of my bootcamp and am ready to
        share my React portfolio with you.
      </p>
      <br></br>
      <p>
        My current mindset: always be learning and always be a problem-solver. I
        am always looking for new challenges and opportunities to grow as a
        developer. I am eager to join a new team. Let's see if we're a match!
      </p>
    </section>
  );
}

export default About;
