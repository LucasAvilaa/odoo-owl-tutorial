/** @odoo-module **/
import {registry} from "@web/core/registry";
import {formView} from "@web/views/form/form_view";
import {FormController} from "@web/views/form/form_controller";
import {useService} from "@web/core/utils/hooks";

class ResPartnerFormController extends FormController {
    setup() {
        super.setup();
        console.log("This is res_partner form controller");
        this.action = useService("action");
    }

    openWebsite(url) {
        this.action.doAction({
            type: "ir.actions.act_url",
            target: "self",
            url
        });
    }
}

ResPartnerFormController.template = "treinamento_front.ResPartnerFormView"

export const resPartnerFormView = {
    ...formView,
    buttonTemplate: "treinamento_front.ResPartnerFormView.Buttons",
    Controller: ResPartnerFormController,
};

registry.category("views").add("res_partner_form_view", resPartnerFormView);
