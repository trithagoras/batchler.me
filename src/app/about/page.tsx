import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => (
  <div className="mt-4 prose prose-lg dark:prose-invert">
    <h1 className="text-3xl">About me</h1>
    <p>
        I&apos;m Corey and I&apos;m a 23 year old full-time software engineer and 5th year student studying Computer Science at QUT in Brisbane, Australia.
    </p>
    <p>
        I originally did four years studying Computer Science at UQ with a major in Programming Languages which quickly became my primary interest when it comes to coding and I was saddened to hear that QUT didn&apos;t offer any such equivalent major. Although they have many courses that are similar, some of my absolute favourite courses - the ones that helped my understand coding more than any other - do not have any QUT equivalent. Some of these courses include:
    </p>
    <ul>
        <li>
          <a href="https://my.uq.edu.au/programs-courses/course.html?course_code=COMP2048" target="_blank">
            Theory of Computing
            {' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
            ,
          </a>
        </li>
        <li>
          <a href="https://my.uq.edu.au/programs-courses/course.html?course_code=csse3100" target="_blank">
            Reasoning About Programs
            {' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
            ,
          </a>
        </li>
        <li>
          <a href="https://my.uq.edu.au/programs-courses/course.html?course_code=COMP3400" target="_blank">
            Functional &amp; Logic Programming
            {' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
            ,
          </a>
        </li>
        <li>
          <a href="https://my.uq.edu.au/programs-courses/course.html?course_code=COMP4403" target="_blank">
            Compilers and Interpreters
            {' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
          </a>
        </li>
      </ul>
    <p>
        These courses helped spark my interest in how languages are designed an implemented, and have lead to me starting my own programming languages: dFunc and threebolt, both of which will have dedicated blog posts and project links once they&apos;re further developed.
    </p>
    <hr />
    <p>
        Otherwise, my other hobbies include:
    </p>
    <ul>
        <li>
            Camping,
        </li>
        <li>
            Fishing (very rare that it happens but always love it!),
        </li>
        <li>
            Trying different craft beers - hopefully getting into brewing my own soon.
        </li>
    </ul>
  </div>
);

export default About;
