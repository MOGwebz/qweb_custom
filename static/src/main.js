/** @odoo-module */

import { mount, whenReady } from "@odoo/owl";
import { Page } from "./page";
import { WebClient } from "./web_client";
import { templates } from "@web/core/assets";

// Mount the Page Component when the document.body id ready

whenReady(() => {
  // mount(() => {
  //   Page, document.body, { templates, dev: true, name: "pythonQweb" };
  // });
  mount(WebClient, document.body, { templates, dev: true, name: "pythonQweb" });
});

console.log("this is the Main js");
