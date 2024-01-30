import React, { useState, useEffect } from "react";
import ContentItem from "./contentItem";
import "../components/content.css";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const ContentPage = () => {
  const [fileList, setFileList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const storageRef = ref(storage, "vids");
        const files = await listAll(storageRef);

        const fileArray = await Promise.all(
          files.items.map(async (file) => {
            const url = await getDownloadURL(file);
            // console.log(file);
            // console.log(url, file.name);
            return { type: "video", source: url, title: file.name };
          })
        );

        setFileList(fileArray);
      } catch (error) {
        console.error("Error fetching files:", error.message);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className={isDarkMode ? "content-page dark-mode" : "content-page"}>
      <h1 className="stream-heading">Stream SpOTT</h1>
      <div className="theme-toggler" onClick={toggleTheme}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </div>
      <div className="content-grid">
        {fileList.map((file, index) => (
          <ContentItem key={index} source={file} />
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
