import cx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LuExternalLink } from "react-icons/lu";

type Experience = {
  company: string;
  website?: string;
  work: Array<{
    position: string;
    client?: string;
    duration: string;
    experience: Array<string>;
    technologies?: Array<string>;
  }>;
};

const Tabs = () => {
  const experiences: Array<Experience> = [
    {
      company: "Agoda",
      website: "https://www.agoda.com/",
      work: [
        {
          position: "Senior Fullstack Software Engineer",
          duration: "June 2022 - Present",
          experience: [
            "Meticulously crafting software solutions to turbocharge sales for hotels in diverse markets worldwide.",
            "Piloting the development and design of systems capable of processing a staggering 100k requests per minute.",
            "Paving the way for optimized teamwork efficiency by building substantial internal tools, with an emphasis on enhancing developer experiences, while shaving off operational workload.",
            "Championed the transformation, complete recomposition, and re-architecting of aging applications to incorporate newer tech stacks.",
            "Unveiled a prototype for a trailblazing property page chatbot, powered by OpenAI, designed to swiftly field end-user queries and deliver lucid hotel information.",
            "Relish the art of conducting coding interviews, always on the hunt for fresh talent 🙂.",
          ],
          technologies: [
            "React",
            "Scala",
            "Kotlin",
            "C#",
            "Kafka",
            "lot more...",
          ],
        },
      ],
    },
    {
      company: "Finastra",
      website: "https://www.finastra.com/",
      work: [
        {
          position: "Associate Software Engineer",
          duration: "April 2021 - May 2022",
          experience: [
            "Engineered a next-gen user interface portal for managing corporate banking loans, providing tailored solutions for multiple banks.",
            "Served as a full stack developer, creating APIs using Spring Boot and developing a highly customizable frontend with the help of Angular, while ensuring adherence to Angular's best practices.",
            "Designed unique dashboards (silver, gold, and platinum levels) with superior user experiences, which provided valuable data insights and allowed users to modify them according to their specific requirements.",
            "Enhanced user experience by enabling users to fully customize their dashboard, developed with Angular and Java SDUI.",
            "Ensured global website compliance by working on WCAG 2.0 standards.",
          ],
          technologies: ["Angular", "Material UI", "Java 8", "Spring"],
        },
      ],
    },
    {
      company: "Persistent",
      website: "https://www.persistent.com/",
      work: [
        {
          position: "Software Engineer",
          duration: "Sept 2020 - Feb 2021",
          client: "Robo Advisory Firm (Singapore)",
          experience: [
            "Aimed to deliver a robust application enabling clients to invest money and achieve their financial goals. Designed an architecture integrating a trading platform to heighten client revenue. Additionally, created a bespoke platform for experienced users to directly invest in stocks.",
            "Functioned as a backend developer.",
            "Collaborated closely with architects to design a distributed system.",
            "Created secure and robust API to protect financial transactions.",
            "Managed the asynchronous flow of application and handled multiple transactions.",
          ],
          technologies: [
            "AWS",
            "Docker",
            "Kubernetes",
            "Node.js (Express)",
            "React",
          ],
        },
        {
          position: "Software Engineer",
          duration: "June 2019 - Sept 2020",
          client: "Insurance Company (America)",
          experience: [
            "Provided a reliable application aiming at facilitating end users in purchasing bonds, a key revenue driver for the company, along with a considerable improvement in the mobile experience empowers drastically increased mobile-based bond purchases.",
            "Served as a UI developer.",
            "Worked across multiple teams.",
            "Managed the deployment on the staging server amongst other DevOps responsibilities.",
            "Engaged in customer communication and provided team support.",
          ],
          technologies: [
            "Angular",
            "Cypress",
            "Docker",
            "Java 8",
            "Spring Boot",
          ],
        },
        {
          position: "Intern",
          duration: "January 2019 - June 2019",
          experience: [
            "Received hands-on training with Angular and Node.js.",
            "Acquired skills to build robust and reusable components.",
            "Gained fundamental insights about industry operations.",
            "Gained experience working in a banking domain application.",
          ],
          technologies: ["Angular", "Node.js", "Selenium"],
        },
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(experiences[0]);

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-evenly">
      <ul className="flex flex-row justify-evenly gap-2 lg:flex-col lg:items-center lg:justify-start">
        {experiences.map((experience, index) => (
          <li
            key={experience.company}
            className={cx(
              "md:text-md lg:hover:underline-offset-3 flex cursor-pointer flex-row items-center justify-center gap-2 text-sm font-semibold text-orange-500 transition-all duration-200 lg:hover:underline",
              {
                "underline-offset-3 scale-125 underline lg:no-underline":
                  selectedTab.company === experience.company,
              },
            )}
            onClick={() => setSelectedTab(experience)}
          >
            {experience.company}
            {experience.website && (
              <a href={experience.website} target="_blank" className="hidden">
                <LuExternalLink />
              </a>
            )}
          </li>
        ))}
      </ul>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab ? selectedTab.company : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="min-h-[50vh] w-[100%] text-slate-500 lg:min-h-[80vh] lg:w-[70%]"
        >
          {selectedTab ? (
            <div className="flex flex-col items-start space-y-5">
              {selectedTab.work.map((work, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col items-start space-y-1">
                      <div className="font-semibold text-orange-500">
                        {work.position}
                      </div>
                      <div className="text-sm text-slate-400">
                        {work.duration}
                      </div>
                    </div>
                  </div>
                  <ul className="flex list-none flex-col items-start space-y-3">
                    {work.experience.map((experience, index) => (
                      <li
                        key={index}
                        className="flex before:mr-4 before:w-1 before:font-bold before:text-orange-400 before:content-['>']"
                      >
                        {experience}
                      </li>
                    ))}
                  </ul>
                  {work.technologies && (
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                      {work.technologies.map((technology, index) => (
                        <div
                          key={index}
                          className="flex flex-row items-center justify-center rounded-full bg-orange-700 px-3 py-2 text-sm text-slate-200"
                        >
                          {technology}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Tabs;
