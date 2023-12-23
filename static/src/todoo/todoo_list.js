/** @odoo-module */

import { Component } from "@odoo/owl";
import { TodoItem } from "./todoo_item";

export class TodoList extends Component {
  static template = "qweb_custom.TodoList";
  static components = { TodoItem };

  setup() {
    this.todos = [
      { id: 1, description: "write a tutorial", isCompleted: true },
      { id: 2, description: "buy milk", isCompleted: false },
    ];
  }
}
