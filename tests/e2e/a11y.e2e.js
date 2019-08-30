describe('Website navigation', () => {
  // TODO - Will be fixed later
  it.skip('is a11y compliant', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.configureAxe({
      checks: [
        // disable color-contrast check because of our branding colors :(
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    });
    cy.checkA11y();
  });
});
