import Main from "../main.pom";
class Forms extends Main{
    constructor() {
        const elements = {
            
        };
        super(elements);
    }
    sendAction(action, elementType, elementId, content) {
        let element = super._getElement(elementId);
        switch (elementType) {
            case 'link':
                element.click();
                break;    
            case 'botón':
                element.click();
                break;
            case 'campo':
                element.type(content);
                break;
            default:
                throw new Error(`Invalid element type ${elementType}`);
        }
    }
}
export default new Forms();