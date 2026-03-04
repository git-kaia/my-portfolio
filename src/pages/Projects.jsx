// pages/Projects.jsx
import { Link } from "react-router-dom";
import PageFadeTransition from "../animations/PageFadeTransition";
import PaperFan from "../components/ui/PaperFan";
import ProjectCard from "../components/cards/ProjectCard";
import ImgFrogTale from "../assets/images/frog-tale.png";
import ImgMatchApp from "../assets/images/matching-app.png";
import ImgPlants from "../assets/images/plants.png";
import ImgCheeper from "../assets/images/cheeper.png";

export default function Projects() {
  return (
    <PageFadeTransition>
      <div className="overflow-hidden flex flex-col items-center justify-center gap-32 pb-10">
        <PaperFan
          className="projects-paper-fan flex items-center justify-center"
          width="100rem"
          height="45rem"
          hoverRaise
          hoverZIndex={10000}
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
                  imageSrc={ImgCheeper}
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
                  title="Scrolling through a frog's life"
                  description="A project aiming to spread consciousness around the importance of frogs in our environment and what challenges they are facing."
                  imageSrc={ImgFrogTale}
                />
              ),
            },
            {
              x: 200,
              y: -30,
              rot: 2,
              color: "var(--bgSecondary)",
              width: "30rem",
              height: "40rem",
              content: (
                <ProjectCard
                  className="project-card"
                  title="Different roots, different rules"
                  description="A project trying to give houseplants with different lighting and watering needs a chance at life, with the help of web of things technology."
                  imageSrc={ImgPlants}
                />
              ),
            },
            {
              x: -200,
              y: -30,
              rot: -2,
              color: "var(--bgSecondary)",
              width: "30rem",
              height: "40rem",
              content: (
                <ProjectCard
                  className="project-card"
                  title="Match med mening"
                  description="En app som har som formål å matche kjæledyr til omplassering med de rette hjemmene"
                  imageSrc={ImgMatchApp}
                />
              ),
            },
          ]}
        ></PaperFan>
      </div>
    </PageFadeTransition>
  );
}
