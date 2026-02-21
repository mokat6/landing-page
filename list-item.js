class ListItem extends HTMLElement {
  connectedCallback() {
    const listName = this.getAttribute("listName");
    const link = this.getAttribute("link");
    const github = this.getAttribute("github");
    const local = this.hasAttribute("local");

    this.innerHTML = `
        <div class="project-link ${local ? "local" : ""}">
          <a class="project-main ${github ? "" : "main-no-github"}" href="${link}" target="_blank">
            ${listName}
          </a>
         ${
           github
             ? `
                <a class="project-github" title='Github' href="${github}" target="_blank"></a>
            `
             : ""
         }
        </div>
      `;
  }
}

customElements.define("list-item", ListItem);
