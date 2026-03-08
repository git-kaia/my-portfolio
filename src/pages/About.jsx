import PageFadeTransition from "../animations/PageFadeTransition";
import ScrollIndicator from "../components/ui/ScrollIndicator";
import PaperFan from "../components/ui/PaperFan";
import AboutInfoCard from "../components/cards/AboutInfoCard";
import PolaroidCard from "../components/cards/PolaroidCard";
import ImgBudgies from "../assets/images/me-and-my-budgies.JPG";
import ImgTrulte from "../assets/images/me-and-trulte.jpg";
import ImgRipley from "../assets/images/ripley.jpg";
import ImgTimmy from "../assets/images/timmy.jpg";
import ImgGorm from "../assets/images/gorm.jpg";
import ImgMe from "../assets/images/kaja.jpg";
import ImgBw from "../assets/images/kaja-bw.JPG";

export default function About() {
  return (
    <PageFadeTransition>
      <div className="overflow-hidden flex flex-col items-center justify-center gap-10">
        {/* ---------------- Scene 1 ---------------- */}
        <PaperFan
          className="about-scene-one flex items-center justify-center min-h-[calc(100vh-var(--header-h))]"
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
              padding: "6rem 6rem 0 6rem",
              content: (
                <AboutInfoCard title="About Me">
                  <p className="mb-10">
                    Hello, I'm Kaja — a 2026 web development graduate based in
                    Norway. Feel free to scroll your way through my story!
                  </p>
                  <ScrollIndicator />
                </AboutInfoCard>
              ),
            },
            {
              x: 500,
              y: 0,
              rot: -2,
              color: "transparent",
              width: "20rem",
              height: "auto",
              shadow: "none",
              content: (
                <img
                  src={ImgBw}
                  alt="Kaja Emilie Berg"
                  className="about-photo w-full shadow-md"
                  loading="lazy"
                  decoding="async"
                />
              ),
            },
          ]}
        ></PaperFan>

        {/* ---------------- Scene 2 ---------------- */}

        <PaperFan
          className="about-scene-two flex items-center justify-center min-h-[calc(100vh-var(--header-h))]"
          width="55rem"
          height="45rem"
          layers={[
            {
              x: 200,
              y: 0,
              rot: 5,
              color: "var(--bgSecondary)",
              width: "50rem",
              height: "40rem",
              padding: "6rem",
              content: (
                <AboutInfoCard title="My Web Development Philosophy">
                  <p>
                    I believe that great web design is first and foremorst
                    grounded in a deep understanding of user needs and
                    behaviours, combined with appropriate technology choices
                    tailored for each project. My goal is to create engaging,
                    intuitive, and accessible digital experiences for users, and
                    at the same time ensure structured, maintainable, and
                    scalable codebases for developers.
                  </p>
                </AboutInfoCard>
              ),
            },
            {
              x: -400,
              y: -100,
              rot: -20,
              width: "20rem",
              height: "20rem",
              padding: "2rem",
              color: "var(--bgCardPrimary)",
              className: "about-info__hand",
            },
            {
              x: -400,
              y: -120,
              rot: -2,
              width: "20rem",
              height: "20rem",
              padding: "2rem",
              color: "var(--bgCardSecondary)",
              className: "about-info__hand about-info__zigzag",
              content: (
                <AboutInfoCard>
                  <p>
                    "Any sufficiently advanced technology is indistinguishable
                    from magic."
                    <br />
                    — Arthur C. Clarke
                  </p>
                </AboutInfoCard>
              ),
            },
          ]}
        ></PaperFan>

        {/* ---------------- Scene 3 ---------------- */}

        <PaperFan
          className="about-scene-three flex items-center justify-center min-h-[calc(100vh-var(--header-h))]"
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
              padding: "6rem",
              content: (
                <AboutInfoCard title="Beyond Coding">
                  <p>
                    When I'm not developing web-projects, I mostly spend time
                    with my flock of birds. Two budgies that I've had since
                    2023, and two cockatiels that became my foster birds in
                    2025.
                  </p>
                </AboutInfoCard>
              ),
            },
            {
              x: 800,
              y: 300,
              rot: 10,
              color: "transparent",
              shadow: "none",
              content: (
                <PolaroidCard src={ImgTimmy} alt="My budgie Timmy" caption="" />
              ),
            },
            {
              x: 600,
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
              ),
            },
            {
              x: 0,
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
              ),
            },
            {
              x: -200,
              y: 100,
              rot: -5,
              color: "transparent",
              shadow: "none",
              content: (
                <PolaroidCard
                  src={ImgBudgies}
                  alt="Me with my budgies Timmy & Ripley"
                  caption=""
                />
              ),
            },
            {
              x: -250,
              y: 400,
              rot: -10,
              color: "transparent",
              shadow: "none",
              content: (
                <PolaroidCard
                  src={ImgGorm}
                  alt="Gorm the cockatiel"
                  caption=""
                />
              ),
            },
          ]}
        ></PaperFan>

        {/* ---------------- Scene 4 ---------------- */}

        <PaperFan
          className="about-scene-four flex items-center justify-center min-h-[calc(100vh-var(--header-h))]"
          width="55rem"
          height="45rem"
          layers={[
            {
              x: -400,
              y: 0,
              rot: 0,
              color: "var(--bgSecondary)",
              width: "50rem",
              height: "40rem",
              padding: "6rem",
              content: (
                <AboutInfoCard title="Keep exploring">
                  <p>
                    The story doesn't end here, so I hope you explore my
                    projects or get in touch with me. Meanwhile I keep moving
                    towards the next summit.
                  </p>
                </AboutInfoCard>
              ),
            },
            {
              x: 200,
              y: 50,
              rot: -5,
              width: "16rem",
              height: "16rem",
              padding: "1rem",
              color: "var(--bgCardSecondary)",
              className: "about-info__hand",
              content: (
                <a href="/contact" className="block w-full h-full no-underline">
                  <AboutInfoCard>
                    <p className="text-2xl font-semibold">Contact me!</p>
                  </AboutInfoCard>
                </a>
              ),
            },
            {
              x: 100,
              y: -150,
              rot: 2,
              width: "16rem",
              height: "16rem",
              padding: "1rem",
              color: "var(--bgCardSecondary)",
              className: "about-info__hand",
              content: (
                <a href="/projects" className="block w-full h-full no-underline">
                  <AboutInfoCard>
                    <p className="text-2xl font-semibold text">View projects...</p>
                  </AboutInfoCard>
                </a>
              ),
            },
            {
              x: 900,
              y: 200,
              rot: -2,
              color: "transparent",
              shadow: "none",
              style: { pointerEvents: "none" },
              content: (
                <PolaroidCard
                  src={ImgMe}
                  alt="Me hiking in the mountains"
                  caption="See you at the summit?"
                />
              ),
            },
          ]}
        ></PaperFan>
      </div>
    </PageFadeTransition>
  );
}
