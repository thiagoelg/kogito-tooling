describe("Dmn Read Only.", function () {
  before("Visit page", function () {
    cy.visit("/dmn-read-only");
    cy.loadEditors(["dmn-read-only"]);
  });
  it.skip("Test Load File And View", function () {
    cy.editor("dmn-read-only").find("[data-field='palettePanel']").should("not.be.visible");
    cy.editor("dmn-read-only")
      .ouiaId("collapsed-docks-bar", "collapsed-docks-bar-W", { timeout: 10000 })
      .should("be.visible");
    cy.uploadFile("call centre drd.dmn", "dmn-read-only");
    cy.viewFile("call centre drd.dmn", "dmn-read-only");
    cy.editor("dmn-read-only")
      .ouiaId("collapsed-docks-bar", "collapsed-docks-bar-W")
      .find("button")
      .first()
      .should("be.visible")
      .click();
    cy.editor("dmn-read-only")
      .ouiaId("expanded-docks-bar", "expanded-docks-bar-W")
      .within(function ($navigator) {
        cy.wrap($navigator)
          .find("[data-field='item'][title='DRG']")
          .should("be.visible")
          .siblings("[data-field='item']")
          .should("have.length", 4)
          .then(function ($items) {
            expect($items.eq(0)).to.have.attr("title", "call centre drd");
            expect($items.eq(0)).not.to.have.class("editable");
            expect($items.eq(1)).to.have.attr("title", "DRDs");
            expect($items.eq(1)).not.to.have.class("editable");
            expect($items.eq(2)).to.have.attr("title", "call centre");
            expect($items.eq(2)).not.to.have.class("editable");
            expect($items.eq(3)).to.have.attr("title", "preconditions");
            expect($items.eq(3)).not.to.have.class("editable");
          });
      });
  });
});
//# sourceMappingURL=dmn-readonly.spec.js.map
