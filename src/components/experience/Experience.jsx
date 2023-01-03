import React from "react";
import { BsPatchCheckFill} from "react-icons/bs";
import "./experience.css";
export default function Experience() {
  return (
    <div>
      <section id="experience">
        <h5 className="ex">What Skill's I Have </h5>
        <h2>My Experiance</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>HTML</h4>
                <small className="text-light">90%</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>CSS</h4>
                <small className="text-light">80%</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>Javascript</h4>
                <small className="text-light">70%</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>Bootstrap</h4>
                <small className="text-light">85%</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>React</h4>
                <small className="text-light">80%</small>
                </div>
              </article>
            </div>
          </div>

          {/**Frontend End */}

          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Node js</h4>
              <small className="text-light">90%</small>
              
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Express js</h4>
              <small className="text-light">80%</small>
              
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">70%</small>
              
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>PHP</h4>
              <small className="text-light">85%</small>
              
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div><h4>Python</h4>
              <small className="text-light">80%</small>
              </div>
            </article>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
