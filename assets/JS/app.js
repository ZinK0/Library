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
      //   const moduleList = document.createElement("ul");
      const moduleName = document.createElement("li");
      moduleName.textContent = module;
      moduleList.appendChild(moduleName);
    });
  }

  loadModule();
});
