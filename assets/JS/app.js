document.addEventListener("DOMContentLoaded", () => {
  const moduleList = document.querySelector("#module-lists");
  const displayArea = document.querySelector("#display-area");
  const displayContent = document.querySelector(".display-content");
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
      Challenge: ["index.html", "recording.html", "quiz.html", "README.md"],
      Project: ["index.html", "recording.html", "quiz.html", "README.md"],
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
    Module_03: {
      Conditional_Statements: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      Iteration: ["index.html", "recording.html", "quiz.html", "README.md"],
      Scope: ["index.html", "recording.html", "quiz.html", "README.md"],
      Object_This: ["index.html", "recording.html", "quiz.html", "README.md"],
      Git_Guide: ["index.html", "recording.html", "quiz.html", "README.md"],
    },
    Module_04: {
      Create_Append: ["index.html", "recording.html", "quiz.html", "README.md"],
      Event_Listeners: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      Timers_Intervals: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      Data_Attributes: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      Local_Storage: ["index.html", "recording.html", "quiz.html", "README.md"],
      Git_Guide: ["index.html", "recording.html", "quiz.html", "README.md"],
    },
    Module_05: {
      Click_Events: ["index.html", "recording.html", "quiz.html", "README.md"],
      Event_Delegation: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      Bootstrap_Layout: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      Bootstrap_Utilities: [
        "index.html",
        "recording.html",
        "quiz.html",
        "README.md",
      ],
      jQuery_UI: ["index.html", "recording.html", "quiz.html", "README.md"],
      Git_Guide: ["index.html", "recording.html", "quiz.html", "README.md"],
    },
  };

  function loadModule() {
    closeDisplayContent();
    // object.keys will return keys array of dirStructure [Module_01,Module_02]
    Object.keys(dirStructures).forEach((module) => {
      // console.log("Module => ", module);

      //   moduleList.classList.add("module-lists");
      const moduleName = document.createElement("li");
      moduleName.innerText = module;

      moduleName.addEventListener("click", () => {
        closeDisplayContent();
        toggleModule(module, moduleName);
      });

      // append the Module Name to existing module List.
      moduleList.appendChild(moduleName);
    });
  }

  function toggleModule(module, moduleName) {
    if (moduleName.classList.contains("active")) {
      toggler(moduleName);
    } else {
      closeAllModule();
      const projectFolders = dirStructures[module];

      //add toggled state
      moduleName.classList.add("active");
      const projectList = document.createElement("ul");
      projectList.classList.add("project-lists");

      Object.keys(projectFolders).forEach((project) => {
        const projectName = document.createElement("li");
        projectName.innerText = project;

        projectName.addEventListener("click", () => {
          closeDisplayContent();
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
    if (projectName.classList.contains("active")) {
      toggler(projectName);
    } else {
      closeAllProject();
      const fileFolders = dirStructures[module][project];
      //   console.log(fileFolders);
      projectName.classList.add("active");
      const fileList = document.createElement("ul");
      fileList.classList.add("project-files");

      fileFolders.forEach((file) => {
        const fileName = document.createElement("li");
        fileName.innerText = removeExtension(file);

        fileName.addEventListener("click", () => {
          closeDisplayContent();
          loadFiles(module, project, file);
          // console.log(module, project, file);
        });
        fileList.appendChild(fileName);
      });

      // we need to append the ul>li list to toggled Project
      projectName.insertAdjacentElement("afterend", fileList);
    }
  }

  function loadFiles(module, project, file) {
    // closeDisplayContent();

    // create section for iframe parent container
    const iframeContainer = document.createElement("div");
    iframeContainer.classList.add("display-content");

    // create close button
    const closeBtn = document.createElement("button");
    const closeBtni = document.createElement("i");
    closeBtni.classList.add("close-btn", "fa-solid", "fa-circle-xmark");
    closeBtn.appendChild(closeBtni);
    // create iframe for the file
    // displayContent.innerHTML = "";
    // clear last append iframe
    // if (displayContent.lastElementChild.classList.contains("opened")) {
    //   let openedFile = document.querySelector(".opened");
    //   console.log(openedFile);

    //   openedFile.remove();
    // }

    // Append file to displayarea
    const iframe = document.createElement("iframe");
    const filePath = `./assets/module_units/${module}/${project}/${file}`;
    iframe.src = filePath;
    iframe.classList.add("opened");

    iframeContainer.appendChild(iframe);
    iframeContainer.appendChild(closeBtn);
    displayArea.appendChild(iframeContainer);

    // console.log(displayContent.lastElementChild);
    closeBtn.addEventListener("click", closeDisplayContent);
  }

  // this function will remove the file extension using split the string method
  function removeExtension(fileName) {
    return fileName.split(".").slice(0, -1).join("."); // Remove file extension
  }

  // this function will open and close the modules, projects
  function toggler(activeElement) {
    activeElement.classList.remove("active");
    activeElement.nextElementSibling.remove();
  }

  function closeAllModule() {
    // check all the active and close the next element
    const openedModules = document.querySelectorAll("#module-lists .active");
    openedModules.forEach((openedModule) => {
      openedModule.classList.remove("active");
      openedModule.nextElementSibling.remove();
    });
    closeDisplayContent();
  }

  function closeAllProject() {
    const openedProjects = document.querySelectorAll(".project-lists .active");
    openedProjects.forEach((openedProject) => {
      openedProject.classList.remove("active");
      openedProject.nextElementSibling.remove();
    });
    closeDisplayContent();
  }

  function closeDisplayContent() {
    if (displayArea.firstElementChild) {
      displayArea.firstElementChild.remove();
    }
  }

  loadModule();
});
