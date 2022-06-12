import 'cypress-iframe'

//==============travelapp-section================

//==============invoice================
Cypress.Commands.add('travelapp_invoice', () => {
	cy.get('.paymentsidebar__option-right > .radio > .radio__check').click().wait(3000)
})
//============== CCV================
Cypress.Commands.add('travelapp_add_card', () => {
	cy.get('.credit-card__add-cc-link').click().wait(2000)
})

Cypress.Commands.add('travelapp_Add_New_Card_part_one', () => {
	cy.get('.credit-card-details__field-street > .input > .input__field-holder > .input__field').type('Kemal Ataturk Avenue 28 & 30').wait(1000) //street
	cy.get('.credit-card-details__field-city > .input > .input__field-holder > .input__field').type('banani').wait(1000) //city
	cy.get('.credit-card-details__field-state > .input > .input__field-holder > .input__field').type('Dhaka').wait(2000) //state
	cy.get('.select-box__value-container').click().wait(2000) //country
	cy.get('.select-box__value-container').type('Bangladesh{enter}').wait(1000) //country
	cy.get('.credit-card-details__field-zip-code > .input > .input__field-holder > .input__field').click().wait(1000) //zip_code
	cy.get('.credit-card-details__field-zip-code > .input > .input__field-holder > .input__field').type('1230').wait(1000) //zip_code
	cy.get('.credit-card-details__buttons > .button--primary').click().wait(3000)// next button
})

Cypress.Commands.add('travelapp_switchToIframe', iframe => {
	return cy
		.get(iframe)
		.its(`0.contentDocument.body`)
		.should(`be.visible`)
		.then(cy.wrap)
})

Cypress.Commands.add('travelapp_Add_New_Card_part_two', () => {
	cy.iframe('document.querySelector("#fullname")').click().wait(1000)
	cy.iframe('document.querySelector("#fullname")').type('shikder shondhi').wait(1000)
})






//==============agent-admin-section================