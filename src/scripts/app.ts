import Turbolinks from "turbolinks";
import { Application } from "stimulus";

import AlertController from "~scripts/controllers/alert_controller";
import LogController from "~scripts/controllers/log_controller";

Turbolinks.start();

const app = Application.start();
app.register("alert", AlertController);
app.register("log", LogController);
