import { createContext, useState } from "react";

const ThemeContext = createContext();
const SavedVideosProvider = ({ children }) => {
  const [savedVideos, setSavedVideos] = useState([]);

  const save = (data) => {
    const updated = [...savedVideos, data];
    setSavedVideos(updated);
  };

  const unsave = (data) => {
    const updated = savedVideos.filter((each) => each.id !== data.id);
    setSavedVideos(updated);
  };

  return (
    <ThemeContext.Provider value={[savedVideos, save, unsave]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, SavedVideosProvider };
