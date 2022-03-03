describe("DMN Runner Test", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  it("Test DMN Runner on DMN sample", function () {
    cy.get("[data-ouia-component-id='try-dmn-sample-button']").click();
    cy.loadEditor();
    cy.get("[data-ouia-component-id='dmn-guided-tour-skip-runner-start-button']").click();
    cy.get("[data-testid='dmn-form']").within(function ($form) {
      cy.get("input[name='Credit Score.FICO']").type("650");
      cy.get("input[name='Applicant Data.Age']").type("30");
      cy.get("[x-dmn-type*='Marital_Status'] button").click();
      cy.get("ul[name='Applicant Data.Marital Status'] button").contains("M").click();
      cy.get("input[name='Applicant Data.Existing Customer']").check();
      cy.get("input[name='Applicant Data.Monthly.Income']").type("3000");
      cy.get("input[name='Applicant Data.Monthly.Repayments']").type("120");
      cy.get("input[name='Applicant Data.Monthly.Expenses']").type("0");
      cy.get("input[name='Applicant Data.Monthly.Tax']").type("0");
      cy.get("input[name='Applicant Data.Monthly.Insurance']").type("0");
      cy.get("[x-dmn-type*='Product_Type'] button").click();
      cy.get("ul[name='Requested Product.Type'] button").contains("Standard Loan").click();
      cy.get("input[name='Requested Product.Rate']").type("1.5");
      cy.get("input[name='Requested Product.Term']").type("4");
      cy.get("input[name='Requested Product.Amount']").type("10000");
    });
    cy.get("[data-testid='dmn-form-result']").within(function ($form) {
      cy.get("article div:contains('Front End Ratio')").next().contains("Sufficient").should("be.visible");
      cy.get("article div:contains('Back End Ratio')").next().contains("Sufficient").should("be.visible");
      cy.get("article div:contains('Credit Score Rating')").next().contains("Fair").should("be.visible");
      cy.get("article div:contains('Loan Pre-Qualification')").next().should("contain.text", "Qualified");
    });
  });
  it.skip("Test DMN Runner on DMN sample - table view", function () {
    cy.get("[data-ouia-component-id='try-dmn-sample-button']").click();
    cy.loadEditor();
    cy.get("button").contains("Skip tour").click();
    cy.get("[data-ouia-component-id='switch-dmn-runner-to-table-view']").click();
    cy.get(".dmn-runner-table.id1")
      .get("[data-ouia-component-id='expression-row-0']")
      .within(function ($table) {
        cy.get("input[name='Credit Score.FICO']").type("650");
        cy.get("input[name='Applicant Data.Age']").type("30");
        cy.get("input[name='Applicant Data.Existing Customer']").check();
        cy.get("input[name='Applicant Data.Monthly.Income']").type("3000");
        cy.get("input[name='Applicant Data.Monthly.Repayments']").type("120");
        cy.get("input[name='Applicant Data.Monthly.Expenses']").type("0");
        cy.get("input[name='Applicant Data.Monthly.Tax']").type("0");
        cy.get("input[name='Applicant Data.Monthly.Insurance']").type("0");
        cy.get("input[name='Requested Product.Rate']").type("1.5");
        cy.get("input[name='Requested Product.Term']").type("4");
        cy.get("input[name='Requested Product.Amount']").type("10000");
      });
    cy.get(".dmn-runner-table.id1")
      .get("[data-ouia-component-id='expression-row-0']")
      .within(function ($table) {
        cy.get("[x-dmn-type*='Marital_Status'] button").click();
      });
    cy.get("ul[name='Applicant Data.Marital Status'] button").contains("M").click();
    cy.get(".dmn-runner-table.id1")
      .get("[data-ouia-component-id='expression-row-0']")
      .within(function ($table) {
        cy.get("[x-dmn-type*='Product_Type'] button").click();
      });
    cy.get("ul[name='Requested Product.Type'] button").contains("Standard Loan").click();
    cy.get(".dmn-runner-table.id2")
      .get("[data-ouia-component-id='expression-row-0']")
      .within(function ($table) {
        cy.get("[data-ouia-component-id='expression-column-1']").contains("Sufficient").should("be.visible");
        cy.get("[data-ouia-component-id='expression-column-2']").contains("Sufficient").should("be.visible");
        cy.get("[data-ouia-component-id='expression-column-3']").contains("Fair").should("be.visible");
        cy.get("[data-ouia-component-id='expression-column-4']").should("contain.text", "Qualified");
      });
  });
});
//# sourceMappingURL=DMNRunnerTest.js.map
