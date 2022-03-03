describe("Both BPMN DMN.", function () {
  before("Visit page", function () {
    cy.visit("/both-bpmn-dmn");
    cy.loadEditors(["both-bpmn", "both-dmn"]);
  });
  it("Test Load File And View", function () {
    cy.uploadFile("call centre drd.dmn", "both-dmn");
    cy.viewFile("call centre drd.dmn", "both-dmn");
    cy.uploadFile("process-string.bpmn", "both-bpmn");
    cy.viewFile("process-string.bpmn", "both-bpmn");
    cy.editor("both-dmn").find("[data-field='kie-palette']").should("be.visible");
    cy.editor("both-dmn")
      .ouiaId("collapsed-docks-bar", "collapsed-docks-bar-W", { timeout: 10000 })
      .should("be.visible");
    cy.editor("both-dmn")
      .ouiaId("collapsed-docks-bar", "collapsed-docks-bar-W")
      .find("button")
      .first()
      .should("be.visible")
      .click();
    cy.editor("both-dmn")
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
    cy.editor("both-bpmn").find("[data-title='Explore Diagram']").should("be.visible").click();
    cy.editor("both-bpmn")
      .find("[data-field='explorerPanelBody']")
      .wait(1000)
      .scrollIntoView()
      .should("be.visible")
      .find("a.gwt-Anchor")
      .should("have.length", 7)
      .then(function ($links) {
        expect($links.eq(0)).to.contain.text("Process string");
        expect($links.eq(1)).to.contain.text("Start");
        expect($links.eq(2)).to.contain.text("Exclusive");
        expect($links.eq(3)).to.contain.text("Process the String");
        expect($links.eq(4)).to.contain.text("Log Error");
        expect($links.eq(5)).to.contain.text("End");
        expect($links.eq(6)).to.contain.text("End Error");
      });
  });
});
//# sourceMappingURL=both-bpmn-dmn.spec.js.map
