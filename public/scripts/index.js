const setButtonBehavior = (button) => {
  button.onclick = (event) => {
    const url = "http://localhost:8001/dep";
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        const {response} = data;
        console.log(response);
        const dockResContainer = document.querySelector("#dock-response");
        dockResContainer.innerText = response;
      });
  };
};

const main = () => {
  const button = document.querySelector("#docker-btn");
  setButtonBehavior(button);
};

window.onload = main;
