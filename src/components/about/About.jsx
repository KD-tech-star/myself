import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import AB from "../../assets/imagekd.jpg";

import { FiAward, FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <div>
      <section id="about ">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={AB} alt="" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FiAward className="about__icon" />
                <h5>Experiance</h5>
                <small>1+ Year Experiance</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clints</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>
            <p>
              nostrum rerum aliquam temporibus. Sequi quam ut consectetur autem
              a omnis quas optio voluptates, unde quibusdam repudiandae debitis
              possimus aspernatur corrupti suscipit explicabo delectus quasi
              nesciunt. Reiciendis dignissimos similique, doloremque inventore
              neque fugit recusandae, id error dicta, voluptatum molestiae dolor
              nesciunt adipisci repudiandae. Eius maiores nulla hic sint animi.
              </p>
              
              
              <a href="#contact" className="btn btn-primary">
              Let's Talk
              </a>
              
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
