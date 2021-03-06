

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ 'count' ];
  connect(){
    console.log(this.countTarget)
  }
  refresh() {
    fetch('/surfboards', { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then((data) => {
        this.countTarget.innerHTML = data.surfboards.length;      });
  }
}
