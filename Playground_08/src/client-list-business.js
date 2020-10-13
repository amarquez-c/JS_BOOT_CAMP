import * as DataBusiness from "./data-business.js";
import * as ClientBusiness from "./client-business.js";


function printClientsAccounts() {
    const clients = DataBusiness.getClient();    // Importa de data-business.js
    const ul = document.createElement("ul");
    for (let client of clients) {
        const element = ClientBusiness.getClientElement(client); // Importa de client-business.js
        ul.appendChild(element);
    };

    document.getElementById("root").appendChild(ul);

}

export {printClientsAccounts};