/** @odoo-module */

import { Component } from "@odoo/owl";

export class TodoItem extends Component {
  static template = "qweb_custom.TodoItem";
  static props = {
    todo: {
      type: Object,
      shape: { id: Number, description: String, isCompleted: Boolean },
    },
  };
}
