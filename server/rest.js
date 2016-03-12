

JsonRoutes.add("get", "/diagnosticOrder/:id", function (req, res, next) {
  console.log('GET /diagnosticOrder/' + req.params.id);
  //console.log('res', res);

  var id = req.params.id;
  console.log('DiagnosticOrders.findOne(id)', DiagnosticOrders.findOne(id));

  JsonRoutes.sendResult(res, {
    code: 200,
    data: DiagnosticOrders.findOne(id)
  });
});
