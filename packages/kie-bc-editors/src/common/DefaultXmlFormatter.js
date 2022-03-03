"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultXmlFormatter = void 0;
var cachedXsltProcessor;
function newXsltProcessor() {
  var xsltDoc = new DOMParser().parseFromString(
    [
      '<?xml version="1.0" encoding="UTF-8"?>' +
        '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:drools="http://www.jboss.org/drools" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" version="3.0">',
      '  <xsl:strip-space elements="*"/>',
      '  <xsl:template match="para[content-style][not(text())]">',
      '    <xsl:value-of select="normalize-space(.)"/>',
      "  </xsl:template>",
      '  <xsl:template match="node()|@*">',
      '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
      "  </xsl:template>",
      '  <xsl:output indent="yes" version="1.0" method="xml" encoding="UTF-8" omit-xml-declaration="no" cdata-section-elements="bpmn2:completionCondition bpmn2:condition bpmn2:conditionExpression bpmn2:from bpmn2:to bpmn2:documentation drools:metaValue drools:script"/>',
      "</xsl:stylesheet>",
    ].join("\n"),
    "application/xml"
  );
  var xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsltDoc);
  return xsltProcessor;
}
var DefaultXmlFormatter = (function () {
  function DefaultXmlFormatter() {}
  DefaultXmlFormatter.prototype.format = function (xml) {
    cachedXsltProcessor =
      cachedXsltProcessor !== null && cachedXsltProcessor !== void 0 ? cachedXsltProcessor : newXsltProcessor();
    var xmlDoc = new DOMParser().parseFromString(xml, "application/xml");
    var resultDoc = cachedXsltProcessor.transformToDocument(xmlDoc);
    var output = new XMLSerializer().serializeToString(resultDoc);
    if (!output.startsWith("<?xml")) {
      output = '<?xml version="1.0" encoding="UTF-8"?>\n' + output;
    }
    return output;
  };
  return DefaultXmlFormatter;
})();
exports.DefaultXmlFormatter = DefaultXmlFormatter;
//# sourceMappingURL=DefaultXmlFormatter.js.map
