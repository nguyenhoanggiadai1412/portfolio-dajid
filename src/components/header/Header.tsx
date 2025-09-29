// React hooks
import { useEffect, useState } from "react";

// Constants
import { LOGO } from "../../constants/logo";
import { NAV_ITEMS } from "../../constants/navItems";
import { DEFAULT_THEME } from "../../constants/theme";

// Components
import GooeyNav from "../Reactbits/GooeyNav/GooeyNav";
import ThemeToggle from "../themeToggle/ThemeToggle";

// Styles
import styles from "./Header.module.css";
interface HeaderProps {
  selectedNavItem: (index: number) => void;
}
const Header:React.FC<HeaderProps> = ({selectedNavItem}) => {
    
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || DEFAULT_THEME.DARK);

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.body.getAttribute("data-theme") || DEFAULT_THEME.DARK);
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);
  const handleClickItem = (index: number) => {
    selectedNavItem(index);
  }
    return (
        <header>
          <div className={styles.logo}>
            <img src={theme === DEFAULT_THEME.DARK ? LOGO.White : LOGO.Black } alt="" />
          </div>
          <GooeyNav 
            items={NAV_ITEMS}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            isvisableIndex={handleClickItem}
          />
          <div className={styles.themeControl}>
            <ThemeToggle></ThemeToggle>
          </div>
        </header>
    )
}

export default Header