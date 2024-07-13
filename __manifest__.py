{
    "name": "Training Owl Framework",
    "description": "Training Owl Framework",
    "summary": "Training Owl Framework",
    "version": "16.0.0.1",
    "category": "Sales/Sales",
    "author": "Lucas Avila",
    "license": "LGPL-3",
    "depends": ["base","web","contacts", "sale_management"],
    "data": [
        "security/ir.model.access.csv",
        "views/todo_list.xml",
        "views/res_partner.xml",
        "views/odoo_services.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "odoo-owl-tutorial/static/src/components/*/*.js",
            "odoo-owl-tutorial/static/src/components/*/*.xml",
            "odoo-owl-tutorial/static/src/components/*/*.scss",
        ]
    },
    "installable": True,
    "application": True
}
