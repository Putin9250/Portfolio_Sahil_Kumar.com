import React from "react";
import "./Value.css";

function Value() {
  return (
    <section className="paddings flexColCenter Value-Wrapper">
      <h2 className="primaryText">My Values</h2>
      <p className="secondaryText m-top value-quote">
        Principles are my architecture—without them, even brilliance collapses.
      </p>

      <div className="values-flex ">
        <div className="value-card ">
          <h3 className="orangeText flexCenter">Accountability</h3>
          <p className="secondaryText m-top">
            I take ownership of every line I write. Whether it's a bug or a
            breakthrough, I stand by my work, constantly striving to improve and
            deliver code that’s clean, tested, and reliable.
          </p>
        </div>
        <div className="value-card">
          <h3 className="orangeText flexCenter">Curiosity</h3>
          <p className="secondaryText m-top">
            I believe that great developers never stop asking "why?" or "what
            if?". My curiosity drives me to explore new tools, question how
            things work, and keep pushing the boundaries of what I can build.
          </p>
        </div>

        <div className="value-card">
          <h3 className="orangeText flexCenter">Precision</h3>
          <p className="secondaryText m-top">
            In martial arts, every move counts. I bring that same clarity and
            minimalism to my UI design—every pixel with a purpose.
          </p>
        </div>

        <div className="value-card">
          <h3 className="orangeText flexCenter">Respect</h3>
          <p className="secondaryText m-top">
            Code is collaboration. I believe in respecting mentors, users, and
            team feedback—just as I respect my opponents in MMA.
          </p>
        </div>

        <div className="value-card">
          <h3 className="orangeText flexCenter">Growth</h3>
          <p className="secondaryText m-top">
            I learn from every round—whether it’s sparring in the gym or
            debugging a React component. Each setback is a setup for progress.
          </p>
        </div>

        <div className="value-card ">
          <h3 className="orangeText flexCenter">Discipline</h3>
          <p className="secondaryText m-top" id="skills">
            Years of MMA training have taught me the value of routine. I bring
            that same discipline to coding—showing up, solving problems, and
            staying consistent.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Value;
