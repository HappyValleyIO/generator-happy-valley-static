import { Controller } from "stimulus";

export default class AlertController extends Controller {
  connect() {
    alert("I am the alert controller!");
  }
}
