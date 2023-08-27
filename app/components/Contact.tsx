import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const socialLinks = [
    {
      platformName: BiLogoLinkedin,
      href: "https://www.linkedin.com/in/akshay-charwekar/",
      logoClass: "cursor-pointer",
      transitionClass:
        "transition-all duration-200 hover:scale-150 hover:text-orange-400",
    },
    {
      platformName: BiLogoGithub,
      href: "https://github.com/CharwekarAkshay",
      logoClass: "cursor-pointer",
      transitionClass:
        "transition-all duration-200 hover:scale-150 hover:text-orange-400",
    },
    {
      platformName: SiLeetcode,
      href: "https://leetcode.com/AkshayCharwekar/",
      logoClass: "cursor-pointer",
      transitionClass:
        "transition-all duration-200 hover:scale-150 hover:text-orange-400",
    },
    {
      platformName: BiLogoInstagram,
      href: "https://www.instagram.com/akshaycharwekar/",
      logoClass: "cursor-pointer",
      transitionClass:
        "transition-all duration-200 hover:scale-150 hover:text-orange-400",
    },
    {
      platformName: BiLogoGmail,
      href: "mailto:charwekar12@gmail.com",
      logoClass: "cursor-pointer",
      transitionClass:
        "transition-all duration-200 hover:scale-150 hover:text-orange-400",
    },
  ];

  return (
    <section
      id="contact"
      className="small-section flex flex-col text-slate-500"
    >
      <div className="section-heading">
        Get in touch
        <div className="h-[2px] w-full flex-1 rounded bg-orange-400"></div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center ">
        <p>
          I&apos;m always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>
        <p>
          If you&apos;d like to get in touch, please feel free to reach out
          through any of the following channels.
        </p>
        <div className="flex flex-row items-center justify-center space-x-4 py-6 text-xl">
          {socialLinks.map((socialLink) => {
            return (
              <a href={socialLink.href} target="_blank" key={socialLink.href}>
                <socialLink.platformName
                  className={`${socialLink.logoClass} ${socialLink.transitionClass}`}
                />
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        This website is lovingly 💙 created using Next.js and Tailwind CSS, and
        seamlessly deployed on Vercel.
      </div>
    </section>
  );
};

export default Contact;
