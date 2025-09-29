import { CiCloudMoon,CiCloudSun } from "react-icons/ci";
import { Space, Switch } from 'antd';
import styles from "./ThemeToggle.module.css"
import { useEffect, useState } from "react";
import { DEFAULT_THEME } from "../../constants/theme";

function ThemeToggle() {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === DEFAULT_THEME.DARK;
    return document.body.getAttribute("data-theme") === DEFAULT_THEME.DARK;
  });

  useEffect(() => {
    const theme = isDarkMode ? DEFAULT_THEME.DARK : DEFAULT_THEME.LIGHT;
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <Space direction="vertical">
      <Switch
        checked={isDarkMode}
        onChange={setIsDarkMode}
        checkedChildren={<CiCloudMoon fontSize={20}  />}
        unCheckedChildren={<CiCloudSun style={{ fontSize: 20, marginTop: -5 } } />}
        className={styles.switch}
      />
    </Space>
  );
}

export default ThemeToggle
