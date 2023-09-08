"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import stock1 from "../../stockImage1.png";
import LoadingScreen from "../loading";

const modules = [
  {
    title: "Reproducibility in Bioinformatics - (1)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    learningGoal: "Introduction to E-PACERR",
    thumbnail: stock1,
    link: "https://unomaha.instructure.com/courses/52681/modules/items/1826925",
  },
  {
    title: "Reproducibility in Bioinformatics - (2)",
    description:
      "Faucibus a pellentesque sit amet porttitor. Felis bibendum ut tristique et egestas. Adipiscing bibendum est ultricies integer. Faucibus a pellentesque sit amet porttitor eget dolor. Ultricies integer quis auctor elit sed vulputate mi. Risus nullam eget felis eget nunc lobortis mattis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.",
    learningGoal: "What is Bioinformatics?",
    thumbnail: stock1,
    link: "https://unomaha.instructure.com/courses/52681/modules/items/1811699",
  },
  {
    title: "Data Management in Bioinformatics",
    description:
      "Fermentum posuere urna nec tincidunt praesent. In eu mi bibendum neque egestas congue quisque egestas diam. In metus vulputate eu scelerisque. Sed sed risus pretium quam vulputate dignissim suspendisse. Netus et malesuada fames ac turpis egestas. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.",
    learningGoal: "To learn something valuable",
    thumbnail: stock1,
    link: "https://unomaha.instructure.com/courses/52681/modules/items/1826932",
  },
  {
    title: "Code Management in Bioinformatics",
    description:
      "Semper risus in hendrerit gravida rutrum quisque non tellus. Malesuada fames ac turpis egestas maecenas pharetra convallis. Donec adipiscing tristique risus nec feugiat in fermentum posuere. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Quisque id diam vel quam.",
    learningGoal: "Introduction to E-PACERR",
    thumbnail: stock1,
    link: "https://unomaha.instructure.com/courses/52681/modules/items/1826933",
  },
  {
    title: "Case Studies for Resposible Research in Bioinformatics",
    description:
      "Cras adipiscing enim eu turpis egestas. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Proin fermentum leo vel orci. Bibendum ut tristique et egestas quis.",
    learningGoal: "What is Bioinformatics?",
    thumbnail: stock1,
    link: "linkToCanvasModule.com",
  },
  {
    title: "Databases and Reproducible Data Mining in Bioinformatics",
    description:
      "Nec feugiat in fermentum posuere urna. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Elit eget gravida cum sociis natoque penatibus et magnis. Sapien eget mi proin sed libero enim sed faucibus turpis. Nam libero justo laoreet sit amet cursus. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Semper eget duis at tellus at urna.",
    learningGoal: "To learn something valuable",
    thumbnail: stock1,
    link: "linkToCanvasModule.com",
  },
];

const ModulesPage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 999px)").matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="content">
        <LoadingScreen></LoadingScreen>
      </div>
    );
  }

  if (isLargeScreen) {
    return (
      <div className="content">
        <div className="buffer"></div>
        <div className="section-separater"></div>
        <div className="container">
          {modules.map((module, index) => (
            <div className="organizer">
              <div
                key={index}
                className={
                  index % 2 === 0 ? "module even-module" : "module odd-module"
                }
              >
                {index % 2 === 0 ? (
                  <>
                    <Image
                      className="moduleThumbnail left"
                      src={module.thumbnail}
                      alt={module.title}
                    />
                    <div className="moduleContent right">
                      <h2 className="moduleTitle">{module.title}</h2>
                      <h3 className="moduleGoal">{module.learningGoal}</h3>
                      <p className="moduleText">{module.description}</p>
                      <a className="link" target="_blank" href={module.link}>
                        Visit Module on Canvas
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="moduleContent left">
                      <h2 className="moduleTitle">{module.title}</h2>
                      <h3 className="moduleGoal">{module.learningGoal}</h3>
                      <p className="moduleText">{module.description}</p>
                      <a className="link" target="_blank"  href={module.link}>
                        Visit Module on Canvas
                      </a>
                    </div>
                    <Image
                      className="moduleThumbnail right"
                      src={module.thumbnail}
                      alt={module.title}
                    />
                  </>
                )}
              </div>
              <div className="section-separater"></div>
            </div>
          ))}
        </div>
        <div className="buffer"></div>
      </div>
    );
  }
  if (!isLargeScreen) {
    return (
      <div className="content">
        <div className="buffer"></div>
        <div className="section-separater"></div>
        <div className="container">
          {modules.map((module, index) => (
            <div key={index} className="module">
              <>
                <Image
                  className="moduleThumbnail left"
                  src={module.thumbnail}
                  alt={module.title}
                />
                <div className="moduleContent right">
                  <h2 className="moduleTitle">{module.title}</h2>
                  <h3 className="moduleGoal">{module.learningGoal}</h3>
                  <p className="moduleText">{module.description}</p>
                  <a className="link" target="_blank" href={module.link}>
                    Visit Module on Canvas
                  </a>
                </div>
              </>
              <div className="section-separater"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ModulesPage;
