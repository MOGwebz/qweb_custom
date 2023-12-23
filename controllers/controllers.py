# -*- coding: utf-8 -*-
from odoo import http


class QwebCustom(http.Controller):
    @http.route('/qweb_custom/qweb_custom', auth='public', website=True)
    def index(self, **kw):
        def do_something():
            return "this is a function being ruturning a string from a controller"

        some_model = http.request.env['sale.order'].search([])

        data = {
            'string': 'qweb_custom',
            'integer': 1000,
            'float': 30.70,
            'some_list': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            'dictionary': {'any_key': 'any_value'},
            'some_function': do_something(),
            'model': some_model
        }

        return http.request.render('qweb_custom.page', data)
