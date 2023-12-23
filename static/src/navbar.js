/** @odoo-module */

import { Component } from "@odoo/owl";

export class Navbar extends Component {
  static template = "qweb_custom.Navbar";
  static props = {
    currentApp: String,
  };
}
