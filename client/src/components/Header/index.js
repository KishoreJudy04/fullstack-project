import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  Nav,
  NavContainer,
  Logo,
  DesktopNav,
  NavLink,
  MobileMenuButton,
  MobileNav,
} from "./styledComponents";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, clientHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + clientHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo>Kishore</Logo>

        <DesktopNav>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              $active={activeSection === link.id}
            >
              {link.label}
            </NavLink>
          ))}
        </DesktopNav>

        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </NavContainer>

      <MobileNav $isOpen={isMenuOpen}>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            $active={activeSection === link.id}
          >
            {link.label}
          </NavLink>
        ))}
      </MobileNav>
    </Nav>
  );
}
