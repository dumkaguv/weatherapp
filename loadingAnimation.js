export default class LoadingAnimation {
  constructor() {
  }

  show(loadingElement) {
    const loadingElementDiv = document.querySelector(loadingElement);
    console.log(loadingElementDiv)
    loadingElementDiv.classList.add("loading-element");
    loadingElementDiv.insertAdjacentHTML(
      "afterbegin",
      this.getDotsTemplate()
    );
  }

  hide(loadingElement) {
    const loadingElementDiv = document.querySelector(loadingElement);
    loadingElementDiv.classList.remove("loading-element");
    const dotsDiv = document.querySelector(
      `${loadingElement} .loading-dots`
    );
    console.log(dotsDiv)
    dotsDiv.remove();
  }

  getDotsTemplate() {
    return `    
      <div class="loading-dots">
        <span class="loading-dot">.</span>
        <span class="loading-dot">.</span>
        <span class="loading-dot">.</span>
      </div>
    `;
  }
}
