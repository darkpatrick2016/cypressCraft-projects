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

 Escenario: C002 - Practice form - Llenar el formulario - Mujer
    Cuando el usuario hace clic en el botón "btnForms"
    Cuando se espera 5 segundos
    Cuando el usuario hace clic en el botón "contentTextForms"
    Entonces el elemento "contentTextForms" debe "tiene el texto" "Practice Form"
    Cuando el usuario escribe en el campo "firstName" con el valor "Fanny"
    Cuando el usuario escribe en el campo "lastName" con el valor "Gutierrez Melgar"
    Cuando el usuario escribe en el campo "emailExample" con el valor "fanny_gutierrez_melgar@yopmail.com"
    Cuando el usuario hace clic en el botón "sexFale"
    Cuando el usuario escribe en el campo "phoneNumer" con el valor "9566871120"
    Cuando selecciona la fecha de nacimiento "07" de "September" de "1998"
    Cuando se espera 2 segundos
    Cuando ingresa las materias "Social Studies, Arts, Accounting"
    Cuando el usuario hace clic en el botón "readingHobbie"
    Cuando el usuario selecciona un archivo "luna.jpg"
    Cuando el usuario hace clic en el botón "boxAddress"
    Cuando el usuario escribe en el campo "boxAddress" con el valor "av.Mexico c12 - Lote 123 / Los caminos al Inca 552°"
    Cuando el usuario hace clic en el botón "stateSelect"
    Cuando el usuario hace clic en el botón "stateTwo"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "citySelect"
    Cuando el usuario hace clic en el botón "cityTwo"
    Cuando el usuario hace clic en el botón "btnsubmit"
    Entonces el elemento "responseForm" debe "tiene el texto" "Thanks for submitting the form"
@focus
Escenario: C003 - Practice form - Llenar el formulario - otros
    Cuando el usuario hace clic en el botón "btnForms"
    Cuando se espera 5 segundos
    Cuando el usuario hace clic en el botón "contentTextForms"
    Entonces el elemento "contentTextForms" debe "tiene el texto" "Practice Form"
    Cuando el usuario escribe en el campo "firstName" con el valor "Felipe Garcia"
    Cuando el usuario escribe en el campo "lastName" con el valor "Gutierrez Altamirano"
    Cuando el usuario escribe en el campo "emailExample" con el valor "felipito_gatito@yopmail.com"
    Cuando el usuario hace clic en el botón "sexFale"
    Cuando el usuario escribe en el campo "phoneNumer" con el valor "9563871120"
    Cuando selecciona la fecha de nacimiento "15" de "November" de "1995"
    Cuando se espera 2 segundos
    Cuando ingresa las materias "Civics, History, Hindi"
    Cuando el usuario hace clic en el botón "readingHobbie"
    Cuando el usuario selecciona un archivo "luna.jpg"
    Cuando el usuario hace clic en el botón "boxAddress"
    Cuando el usuario escribe en el campo "boxAddress" con el valor "av.micaela bastidas x-6 .Prolongación Grau s/n"
    Cuando el usuario hace clic en el botón "stateSelect"
    Cuando el usuario hace clic en el botón "stateThree"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "citySelect"
    Cuando el usuario hace clic en el botón "cityThree"
    Cuando el usuario hace clic en el botón "btnsubmit"
    Entonces el elemento "responseForm" debe "tiene el texto" "Thanks for submitting the form"