import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <section id="home"
        className="min-h-screen flex flex-col items-center justify-center w-full text-center border-b border-white border-b-[1px]"
      >
        <div>
          <h1 className="text-7xl sm:text-7xl font-bold">
            Hello, I&apos;m Will.<br />I&apos;m a Software Engineer.
          </h1>
          <div className="flex gap-4 justify-center mt-6">

            {/* Social Buttons */}
            {/* GitHub */}
            <a
              href="https://github.com/willchering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-white border-[1px] rounded-none bg-transparent text-white hover:bg-white hover:text-black transition-colors"
              aria-label="GitHub"
            >
              {/* GitHub Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/willchering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-white border-[1px] rounded-none bg-transparent text-white hover:bg-white hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              {/* LinkedIn Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
            </a>
            {/* CV */}
            <a
              href="https://drive.google.com/file/d/1_GQoCsj7kKlQ9N7fyRuk3YhrQwRZxA3f/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-white border-[1px] rounded-none bg-transparent text-white hover:bg-white hover:text-black transition-colors"
              aria-label="CV"
            >
              <p>CV</p>
            </a>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="#about-me"
            className="text-2xl sm:text-2xl px-6 py-2 border border-white border-[1px] rounded-none bg-transparent text-white font-semibold hover:bg-white hover:text-black transition-colors">
            Learn more
          </a>
        </div>
      </section>

      <section id="about-me"
        className="flex flex-col items-center w-full text-center border-b border-white border-b-[1px]"
      >
        <div className="mt-12">
          <h1 className="text-5xl sm:text-5xl font-bold text-center">
            About Me
          </h1>
        </div>
        <div className="mt-12 mb-12 flex flex-col md:flex-row justify-center items-start md:items-center w-full gap-12 px-4 max-w-8xl mx-auto">
          {/* About Me Card (Left) */}
          <div className="flex flex-col items-center bg-white/10 rounded-lg shadow-lg p-8 gap-6 basis-auto md:basis-1/2">
            {/* User Icon */}
            <div className="flex-shrink-0">
              <Image
                src="/profile/me.png"
                alt="Profile picture"
                width={100}
                height={100}
                className="rounded-full p-2 object-cover"
              />
            </div>
            {/* About Me Text */}
            <div className="text-center text-white">
              <p>
                I&apos;m a backend developer with experience in building cloud-native, microservice-based systems using Java, Spring Boot, and AWS.
                <br /> <br />
                I&apos;ve contributed to projects involving system modernization, risk prevention, and API development, with a strong focus on clean code, test-driven development, and Agile workflows.
                <br /> <br />
                While backend is my core strength, I&apos;m also comfortable across the full stack and enjoy mentoring, problem-solving, and exploring new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-and-skills" className="flex flex-col items-center w-full text-center border-b border-white border-b-[1px]">
  <div className="mt-12">
    <h2 className="text-5xl sm:text-5xl font-bold text-center">
      Technologies
    </h2>
  </div>
  <div className="mt-12 mb-12 flex flex-row flex-wrap justify-center w-full max-w-8xl mx-auto gap-4">
{[
  { name: "Java", icon: "/skills/java.png" },
  { name: "Springboot", icon: "/skills/springboot.png" },
  { name: "Next.js", icon: "/skills/nextjs_light.png" },
  { name: "Cloud", icon: "/skills/cloud.png" },
  { name: "Node.js", icon: "/skills/nodejs.png" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
  { name: "Git", icon: "/skills/git.png" },
  { name: "Docker", icon: "/skills/docker.png" },
  { name: "Terraform", icon: "/skills/terraform.png" }
].map((skill) => (
  <div
    key={skill.name}
    className="flex flex-col items-center justify-center bg-white/10 rounded-lg aspect-square min-w-[145px] min-h-[145px] max-w-[150px] max-h-[150px] text-white font-semibold p-10"
  >
    <Image
      src={skill.icon}
      alt={skill.name + ' icon'}
      width={40}
      height={40}
      className="mb-2"
    />
    <span
      className={`text-lg sm:text-xl text-center leading-tight ${
        skill.name === "Tailwind CSS" ? "whitespace-nowrap" : ""
      }`}
    >
      {skill.name}
    </span>
  </div>
))}
  </div>
</section>

      <section id="projects"
        className="min-h-screen flex flex-col justify-center w-full">
        <h2 className="text-5xl sm:text-5xl font-bold text-center mb-8 text-white">Projects</h2>

        {[
          {
            title: "Project One",
            description: "A brief description of Project One goes here.",
            image: "/projects/project1.png",
          },
          {
            title: "Project Two",
            description: "A brief description of Project Two goes here.",
            image: "/projects/project2.png",
          },
          {
            title: "Project Three",
            description: "A brief description of Project Three goes here.",
            image: "/projects/project1.png",
          },
          {
            title: "Project Four",
            description: "A brief description of Project Four goes here.",
            image: "/projects/project2.png",
          },
        ].map((project, idx) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row items-center bg-transparent w-full max-w-6xl mx-auto mb-12 gap-8"
          >
            <div className="flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={180}
                className="rounded shadow-lg object-cover"
              />
            </div>
            <div className="flex flex-col items-start md:items-start text-white w-full">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <button className="px-4 py-1 border border-white border-[1px] rounded-none bg-transparent text-white font-semibold hover:bg-white hover:text-black transition-colors">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}
