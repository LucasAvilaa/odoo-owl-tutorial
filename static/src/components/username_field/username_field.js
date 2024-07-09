/** @odoo-module **/

import { registry } from "@web/core/registry";
import { CharField } from "@web/views/fields/char/char_field"

class UsernameField extends CharField {
    setup(){
        super.setup()
        console.log("Char Field Inherited")
    }

    get emailDomain(){
        const { email } = this.props.record.data
        return email ? email.split("@")[1] : ""
    }
}
UsernameField.template = "treinamento_front.UsernameField"
UsernameField.supportedTypes = ["char"];
UsernameField.components = {CharField}

registry.category("fields").add("username", UsernameField);