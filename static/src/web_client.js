/** @odoo-module */

import { Component } from "@odoo/owl";
import { Navbar } from "./navbar";
import { TodoList } from "./todoo/todoo_list";

export class WebClient extends Component {
  static template = "qweb_custom.WebClient";
  static components = { Navbar, TodoList };
}
