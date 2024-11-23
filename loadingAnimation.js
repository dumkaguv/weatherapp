export default class LoadingAnimation {
  show(loadingElement) {
    const loadingElementDiv = document.querySelector(loadingElement);
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
