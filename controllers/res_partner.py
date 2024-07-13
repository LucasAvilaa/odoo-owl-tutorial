from odoo import http


class ResPartner(http.Controller):

    @http.route("/odoo-owl-tutorial/rpc_service", type="json", auth="user")
    def get_customer(self, limit=None):
        return http.request.env["res.partner"].search_read([], ["name", "email"], limit=limit)
