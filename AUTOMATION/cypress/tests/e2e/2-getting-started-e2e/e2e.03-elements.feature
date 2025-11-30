# language: es
Característica: Elements
Details - Page where the users can login to their accounts

Antecedentes:
    Dado la configuración del POM ha sido inicializada para "elements"
    Dado el usuario ingresa a la pagina elements

Escenario: C01 - Text Box
    Cuando se espera 2 segundos
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando el usuario hace clic en el botón "elementTextBox"
    Cuando el usuario hace clic en el botón "fullName" y escribe un nombre aleatorio
    Cuando el usuario hace clic en el botón "email" y escribe un email aleatorio
    Cuando el usuario hace clic en el botón "address" y escribe una dirección aleatoria
    Cuando el usuario hace clic en el botón "permanentAddress" y escribe una dirección aleatoria
    Cuando el usuario hace clic en el botón "btnSubmit"
    Entonces la imagen "contenido" debe "tiene el texto" "Text Box"

Escenario: C02 - Press CheckBox Father
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando se espera 6 segundos
    Cuando el usuario hace clic en el botón "elementChexBox"
    Cuando el usuario hace clic en el botón "btnCheckHome"
    Cuando se espera 1 segundos
    Entonces el campo "resultCheckBox" debe "tiene el texto" "You have selected : home desktop notes commands documents workspace react angular veu office public private classified general downloads wordFile excelFile"

Escenario: C03 - Press checkBox children
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando se espera 6 segundos
    Cuando el usuario hace clic en el botón "elementChexBox"
    Cuando el usuario hace clic en el botón "iconToggle1"
    Cuando el usuario hace clic en el botón "iconToggle2"
    Cuando el usuario hace clic en el botón "iconToggle3"
    Cuando el usuario hace clic en el botón "iconToggle4"
    Cuando el usuario hace clic en el botón "iconToggle5"
    Cuando el usuario hace clic en el botón "iconToggle6"

Escenario: C04 - Press checkBox Fathers and children
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando se espera 6 segundos
    Cuando el usuario hace clic en el botón "elementChexBox"
    Cuando el usuario hace clic en el botón "iconToggle1"
    Cuando el usuario hace clic en el botón "iconToggle2"
    Cuando el usuario hace clic en el botón "btnCheckNotes"
    Entonces el campo "resultCheckBox2" debe "tiene el texto" "You have selected : notes"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnCheckCommands"
    Entonces el campo "resultCheckBox3" debe "tiene el texto" "You have selected : desktop notes commands"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "iconToggle3"
    Cuando el usuario hace clic en el botón "iconToggle4"
    Cuando el usuario hace clic en el botón "btnCheckReact"
    Entonces el campo "resultCheckBox4" debe "tiene el texto" "You have selected : desktop notes commands react"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnCheckAngular"
    Entonces el campo "resultCheckBox5" debe "tiene el texto" "You have selected : desktop notes commands react angular"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnCheckVeu"
    Entonces el campo "resultCheckBox6" debe "tiene el texto" "You have selected : desktop notes commands workspace react angular veu"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "iconToggle5"
    Cuando el usuario hace clic en el botón "btnCheckPublic"
    Entonces el campo "resultCheckBox7" debe "tiene el texto" "You have selected : desktop notes commands workspace react angular veu public"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnCheckPrivate"
    Entonces el campo "resultCheckBox8" debe "tiene el texto" "You have selected : desktop notes commands workspace react angular veu public private"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnCheckClassifield"
    Entonces el campo "resultCheckBox9" debe "tiene el texto" "You have selected : desktop notes commands workspace react angular veu public private classified"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnCheckGeneral"
    Entonces el campo "resultCheckBox10" debe "tiene el texto" "You have selected : desktop notes commands documents workspace react angular veu office public private classified general"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "iconToggle6"
    Cuando el usuario hace clic en el botón "btnCheckWordFileDoc"
    Entonces el campo "resultCheckBox11" debe "tiene el texto" "You have selected : desktop notes commands documents workspace react angular veu office public private classified general wordFile"
    Cuando el usuario hace clic en el botón "btnCheckExcelFileDoc"
    Entonces el campo "resultCheckBox" debe "tiene el texto" "You have selected : home desktop notes commands documents workspace react angular veu office public private classified general downloads wordFile excelFile"

Escenario: C05 - Button Radio
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando se espera 5 segundos
    Cuando el usuario hace clic en el botón "btnRadioButton"
    Cuando el usuario hace clic en el botón "btnRadioYes"
    Cuando se espera 3 segundos
    Entonces el campo "resultCheckBox12" debe "tiene el texto" "Yes"
    Cuando el usuario hace clic en el botón "btnRadioImpressive"
    Cuando se espera 3 segundos
    Entonces el campo "resultCheckBox13" debe "tiene el texto" "Impressive"

Escenario: C06 - web Tables
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando se espera 4 segundos
    Cuando el usuario hace clic en el botón "btnWebTables"
    Cuando el usuario hace clic en el botón "btnAdd"
    Cuando el usuario hace clic en el botón "labelFirstName" y escribe un primer nombre aleatorio
    Cuando el usuario hace clic en el botón "labelLastName" y escribe su apellido aleatorio
    Cuando el usuario hace clic en el botón "labelUserEmail" y escribe un email aleatorio
    Cuando el usuario hace clic en el botón "labelAge" y escribe una edad aleatoria
    Cuando el usuario hace clic en el botón "labelSalary" y escribe un salario aleatorio
    Cuando el usuario hace clic en el botón "labelDepartment" y escribe un area de trabajo aleatorio
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "buttonSubmit"
    Cuando se espera 1 segundos
    Cuando el usuario escribe en el campo "btnSearchBox" con el valor "generatedFirstName"
    Y el usuario hace clic en el botón "lupa"
    Entonces la lista "tablaDeRegistros" debe "tiene el texto" "generatedFirstName"

Escenario: C07 - Buttons
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnButtons"
    Cuando se espera 4 segundos
    Cuando el usuario hace clic en el botón "btnDoubleClic"
    Entonces el elemento "valueButtons" debe "tiene el texto" "You have done a double click"
    Cuando el usuario hace clic en el botón "btnClickRight"
    Entonces el elemento "valueButtons" debe "tiene el texto" "You have done a right click"

Escenario: C08 - Links
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnLinks"
    Entonces el elemento "valueLinks" debe "tiene el texto" "Links"
    Cuando el usuario hace clic en el link "valueHome"
    Entonces el link "valueHome" debe ser abierto
    Cuando el usuario hace clic en el link "valueHomeLwEQS"
    Entonces el link "valueHomeLwEQS" debe ser abierto
    Cuando el usuario hace clic en el link "valueCreate"
    Entonces el elemento "ResponseLinks" debe "tiene el texto" "Link has responded with staus 201 and status text Created"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el link "valueLinkNoContent"
    Cuando se espera 1 segundos
    Entonces el elemento "ResponseLinks" debe "tiene el texto" "Link has responded with staus 204 and status text No Content"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el link "valueLinkMoved"
    Cuando se espera 1 segundos
    Entonces el elemento "ResponseLinks" debe "tiene el texto" "Link has responded with staus 301 and status text Moved Permanently"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el link "valueLinkBadRequest"
    Cuando se espera 1 segundos
    Entonces el elemento "ResponseLinks" debe "tiene el texto" "Link has responded with staus 400 and status text Bad Request"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el link "valueLinkUnauthorized"
    Cuando se espera 1 segundos
    Entonces el elemento "ResponseLinks" debe "tiene el texto" "Link has responded with staus 401 and status text Unauthorized"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el link "valueLinkForbidden"
    Cuando se espera 1 segundos
    Entonces el elemento "ResponseLinks" debe "tiene el texto" "Link has responded with staus 403 and status text Forbidden"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el link "valueLinkNotFound"
    Cuando se espera 1 segundos
    Entonces el elemento "ResponseLinks" debe "tiene el texto" "Link has responded with staus 404 and status text Not Found"

Escenario: C09 - Broken Links - Images
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando se espera 3 segundos
    Cuando el usuario hace clic en el botón "btnBrokenLinksImagen"
    Entonces el elemento "headerTextBrokenLinksImage" debe "tiene el texto" "Broken Links - Images"
    Cuando se espera 1 segundos
    Entonces el elemento "textValidImagen" debe "tiene el texto" "Valid image"
    Entonces la imagen "imagenValidImagen" debe "tener el src" "/images/Toolsqa.jpg"
    Cuando se espera 1 segundos
    Entonces el elemento "textBrokenImagen" debe "tiene el texto" "Broken image"
    Entonces la imagen "imagenBrokenImagen" debe "tener el src" "/images/Toolsqa_1.jpg"
    Cuando se espera 1 segundos
    Entonces el elemento "textValidLink" debe "tiene el texto" "Valid Link"
    Cuando el usuario hace clic en el link "linkValid"
    Cuando el usuario regresa a la página anterior
    Cuando se espera 1 segundos
    Entonces el elemento "linkValid" debe "tener la ruta" "http://demoqa.com"
    Entonces el elemento "textBrokenLink" debe "tiene el texto" "Broken Link"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el link "brokenLink"
    Cuando el usuario regresa a la página anterior
    Entonces el elemento "brokenLink" debe "tener la ruta" "http://the-internet.herokuapp.com/status_codes/500"

Escenario: C10 - Upload and Download
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando se espera 3 segundos
    Cuando el usuario hace clic en el botón "btnUpdateAndDownload"
    Entonces el elemento "headerTextUpdateAndDownload" debe "tiene el texto" "Upload and Download"
    Cuando se espera 1 segundos
    Entonces el elemento "btnDownload" debe "tiene el texto" "Download"
    Cuando el usuario hace clic en el botón "btnDownload"
    Entonces se valida que el archivo descargado es "sampleFile.jpeg"
    Cuando se espera 1 segundos
    Cuando el usuario selecciona un archivo "luna.jpg"
    Cuando se espera 1 segundos
    Entonces el elemento "responseFile" debe "tiene el texto" "C:\fakepath\luna.jpg"

Escenario: C11 - Dynamic Properties
    Cuando el usuario hace clic en el botón "btnElements"
    Cuando se espera 3 segundos
    Cuando el usuario hace clic en el botón "btnDynamicProperties"
    Entonces el elemento "headerTextDynamicProperties" debe "tiene el texto" "Dynamic Properties"
    Cuando se espera 1 segundos
    Entonces el elemento "textRandomId" debe "tiene el texto" "This text has random Id"
    Cuando el usuario hace clic en el botón "btnWillEnable"
    Cuando se espera 5 segundos
    Cuando el usuario hace clic en el botón "btnChangeColor"
    Entonces el elemento "btnChangeColor" debe "tiene el texto" "Color Change"
    Cuando se espera 1 segundos
    Cuando el usuario hace clic en el botón "btnVisibleAfter"
    Entonces el elemento "btnVisibleAfter" debe "tiene el texto" "Visible After 5 Seconds"

