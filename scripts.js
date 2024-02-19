class CheckboxListComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ul class="checkbox-list">
          <li><input type="checkbox" id="checkbox1" checked><label for="checkbox1"></label>Meditation</li>
          <li><input type="checkbox" id="checkbox2"><label for="checkbox2"></label>Pick up Anna</li>
          <li><input type="checkbox" id="checkbox3"><label for="checkbox3"></label>Set up a meeting with Jay</li>
          <li><input type="checkbox" id="checkbox4"><label for="checkbox4"></label>Finish Daily Ui</li>
          <li><input type="checkbox" id="checkbox5"><label for="checkbox5"></label>Second ets on article</li>
          <li><input type="checkbox" id="checkbox6" checked><label for="checkbox6"></label>Email Chris</li>
        </ul>
      `;
    }
  }
  
  customElements.define('checkbox-list-component', CheckboxListComponent);


  class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="footer">
          <p class="para"> Pull from recurring lists</p>
          <button class="c1">Daily</button>
          <button class="c2">Monthly</button>
        </div>
      `;
    }
  }
  
  customElements.define('footer-component', FooterComponent);
  
  class Footer2Component extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="footer2">
          <button class="c4">Weekly</button>
          <button class="c5">Occasional</button>
        </div>
      `;
    }
  }
  
  customElements.define('footer2-component', Footer2Component);
  