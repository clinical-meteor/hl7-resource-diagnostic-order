describe('clinical:hl7-resources-diagnostic-order', function () {
  var server = meteor();
  var client = browser(server);

  it('DiagnosticOrders should exist on the client', function () {
    return client.execute(function () {
      expect(DiagnosticOrders).to.exist;
    });
  });

  it('DiagnosticOrders should exist on the server', function () {
    return server.execute(function () {
      expect(DiagnosticOrders).to.exist;
    });
  });

});
