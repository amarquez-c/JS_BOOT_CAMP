import "./styles.css";
import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";


// getCharacter().then(data => {
//     console.log(data);
// })

DataBusiness.getCharacter().then(data => {
    
    for (var item of data){
        const node = Utils.createCharacterRow(item);
        document.getElementById("root").appendChild(node);
    };
});






