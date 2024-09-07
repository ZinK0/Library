document.addEventListener("DOMContentLoaded", () => {
  const moduleList = document.querySelector("#module-lists");
  const displayArea = document.querySelector("#display-area");
  const dirStructures = {
    Module_01: {
      HTML: ["index.html", "recording.html", "quiz.html", "README.md"],
      Attributes: ["index.html", "recording.html", "quiz.html", "README.md"],
      CSS_Selectors: ["index.html", "recording.html", "quiz.html", "README.md"],
      Box_Model: ["index.html", "recording.html", "quiz.html", "README.md"],
      CSS_Positioning: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      Git_Guide: ["index.html", "recording.html", "quiz.html", "README.md"],
    },
    Module_02: {
      Wireframing: ["index.html", "recording.html", "quiz.html", "README.md"],
      FLexbox_Layout: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      Responsive_Design: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      Pseudo_Classes: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      CSS_Variables: ["index.html", "recording.html", "quiz.html", "README.md"],
    },
  };

  function loadModule() {
    // object.keys will return keys array of dirStructure [Module_01,Module_02]
    Object.keys(dirStructures).forEach((module) => {
      console.log("Module => ", module);

      //   moduleList.classList.add("module-lists");
      const moduleName = document.createElement("li");
      moduleName.innerText = module;

      moduleName.addEventListener("click", () => {
        toggleModule(module, moduleName);
      });

      // append the Module Name to existing module List.
      moduleList.appendChild(moduleName);
    });
  }

  function toggleModule(module, moduleName) {
    if (moduleName.classList.contains("active")) {
    } else {
      const projectFolders = dirStructures[module];

      //add toggled state
      moduleName.classList.add("active");
      const projectList = document.createElement("ul");
      projectList.classList.add("project-lists");

      Object.keys(projectFolders).forEach((project) => {
        const projectName = document.createElement("li");
        projectName.innerText = project;

        projectName.addEventListener("click", () => {
          toggleFiles(module, project, projectName);
        });

        // append the project name to ul(projectLists)
        projectList.appendChild(projectName);
      });
      // append projectList next to toggledModule
      moduleName.insertAdjacentElement("afterend", projectList);
    }
  }

  function toggleFiles(module, project, projectName) {
    const fileFolders = dirStructures[module][project];
    //   console.log(fileFolders);
    const fileList = document.createElement("ul");
    fileList.classList.add("project-files");

    fileFolders.forEach((file) => {
      const fileName = document.createElement("li");
      fileName.innerText = removeExtension(file);
      fileList.appendChild(fileName);
    });

    // we need to append the ul>li list to toggled Project
    projectName.insertAdjacentElement("afterend", fileList);
  }

  function removeExtension(fileName) {
    return fileName.split(".").slice(0, -1).join("."); // Remove file extension
  }

  loadModule();
});
