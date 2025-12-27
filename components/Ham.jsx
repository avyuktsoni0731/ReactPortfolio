"use client";
import StaggeredMenu from "./StaggeredMenu";
import { useResume } from "./ResumeContext";

const Ham = () => {
  const { openResumeModal } = useResume();

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home section", link: "#main" },
    { label: "About", ariaLabel: "Learn about me", link: "#about" },
    { label: "Skills", ariaLabel: "View my skills", link: "#skills" },
    { label: "Projects", ariaLabel: "See my projects", link: "#projects" },
    {
      label: "Experience",
      ariaLabel: "View my experiences",
      link: "#experiences",
    },
    { label: "Contact", ariaLabel: "Get in touch", link: "#connect" },
    {
      label: "Resume",
      ariaLabel: "View my resume",
      onClick: openResumeModal,
    },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/avyuktsoni0731" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/avyuktsoni0731" },
  ];

  return (
    <div className="lg:hidden">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#111"
        changeMenuColorOnOpen={true}
        colors={["#0a192f", "#5227ff"]}
        logoUrl="/Globe.png"
        accentColor="#5227ff"
        isFixed={true}
        closeOnClickAway={true}
      />
    </div>
  );
};

export default Ham;
