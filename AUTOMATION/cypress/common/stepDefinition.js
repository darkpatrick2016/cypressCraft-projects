import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import pom from '../pom/index.js';
import { faker } from "@faker-js/faker";
import elements from '../pom/e2e/e2e.03-elements.pom.js';
import 'cypress-file-upload';
let pageObject = null;

Given('la configuración del POM ha sido inicializada para {string}', (name) => {
    pageObject = pom[name];
    pageObject._loadEndPoint(name);
});

/** ------------------------------------------- **/
/** Steps definitions for the API .feature file **/
/** ------------------------------------------- **/

When('una petición {word} es enviada al endpoint {string}', (method, endPoint, settings) => {
    pageObject.sendRequest(method, endPoint, settings);
});

When(/^se muestre la (petición|respuesta) de "([^"]*)"?$/, (type, endPoint) => {
    pageObject._showManager(type, endPoint);
});

Then('la respuesta en {string} debe tener el parámetro {string} con la condición {string} y el valor {string}', (endpoint, field, condition, value) => {
    pageObject._validateResponse(endpoint, field, condition, value);
});
/** ------------------------------------------- **/
/** Steps definitions for the E2E .feature file **/
/** ------------------------------------------- **/

Given('el usuario ingresa a la pagina {word}', (endPoint) => {
    pageObject._open(endPoint);
});

When(/^el usuario (hace clic|escribe|selecciona|...) en el (botón|campo|link|...) "([^"]*)"?(?: con el valor "([^"]*)")?$/, (action, elementType, elementId, content) => {
    // Caso 1: Si no hay 'content' (es opcional en tu expresión), simplemente llama a sendAction sin contenido
    if (!content) {
        pageObject.sendAction(action, elementType, elementId);
        return;
      }
  
      // Caso 2: Si el contenido es "generatedFirstName", recuperamos el alias
      if (content === 'generatedFirstName') {
        cy.get('@generatedFirstName').then((storedValue) => {
          pageObject.sendAction(action, elementType, elementId, storedValue);
        });
        return;
      }
    pageObject.sendAction(action, elementType, elementId, content);
});

When('el usuario hace clic en el botón {string} y escribe un nombre aleatorio', (buttonId) => {
    const fullName = faker.person.fullName(); // Generar un nombre aleatorio
    elements.sendAction('type', 'campo', buttonId, fullName); // Llamar al método en POM
    cy.log(`Nombre generado: ${fullName}`); // Mostrar en la consola
});
When('el usuario hace clic en el botón {string} y escribe un primer nombre aleatorio', (buttonId) => {
    const firstName = faker.person.firstName(); // Generar un primer nombre aleatorio
    cy.wrap(firstName).as('generatedFirstName'); // Guarda el valor en un alias
    elements.sendAction('type', 'campo', buttonId, firstName); // Llamar al método en POM para escribir en el campo
    cy.log(`Primer nombre generado: ${firstName}`); // Mostrar en la consola
});
When('el usuario hace clic en el botón {string} y escribe su apellido aleatorio', (buttonId) => {
    const lastName = faker.person.lastName(); // Generar apellidos aleatorios
    elements.sendAction('type', 'campo', buttonId, lastName); //Llamar al método en el POM para escribir en el campo
    cy.log(`Apellidos generados: ${lastName}`); // Mostrar en la consola
});

When('el usuario hace clic en el botón {string} y escribe un email aleatorio', (elementId) => {
    const email = faker.internet.email(); // Generar email aleatorio
    elements.sendAction('type', 'campo', elementId, email); // Llamar al método en POM
    cy.log(`Email generado: ${email}`); // Mostrar en la consola
});
When('el usuario hace clic en el botón {string} y escribe una edad aleatoria', (buttonId) => {
    const randomAge = faker.number.int({ min: 18, max: 100 }); // Generar una edad aleatoria
    elements.sendAction('type', 'campo', buttonId, randomAge); // Llamar al método en POM para escribir en el campo
    cy.log(`Edad generada: ${randomAge}`); // Mostrar la edad generada en la consola
});
When('el usuario hace clic en el botón {string} y escribe un salario aleatorio', (buttonId) => {
    const randomSalary = faker.number.int({ min: 1000, max: 100000 }); // Generar un salario
    elements.sendAction('type', 'campo', buttonId, randomSalary); // Llamar al método en POM para escribir en el campo
    cy.log(`Salario Generado: ${randomSalary}`); // Mostrar la edad generada en la consola
});
When('el usuario hace clic en el botón {string} y escribe un area de trabajo aleatorio', (buttonId) => {
    const randomDepartment = faker.commerce.department(); // Generar un area de trabajo
    elements.sendAction('type', 'campo', buttonId, randomDepartment); // Llamar al método en POM para escribir en el campo
    cy.log(`Area de trabajo Generado: ${randomDepartment}`); // Mostrar el area de trabajo generada en la consola
});

When('el usuario hace clic en el botón {string} y escribe una dirección aleatoria', (elementId) => {
    const address = faker.location.streetAddress(); // Generar dirección aleatoria
    elements.sendAction('type', 'campo', elementId, address); // Llamar al método en POM
    cy.log(`Dirección generada: ${address}`); // Mostrar en la consola
});

When('borro el campo {string}', (campo) => {
    cy.get(`#${campo}`).clear();
  });

Then(/^(el elemento|la sección|el campo|el boton|la lista|la imagen|...) "([^"]*)" debe "([^"]*)"?(?: "([^"]*)")?$/, (elementType, elementId, condition, content) => {
    pageObject._validate(elementType, elementId, condition, content);
    if (!content) {
        pageObject._validate(elementType, elementId, condition);
        return;
      }
  
      // Detectamos si es un alias y lo resolvemos antes de pasar a _validate
      if (content === 'generatedFirstName') {
        cy.get('@generatedFirstName').then((storedValue) => {
          pageObject._validate(elementType, elementId, condition, storedValue); // Valor real
        });
        return;
      }
  
      // Valor literal
      pageObject._validate(elementType, elementId, condition, content);
    }
  );
Then(/el link "([^"]*)" debe ser abierto/, (elementId) => {
    pageObject._handleLink(elementId);
});

Then('se valida que el archivo descargado es {string}', (expectedFileName) => {
  // Buscamos cualquier botón/link con atributo download que tenga el nombre esperado
  cy.get(`[download="${expectedFileName}"]`)
    .should('exist')
    .and('have.attr', 'href')
    .then((href) => {
      if (href.startsWith('data:')) {
        // Validación para data URI
        expect(href).to.match(/^data:(.+);base64,/);
        const base64Data = href.split(',')[1];
        expect(base64Data.length).to.be.greaterThan(50);
      } else {
        // Validación para URL remota
        expect(href).to.match(/^https?:\/\//);
        const fileExtension = expectedFileName.split('.').pop();
        expect(href.toLowerCase()).to.include(fileExtension.toLowerCase());
      }
    });
});

When(
  'el usuario selecciona un archivo {string}',
  (fileName) => {
    cy.get('input[type="file"]').attachFile(`Files/${fileName}`);
  }
);

When("el usuario regresa a la página anterior", () => {
    cy.go('back');
});


When('se espera {int} segundos',(seconds)=>{
    pageObject._waitFormSeconds(seconds);
});
//El scope es para el forms.feature
When('selecciona la fecha de nacimiento {string} de {string} de {string}', (day, month, year) => {
    
    const forms = pom.forms; 

    // 1. Abrir el calendario
    forms.elements.dateOfBirth().click(); 

    // 2. Seleccionar el AÑO
    forms.elements.calendarYear().select(year); 

    // 3. Seleccionar el MES
    forms.elements.calendarMonth().select(month); 

    // 4. Clic en el DÍA (lógica dinámica)
    const dayPadded = String(day).padStart(3, '0');
    const daySelector = `.react-datepicker__day--${dayPadded}:not(.react-datepicker__day--outside-month)`;

    // Buscar el día y hacer clic
    cy.get(daySelector).click();
});
//El scope es para el feature.forms
When('ingresa las materias {string}', (subjectList) => {
    
    const forms = pom.forms; 
    const subjectsArray = subjectList.split(',').map(s => s.trim());
    subjectsArray.forEach(subject => {
        if (subject) {
            forms.elements.subjectsInput().type(subject);
            forms.elements.subjectsInput().type('{enter}'); 
        }
    });
});