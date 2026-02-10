import PageFadeTransition from "../animations/PageFadeTransition";
import ScrollIndicator from "../components/ui/ScrollIndicator";

export default function About() {
  return (
    <PageFadeTransition>
      {/* ---------------- Scene 1 ---------------- */}
      <div className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto px-4 overflow-hidden">
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

      {/* ---------------- Scene 2 ---------------- */}
      <div className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto px-4 overflow-hidden">
        <h2 className="text-2xl text-[var(--textSecondary)] uppercase">
          My Web Development Philosophy
        </h2>
        <p className="mt-4 leading-relaxed">
          I believe that great web design is first and foremorst grounded in a
          deep understanding of user needs and behaviours, combined with
          appripriate technology choices tailored for each project. My goal is
          to create engaging, intuitive, and accessible digital experiences for
          users, and at the same time ensure structured, maintainable, and
          scalable codebases for developers.
        </p>
      </div>

      {/* ---------------- Scene 3 ---------------- */}

      <div className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto px-4 overflow-hidden">
        <h2 className="text-2xl text-[var(--textSecondary)] uppercase">
          In My Free Time
        </h2>
        <p className="mt-4 leading-relaxed">
          When I'm not developting awesome web applications, I endulge in a
          variety of hobbies. I spend most of my time as a bird mum to my two
          budgies, Timmy and Ripley. As well other pet birds in need of a foster
          home through the organisation{" "}
          <a href="https://www.fugleteamet.no/" target="_blank">
            Fugleteamet
          </a>
          .
        </p>

        <p>
          I also enjoy DIY projects, reading, playing the piano, and exploring
          new places.
        </p>
      </div>

      {/* ---------------- Scene 3 ---------------- */}

      <div className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto px-4 overflow-hidden">
        <h2 className="text-2xl text-[var(--textSecondary)] uppercase">
          My Projects
        </h2>
        <p className="mt-4 leading-relaxed">
          Throughout my studies and personal time, I've worked on a variety of
          web projects. These range from small personal websites to more complex
          applications. Each project has been an opportunity to learn and grow
          as a developer, and I'm excited to continue building and sharing my
          work with the world.
        </p>
      </div>
    </PageFadeTransition>
  );
}
