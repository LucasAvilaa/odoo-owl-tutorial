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
    ],
    "assets": {
        "web.assets_backend": [
            "treinamento_front/static/src/components/*/*.js",
            "treinamento_front/static/src/components/*/*.xml",
            "treinamento_front/static/src/components/*/*.scss",
        ]
    },
    "installable": True,
    "application": True
}
