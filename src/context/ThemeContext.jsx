import { createContext, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const [savedVideos, setSavedVideos] = useState([]);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  const save = (data) => {
    const updated = [...savedVideos, data];
    setSavedVideos(updated);
  };

  const unsave = (data) => {
    const updated = savedVideos.filter((each) => each.id !== data.id);
    setSavedVideos(updated);
  };

  return (
    <ThemeContext.Provider value={[isLight, toggleTheme, savedVideos, save, unsave]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
