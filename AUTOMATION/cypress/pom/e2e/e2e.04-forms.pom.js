import Main from "../main.pom";
class Forms extends Main{
    constructor() {
        const elements = {
            btnForms : () => cy.contains('h5','Forms'),
            contentTextForms : () => cy.get('ul').eq(1),
            firstName : () => cy.get('#firstName'),
            lastName : () => cy.get('#lastName'),
            emailExample : () => cy.get('#userEmail'),
            sexMale : () => cy.get('label[for="gender-radio-1"]'),
            sexFale : () => cy.get('label[for="gender-radio-2"]'),
            sexOther : () => cy.get('label[for="gender-radio-3"]'),
            phoneNumer : () => cy.get('#userNumber'),
            dateOfBirth : () => cy.get('#dateOfBirthInput'),
            calendarMonth: () => cy.get('.react-datepicker__month-select'), 
            calendarYear: () => cy.get('.react-datepicker__year-select'),
            subjectsInput: () => cy.get('#subjectsContainer').find('input'),
            sportHobbie : () => cy.get('label[for="hobbies-checkbox-1"]'),
            readingHobbie : () => cy.get('label[for="hobbies-checkbox-2"]'),
            musicHobbie : () => cy.get('label[for="hobbies-checkbox-3"]'),
            btnSelectFile  :  () => cy.get('input[type="file"]'),
            boxAddress : () => cy.get('#currentAddress'),
            stateSelect : () => cy.contains('Select State'),
            stateOne    : () => cy.get('#react-select-3-option-0'),
            stateTwo    : () => cy.get('#react-select-3-option-1'),
            stateThree    : () => cy.get('#react-select-3-option-2'),
            stateFour    : () => cy.get('#react-select-3-option-3'),
            citySelect : () => cy.contains('Select City'),
            cityOne : () => cy.get('#react-select-4-option-0'),
            cityTwo : () => cy.get('#react-select-4-option-1'),
            cityThree : () => cy.get('#react-select-4-option-1'),
            btnsubmit : () => cy.get('#submit'),
            responseForm : () => cy.get('#example-modal-sizes-title-lg'),

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