export const cats = fetch("https://api.thecatapi.com/v1/breeds")
  .then((response: Response) => response.json())
  .catch((error: Error) => {
    console.error("Error:", error);
  });

export class cat_app extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.mount();
  }

  async mount() {
    const input = this.shadowRoot?.querySelector("input");
    const button = this.shadowRoot?.querySelector("button");
    input?.addEventListener("change", (catData: any) => {
      const searchText = catData.target?.value;
    });
    button?.addEventListener("click", () => {
      console.log("hi");
    });
    const data = await cats;
    this.render(data);
  }

  render(data: any[]) {
    if (this.shadowRoot && Array.isArray(data) && data.length > 0) {
      const link = this.ownerDocument.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "../dist/index.css");

      const button = this.ownerDocument.createElement("button");
      button.textContent = "click";
      const input = this.ownerDocument.createElement("input");

      data.forEach((catData) => {
        const catList = this.ownerDocument.createElement("div");
        const h2 = this.ownerDocument.createElement("h2");
        h2.classList.add("name");
        h2.textContent = catData.name;

        const p = this.ownerDocument.createElement("p");
        p.classList.add("des");
        p.textContent = catData.description;

        catList.appendChild(h2);
        catList.appendChild(p);
        this.shadowRoot?.appendChild(catList);
      });
      console.log(data);

      this.shadowRoot.appendChild(input);
      this.shadowRoot.appendChild(button);
      this.shadowRoot.appendChild(link);
    }
  }
}

customElements.define("app-cat", cat_app);
