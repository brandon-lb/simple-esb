export default new Map([
			['/blog', function hydrateButtons() {
  document.querySelectorAll(".tech-btn").forEach((el) => {
    const techUsed = el.querySelector(".tech-used");
    el.addEventListener("click", async (ev) => {
      if (!el.attributes["data-active"]) {
        Object.assign(techUsed.style, {
          height: techUsed.scrollHeight + "px",
          opacity: "1",
          overflow: ""
        });
        el.attributes["data-active"] = true;
      } else {
        Object.assign(techUsed.style, {
          height: "0px",
          opacity: "0",
          overflow: "hidden"
        });
        el.attributes["data-active"] = false;
      }
    });
  });
}]
		]);