from odoo import _, api, fields, models


class OwlTodoList(models.Model):
    _name = "owl.todo.list"
    _description = "OWL Todo List App"

    name = fields.Char("Task Name")
    completed = fields.Boolean(default=False)
    color = fields.Char()