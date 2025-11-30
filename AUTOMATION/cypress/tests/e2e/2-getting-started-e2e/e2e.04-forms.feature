# language: es
Característica: forms
Details - Page where the users can login to their accounts

Antecedentes:
    Dado la configuración del POM ha sido inicializada para "forms"
    Dado el usuario ingresa a la pagina forms

Escenario: C001 - Practice forms - Llenar el formulario - Hombre
    Cuando el usuario hace clic en el botón "btnForms"
    Cuando se espera 5 segundos
    Cuando el usuario hace clic en el botón "contentTextForms"
    Entonces el elemento "contentTextForms" debe "tiene el texto" "Practice Form"
    Cuando el usuario escribe en el campo "firstName" con el valor "Patrick Dario"
    Cuando el usuario escribe en el campo "lastName" con el valor "Maldonado Gutierrez"
    Cuando el usuario escribe en el campo "emailExample" con el valor "patrick_testing@yopmail.com"
    Cuando el usuario hace clic en el botón "sexMale"
    Cuando el usuario escribe en el campo "phoneNumer" con el valor "9566871020"
    Cuando selecciona la fecha de nacimiento "31" de "October" de "1997"
    Cuando se espera 2 segundos
    Cuando ingresa las materias "English, Commerce, Economics"
    Cuando el usuario hace clic en el botón "sportHobbie"
    Cuando el usuario selecciona un archivo "luna.jpg"
    Cuando el usuario hace clic en el botón "boxAddress"
    Cuando el usuario escribe en el campo "boxAddress" con el valor "Urb.Alameda de Parcona C-12 Lote-01"
    Cuando el usuario hace clic en el botón "stateSelect"
    Cuando el usuario hace clic en el botón "stateOne"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "citySelect"
    Cuando el usuario hace clic en el botón "cityOne"
    Cuando el usuario hace clic en el botón "btnsubmit"
    Entonces el elemento "responseForm" debe "tiene el texto" "Thanks for submitting the form"
    
