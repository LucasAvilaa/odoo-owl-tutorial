/** @odoo-module **/

import { registry } from "@web/core/registry";
import { EmailField } from "@web/views/fields/email/email_field"

class ValidEmailField extends EmailField {
    setup(){
        super.setup()
        console.log("Email Field Inherited")
    }

    get isValidEmail(){
        let re = /\S+@\S+\.\S+/;
        return re.test(this.props.value)
    }
}

ValidEmailField.supportedTypes = ["char"];
ValidEmailField.template = "odoo-owl-tutorial.ValidEmailField"

registry.category("fields").add("valid_email", ValidEmailField);