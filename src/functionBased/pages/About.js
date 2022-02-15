import React from "react"
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"


// const params = useParams;

const About = (props) => {

    return (
        <div className="about__content">
          <ul className="about__list">
            <li>
              <Link to={`/about/about-app`}>About App</Link>
            </li>
            <li>
              <Link to={`/about/about-author`}>About Author</Link>
            </li>
          </ul>
      </div>
    )

}
export default About