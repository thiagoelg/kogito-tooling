describe("Dmn Editable.", function () {
  before("Visit page", function () {
    cy.visit("/dmn-editable");
    cy.loadEditors(["dmn-editable"]);
  });
  it("Test Load File And View", function () {
    cy.editor("dmn-editable").find("[data-field='kie-palette']").should("be.visible");
    cy.editor("dmn-editable")
      .ouiaId("collapsed-docks-bar", "collapsed-docks-bar-W", { timeout: 10000 })
      .should("be.visible");
    cy.uploadFile("call centre drd.dmn", "dmn-editable");
    cy.viewFile("call centre drd.dmn", "dmn-editable");
    cy.editor("dmn-editable")
      .ouiaId("collapsed-docks-bar", "collapsed-docks-bar-W")
      .find("button")
      .first()
      .should("be.visible")
      .click();
    cy.editor("dmn-editable")
      .ouiaId("expanded-docks-bar", "expanded-docks-bar-W")
      .should("be.visible")
      .within(function ($navigator) {
        cy.get("[data-field='item'][title='DRG']")
          .should("be.visible")
          .siblings("[data-field='item']")
          .should("have.length", 4)
          .then(function ($items) {
            expect($items.eq(0)).to.have.attr("title", "call centre drd");
            expect($items.eq(0)).not.to.have.class("editable");
            expect($items.eq(1)).to.have.attr("title", "DRDs");
            expect($items.eq(1)).not.to.have.class("editable");
            expect($items.eq(2)).to.have.attr("title", "call centre");
            expect($items.eq(2)).to.have.class("editable");
            expect($items.eq(3)).to.have.attr("title", "preconditions");
            expect($items.eq(3)).to.have.class("editable");
          });
      });
  });
});
//# sourceMappingURL=dmn-editable.spec.js.map
