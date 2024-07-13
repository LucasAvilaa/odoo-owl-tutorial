/** @odoo-module **/
import {registry} from "@web/core/registry";
import {listView} from "@web/views/list/list_view";
import {ListController} from "@web/views/list/list_controller";
import {useService} from "@web/core/utils/hooks";

class ResPartnerListController extends ListController {
    setup() {
        super.setup();
        console.log("This is res_partner controller");
        this.action = useService("action");
    }

    openSalesView() {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Costumer Sales",
            res_model: "sale.order",
            views: [
                [false, "list"],
                [false, "form"],
            ],
        });
    }
}

export const resPartnerListView = {
    ...listView,
    display_name: "LUCAS",
    icon: "oi oi-view-list",
    accessKey: "x",
    buttonTemplate: "odoo-owl-tutorial.ResPartnerListView.Buttons",
    Controller: ResPartnerListController,
};

registry.category("views").add("res_partner_list_view", resPartnerListView);
