// pages/Projects.jsx
import { Link } from "react-router-dom";
import PageFadeTransition from "../animations/PageFadeTransition";
import PaperFan from "../components/ui/PaperFan";
import ProjectCard from "../components/cards/ProjectCard";
import ImgFrogTale from "../assets/images/frog-tale.png";
import ImgMatchApp from "../assets/images/matching-app.png";
import ImgPlants from "../assets/images/plants.png";
import ImgCheeper from "../assets/images/cheeper.png";
import ImgAccessibleSite from "../assets/images/accessible-website.png";

export default function Projects() {
  return (
    <PageFadeTransition>
      <div className="overflow-hidden flex items-center justify-center h-[calc(100vh-var(--header-h))]">
        <PaperFan
          className="projects-paper-fan flex items-center justify-center"
          width="50rem"
          height="45rem"
          hoverRaise
          hoverZIndex={10000}
          layers={[
            {
              x: 600,
              y: 20,
              rot: 10,
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
              x: -600,
              y: 20,
              rot: -10,
              color: "var(--bgSecondary)",
              width: "30rem",
              height: "40rem",
              content: (
                <ProjectCard
                  className="project-card"
                  title="An accessible website"
                  description="En nettside utviklet med tanke på tilgjengelighet og universell utforming. Med stadig større fokus på at internett skal være tilgjengelig for alle og strengere WCAG standarder for både offentlige og private sektorer, forsøker denne nettsiden å minske avstanden mellom menneskers muligheter på nettet."
                  imageSrc={ImgAccessibleSite}
                />
              ),
            },
            {
              x: 300,
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
              x: -300,
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
              x: 0,
              y: 0,
              rot: 0,
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
