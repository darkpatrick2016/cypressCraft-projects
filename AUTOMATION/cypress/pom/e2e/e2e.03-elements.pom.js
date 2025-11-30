import Main from '../main.pom.js';
class Elements extends Main {
    constructor() {
        const elements = {
            btnElements                 :       () => cy.contains('h5', 'Elements').should('be.visible'),
            elementTextBox              :       () => cy.get('#item-0').should('be.visible'),
            fullName                    :       () => cy.get('#userName').should('be.visible'),
            email                       :       () => cy.get('#userEmail').should('be.visible'),
            address                     :       () => cy.get('#currentAddress').should('be.visible'),
            permanentAddress            :       () => cy.get('#permanentAddress').should('be.visible'),
            btnSubmit                   :       () => cy.get('#submit').should('be.visible'),
            contenido                   :       () => cy.get('.col-md-6 > h1').should('be.visible'),
            elementChexBox              :       () => cy.get('#item-1').should('be.visible'),
            iconToggle1                 :       () => cy.get('button[aria-label="Toggle"].rct-collapse-btn').should('be.visible'),
            iconToggle2                 :       () => cy.get('li:has(label[for="tree-node-home"]) button[aria-label="Toggle"]').eq(1),
            iconToggle3                 :       () => cy.get('li:has(label[for="tree-node-home"]) button[aria-label="Toggle"]').eq(2),
            iconToggle4                 :       () => cy.get('li:has(label[for="tree-node-home"]) button[aria-label="Toggle"]').eq(3),
            iconToggle5                 :       () => cy.get('li:has(label[for="tree-node-home"]) button[aria-label="Toggle"]').eq(4),
            iconToggle6                 :       () => cy.get('li:has(label[for="tree-node-home"]) button[aria-label="Toggle"]').eq(5),
            btnCheckHome                :       () => cy.get('.rct-title').should('be.visible'),
            resultCheckBox              :                   (palabrasEsperadas = ['home', 'desktop', 'notes', 'commands', 'documents',
                                                                'workspace', 'react', 'angular', 'veu', 'office',
                                                                'public', 'private', 'classified', 'general',
                                                                'downloads', 'wordFile', 'excelFile'
                                                            ]) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                });
            },
            resultCheckBox2             :                   (palabrasEsperadas = ['notes']) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                });
            },
            resultCheckBox3             :                   (palabrasEsperadas = ['desktop', 'notes', 'commands']) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                });
            },
            resultCheckBox4             :                   (palabrasEsperadas = ['desktop', 'notes', 'commands','react']) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                });
            },
            resultCheckBox5             :                   (palabrasEsperadas = ['desktop', 'notes', 'commands', 'react', 'angular']) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                 });
            },
            resultCheckBox6             :                   (palabrasEsperadas = ['desktop', 'notes', 'commands','workspace','react','angular','veu']) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                });
            },
            resultCheckBox7             :                   (palabrasEsperadas = ['desktop', 'notes', 'commands','workspace','react','angular','veu', 'public']) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                });
            },
            resultCheckBox8             :                   (palabrasEsperadas = ['desktop', 'notes', 'commands','workspace','react','angular','veu', 'public', 'private']) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                });
            },
            resultCheckBox9             :                   (palabrasEsperadas = ['desktop', 'notes', 'commands','workspace','react','angular','veu', 'public', 'private', 'classified']) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                });
            },
            resultCheckBox10            :                   (palabrasEsperadas = ['desktop', 'notes', 'commands','documents','workspace','react','angular','veu','office', 'public', 'private', 'classified','general']) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                });
            },
            resultCheckBox11            :                   (palabrasEsperadas = ['desktop', 'notes', 'commands','documents','workspace','react','angular','veu','office', 'public', 'private', 'classified','general','wordFile']) => {
                                                            return cy.get('#result').should('be.visible').then(($el) => {
                                                            const textoCompleto = $el.text(); // Extrae el texto completo del div
                                                            palabrasEsperadas.forEach((palabra) => {
                                                            expect(textoCompleto).to.include(palabra);
                    });
                });
            },
            btnCheckDesktop             :       () => cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-title'),
            btnCheckNotes               :       () => cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-title'),
            btnCheckCommands            :       () => cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-title'),
            btnCheckDocuments           :       () => cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-title'),
            btnCheckWorkSpace           :       () => cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-title'),
            btnCheckReact               :       () => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-title'),
            btnCheckAngular             :       () => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-title'),
            btnCheckVeu                 :       () => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(3) > .rct-text > label > .rct-title'),
            btnCheckOffice              :       () => cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-title'),
            btnCheckPublic              :       () => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(1) > .rct-text > label > .rct-title'),
            btnCheckPrivate             :       () => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(2) > .rct-text > label > .rct-title'),
            btnCheckClassifield         :       () => cy.get(':nth-child(2) > ol > :nth-child(3) > .rct-text > label > .rct-title'),
            btnCheckGeneral             :       () => cy.get(':nth-child(4) > .rct-text > label > .rct-title'),
            btnCheckDownloads           :       () => cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1) > label > .rct-title'),
            btnCheckWordFileDoc         :       () => cy.get(':nth-child(3) > ol > :nth-child(1) > .rct-text > label > .rct-title'),
            btnCheckExcelFileDoc        :       () => cy.get(':nth-child(3) > ol > :nth-child(2) > .rct-text > label > .rct-title'),
            
            btnRadioButton              :       () => cy.get('#item-2').should('be.visible'),
            btnRadioYes                 :       () => cy.get('label[for="yesRadio"]').invoke('css', 'opacity', '1').should('be.visible'),// tuve que llamar al label y hacer que la opacidad que tiene boton pase de 0 "oculto" a 1 " visible para el click"
            btnRadioImpressive          :       () => cy.get('label[for="impressiveRadio"]').invoke('css', 'opacity', '1').should('be.visible'),
            btnRadioNot                 :       () => cy.get('label[for="noRadio"]').invoke('css', 'opacity', '1').should('be.visible'),
            resultCheckBox12            :       () => cy.get('p.mt-3 span.text-success').should('be.visible').should('have.text', 'Yes'),
            resultCheckBox13            :       () => cy.get('p.mt-3 span.text-success').should('be.visible').should('have.text', 'Impressive'),

            btnWebTables                :       () => cy.get('#item-3').should('be.visible'),
            btnAdd                      :       () => cy.get('#addNewRecordButton').should('be.visible'),
            labelFirstName              :       () => cy.get('#firstName').should('be.visible'),
            labelLastName               :       () => cy.get('#lastName').should('be.visible'),
            labelUserEmail              :       () => cy.get('#userEmail').should('be.visible'),
            labelAge                    :       () => cy.get('#age').should('be.visible'),
            labelSalary                 :       () => cy.get('#salary').should('be.visible'),
            labelDepartment             :       () => cy.get('#department').should('be.visible'),
            buttonSubmit                :       () => cy.get('button#submit[type="submit"]'),
            btnSearchBox                :       () => cy.get('#searchBox').should('be.visible'),
            lupa                        :       () => cy.get('#basic-addon2').should('be.visible'),
            tablaDeRegistros            :       () => cy.get('.rt-table > div.rt-tbody').should('be.visible'),

            btnButtons                  :       () => cy.get('#item-4'),
            btnDoubleClic               :       () => cy.get('#doubleClickBtn').dblclick(),
            btnClickRight               :       () => cy.get('#rightClickBtn').rightclick(),
            btnClickMe                  :       () => cy.get('#hPl21').click,  
            valueButtons                :       () => cy.get('.col-md-6 > :nth-child(2)'),

            btnLinks                    :       () => cy.contains('Links'),
            valueLinks                  :       () => cy.get('.col-12.mt-4.col-md-6'),
            valueHome                   :       () => cy.get('#simpleLink'),
            valueHomeLwEQS              :       () => cy.get('#dynamicLink'),
            valueCreate                 :       () => cy.get('#created'),
            valueLinkNoContent          :       () => cy.get('#no-content'),
            valueLinkMoved              :       () => cy.get('#moved'),
            valueLinkBadRequest         :       () => cy.get('#bad-request'),
            valueLinkUnauthorized       :       () => cy.get('#unauthorized'),
            valueLinkForbidden          :       () => cy.get('#forbidden'),
            valueLinkNotFound           :       () => cy.get('#invalid-url'),
            ResponseLinks               :       () => cy.get('#linkResponse'),

            btnBrokenLinksImagen        :       () => cy.contains('Broken Links - Images'),
            headerTextBrokenLinksImage  :       () => cy.contains('h1','Broken Links - Images'),
            textValidImagen             :       () => cy.get('p').eq(0),
            imagenValidImagen           :       () => cy.get('img[src="/images/Toolsqa.jpg"]').eq(1),
            textBrokenImagen            :       () => cy.get('p').eq(1),
            imagenBrokenImagen          :       () => cy.get('img[src="/images/Toolsqa_1.jpg"]'),
            textValidLink               :       () => cy.get('p').eq(2),
            linkValid                   :       () => cy.get('a[href="http://demoqa.com"]'),
            textBrokenLink              :       () => cy.get('p').eq(3),
            brokenLink                  :       () => cy.get('a[href="http://the-internet.herokuapp.com/status_codes/500"]'),
            
            btnUpdateAndDownload        :       () => cy.contains('Upload and Download'),
            headerTextUpdateAndDownload :       () => cy.contains('h1','Upload and Download'),
            btnDownload                 :       () => cy.get('a[id="downloadButton"]'),
            btnSelectFile               :       () => cy.get('input[type="file"]'),
            responseFile                :       () => cy.get('p[id="uploadedFilePath"]'),

            btnDynamicProperties        :       () => cy.contains('Dynamic Properties'),
            headerTextDynamicProperties :       () => cy.contains('h1','Dynamic Properties'),
            textRandomId                :       () => cy.contains('This text has random Id'),
            btnWillEnable               :       () => cy.get('button[id="enableAfter"]'),
            btnChangeColor              :       () => cy.get('button[id="colorChange"]'),
            btnVisibleAfter             :       () => cy.get('button[id="visibleAfter"]'),
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
export default new Elements();