window.addEventListener("load", () => {
    const total = document.getElementById("total");
    const textInput = document.getElementById("inputdata");
    const colorInput = document.getElementById("color-picker");
    const FORM = document.getElementById("inputfield");
    const TEXT = document.getElementById("text");
  
    function getSavedValue(key, initialValue) {
      const savedValue = JSON.parse(localStorage.getItem(key));
  
      if (savedValue) return savedValue;
  
      if (initialValue instanceof Function) return initialValue();
  
      return initialValue;
    }
  
    function saveValue(value) {
      localStorage.setItem("carouseldata", JSON.stringify(value));
    }
  
    var screen = 0;
  
    var carousel = getSavedValue("carouseldata", [
      {
        color: "#fcd056",
        text: "Sujith"
      },
      {
        color: "#56fca1",
        text: "Varshan"
      },
      {
        color: "#a956fc",
        text: "Good"
      },
      {
        color: "#fc8056",
        text: "Cricket"
      },
    ]);
  
    function handleChangeSlide(left) {
      if (left) screen = screen - 1;
      else screen += 1;
      if (screen < 0) screen = 3;
      if (screen > 3) screen = 0;
      console.log("screen", screen);
      renderDisplay(screen);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      carousel[screen]["text"] =
        textInput.value == "" ? carousel[screen]["text"] : textInput.value;
      carousel[screen]["color"] =
        colorInput.value == "#000000"
          ? carousel[screen]["color"]
          : colorInput.value;
  
      colorInput.value = "#000000";
      renderDisplay(screen);
      textInput.value = "";
      console.log(carousel);
    }
  
    FORM.addEventListener("submit", handleSubmit);
  
    document
      .getElementById("arrow-right")
      .addEventListener("click", () => handleChangeSlide(false));
    document
      .getElementById("arrow-left")
      .addEventListener("click", () => handleChangeSlide(true));
  
    function renderDisplay(ind) {
      console.log("screen Render");
      console.log(carousel[ind]);
      TEXT.innerText = `${carousel[ind].text}`;
  
      total.style.backgroundColor = carousel[ind]["color"];
  
      saveValue(carousel);
    }
  
    renderDisplay(screen);
  });
