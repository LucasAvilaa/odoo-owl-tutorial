from odoo import _, api, fields, models


class ResPartner(models.Model):
    _inherit = "res.partner"

    username = fields.Char()
    expected_salary = fields.Integer()