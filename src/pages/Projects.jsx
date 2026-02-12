// pages/Projects.jsx
import { Link } from "react-router-dom";
import PageFadeTransition from "../animations/PageFadeTransition";
import PaperFan from "../components/cards/PaperFan";
import ProjectCard from "../components/cards/ProjectCard";

export default function Projects() {
  return (
    <PageFadeTransition>
      <div>
        <PaperFan
          className="projects-paper-fan flex items-center justify-center"
          width="100rem"
          height="45rem"
          layers={[
            {
              x: 500,
              y: 0,
              rot: 5,
              color: "var(--bgSecondary)",
              width: "30rem",
              height: "40rem",
              content: (
                <ProjectCard
                  className="project-card"
                  title="Twitter from Temu"
                  description="Et sosialt nettverk som er en vannekte piratkopi av Twitter, bare billigere!"
                  imageSrc="/path/to/image1.jpg"
                />
              ),
            },
            {
              x: 0,
              y: -30,
              rot: 0,
              color: "var(--bgSecondary)",
              width: "30rem",
              height: "40rem",
              content: (
                <ProjectCard
                  className="project-card"
                  title="Scrolling through a frog's life"
                  description="A project aiming to spread consciousness around the importance of frogs in our environment and what challenges they are facing."
                  imageSrc="/path/to/image2.jpg"
                />
              ),
            },
            {
              x: -500,
              y: 0,
              rot: -5,
              color: "var(--bgSecondary)",
              width: "30rem",
              height: "40rem",
               content: (
                <ProjectCard
                  className="project-card"
                  title="Match med mening"
                  description="En app som har som formål å matche kjæledyr til omplassering med de rette hjemmene"
                  imageSrc="/path/to/image1.jpg"
                />
              ),
            },
          ]}
        ></PaperFan>
      </div>
    </PageFadeTransition>
  );
}
