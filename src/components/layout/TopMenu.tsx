import "../../assets/css/header.css";

interface TopMenuProps {
  onHome: () => void;
  onAbout: () => void;
  onSkills: () => void;
  onProject: () => void;
  onDesign: () => void;
  onContact: () => void;
  scrolled: boolean;
}

const TopMenu = ({
  onHome,
  onAbout,
  onSkills,
  onProject,
  onDesign,
  onContact,
  scrolled,
}: TopMenuProps) => {
  return (
    <div className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header-container">
        <div className="main-logo" onClick={onHome}>
          Eunja’s Portfolio
        </div>
        <nav className="header-nav">
          <button onClick={onAbout}>About</button>
          <button onClick={onSkills}>Skill</button>
          <button onClick={onProject}>Project</button>
          <button onClick={onDesign}>Design</button>
          <button onClick={onContact}>Contact</button>
        </nav>
      </div>
    </div>
  );
};

export default TopMenu;
