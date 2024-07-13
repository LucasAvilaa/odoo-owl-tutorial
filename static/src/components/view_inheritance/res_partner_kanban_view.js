/** @odoo-module **/
import {registry} from "@web/core/registry";
import {kanbanView} from "@web/views/kanban/kanban_view";
import {KanbanController} from "@web/views/kanban/kanban_controller";
import {useService} from "@web/core/utils/hooks";
const { onWillStart } = owl;

class ResPartnerKanbanController extends KanbanController {
    setup() {
        super.setup();
        console.log("This is res_partner kanban controller");
        this.action = useService("action");
        this.orm = useService("orm");

        onWillStart(async ()=>{
            // Modelo, Domain, Campos, Campo agrupador
            this.customerLocations = await this.orm.readGroup("res.partner", [], ["state_id"], ["state_id"])
            console.log(this.customerLocations)
        })
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

    selectLocation(state){
        this.env.searchModel.setDomainParts({
            state: {
                domain: [["state_id", "=", state[0]]],
                facetLabel: state[1]
            }
        })
    }
}

ResPartnerKanbanController.template = "odoo-owl-tutorial.ResPartnerKanbanView"

export const resPartnerKanbanView = {
    ...kanbanView,
    display_name: "KanLUCAS",
    buttonTemplate: "odoo-owl-tutorial.ResPartnerKanbanView.Buttons",
    Controller: ResPartnerKanbanController,
};

registry.category("views").add("res_partner_kanban_view", resPartnerKanbanView);
