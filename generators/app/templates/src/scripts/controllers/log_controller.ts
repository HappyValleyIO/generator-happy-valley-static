import { Controller } from "stimulus";

export default class LogController extends Controller {
  connect() {
    console.log("I am the log controller!");
  }
}
