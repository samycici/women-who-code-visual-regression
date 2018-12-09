/// <reference types="Cypress" />

describe('Women Who Code', function() {
  it('Visits the Home', function() {
    cy.visit('http://localhost:4000/');

    cy.eyesOpen({
      appName: 'WWC Home!',
      testName: 'Example with Applitools and Cypress',
      browser: [
        {width: 800, height: 600 , name: 'mobile'},
        {width: 1024, height: 768, name: 'chrome'}
      ]
    });

    cy.eyesCheckWindow('Home');

    cy.eyesClose();

  })
})

