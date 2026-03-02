import PageFadeTransition from "../animations/PageFadeTransition";
import ScrollIndicator from "../components/ui/ScrollIndicator";
import PaperFan from "../components/ui/PaperFan";
import PolaroidCard from "../components/cards/PolaroidCard";
import ImgBudgies from "../assets/images/me-and-my-budgies.JPG";
import ImgTrulte from "../assets/images/me-and-trulte.jpg";
import ImgRipley from "../assets/images/ripley.jpg";
import ImgTimmy from "../assets/images/timmy.jpg";

export default function About() {
  return (
    <PageFadeTransition>
      <div className="overflow-hidden flex flex-col items-center justify-center gap-40">
        {/* ---------------- Scene 1 ---------------- */}
        <PaperFan
          className="about-scene-one flex items-center justify-center"
          width="55rem"
          height="45rem"
          layers={[
            {
              x: 0,
              y: 0,
              rot: 0,
              color: "var(--bgSecondary)",
              width: "50rem",
              height: "40rem",
              content: (
                <div className="flex flex-col items-center justify-center gap-20 h-full text-center max-w-3xl mx-auto px-4 overflow-hidden">
                  <h1 className="text-4xl uppercase tracking-widest text-[var(--accentPrimary)]">
                    About Me
                  </h1>
                  <p className="mt-4">
                    Hello, I'm Kaja — a 2026 web development graduate based in Norway.
                    Feel free to scroll your way through my story!
                  </p>
                  <div className="mt-4">
                    <ScrollIndicator />
                  </div>
                </div>
              ),
            }
          ]}
        ></PaperFan>

        {/* ---------------- Scene 2 ---------------- */}

        <PaperFan
          className="about-scene-two flex items-center justify-center"
          width="55rem"
          height="45rem"
          layers={[
            {
              x: 0,
              y: 0,
              rot: 5,
              color: "var(--bgSecondary)",
              width: "50rem",
              height: "40rem",
              content: (
                <div className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto px-4 overflow-hidden gap-10">
                  <h2 className="text-2xl text-[var(--textSecondary)] uppercase">
                    My Web Development Philosophy
                  </h2>
                  <p className="mt-4 text-left">
                    I believe that great web design is first and foremorst grounded in a
                    deep understanding of user needs and behaviours, combined with
                    appripriate technology choices tailored for each project. My goal is
                    to create engaging, intuitive, and accessible digital experiences for
                    users, and at the same time ensure structured, maintainable, and
                    scalable codebases for developers.
                  </p>
                </div>
              ),
            }
          ]}
        ></PaperFan>




        {/* ---------------- Scene 3 ---------------- */}

        <PaperFan
          className="about-scene-three flex items-center justify-center"
          width="55rem"
          height="45rem"
          layers={[
            {
              x: 0,
              y: 0,
              rot: -1,
              color: "var(--bgSecondary)",
              width: "50rem",
              height: "40rem",
              content: (
                <div className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto px-4 overflow-hidden">
                  <h2 className="text-2xl text-[var(--textSecondary)] uppercase">
                    In My Free Time
                  </h2>
                  <p className="mt-4 leading-relaxed text-left">
                    When I'm not developting web-projects I spent time with my flock of birds.
                  </p>
                </div>
              )
            },
            {
              x: 800,
              y: 300,
              rot: 10,
              color: "transparent",
              shadow: "none",
              content: (
                <PolaroidCard
                  src={ImgTimmy}
                  alt="My budgie Timmy"
                  caption=""
                />
              )
            },
            {

              x: 700,
              y: 500,
              rot: -1,
              color: "transparent",
              shadow: "none",
              content: (
                <PolaroidCard
                  src={ImgTrulte}
                  alt="My with my cockatiel Trulte"
                  caption=""
                />
              )
            },
            {

              x: 200,
              y: 550,
              rot: 1,
              color: "transparent",
              shadow: "none",
              content: (
                <PolaroidCard
                  src={ImgRipley}
                  alt="My budgie Ripley"
                  caption=""
                />
              )
            },
            {
              x: 0,
              y: 0,
              rot: -5,
              color: "transparent",
              shadow: "none",
              content: (
                <PolaroidCard
                  src={ImgBudgies}
                  alt="Me with my budgies Timmy & Ripley"
                  caption=""
                />
              )
            }
          ]}


        ></PaperFan>



        {/* ---------------- Scene 4 ---------------- */}

        <PaperFan

          className="about-scene-four flex items-center justify-center"
          width="55rem"
          height="45rem"
          layers={[
            {
              x: 0,
              y: 0,
              rot: 2,
              color: "var(--bgSecondary)",
              width: "50rem",
              height: "40rem",
              content: (

                <div className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto px-4 overflow-hidden">
                  <h2 className="text-2xl text-[var(--textSecondary)] uppercase">
                    My Projects
                  </h2>
                  <p className="mt-4 leading-relaxed text-left">
                    Throughout my studies and personal time, I've worked on a variety of
                    web projects. These range from small personal websites to more complex
                    applications. Each project has been an opportunity to learn and grow
                    as a developer, and I'm excited to continue building and sharing my
                    work with the world.
                  </p>
                </div>
              ),
            }
          ]}
        ></PaperFan >
      </div>
    </PageFadeTransition >

  );
}
