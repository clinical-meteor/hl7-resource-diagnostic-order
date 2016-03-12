Package.describe({
  name: 'clinical:hl7-resource-diagnostic-order',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('aldeed:simple-schema@1.3.3');
  api.use('clinical:hl7-resource-datatypes@0.0.1');
  api.use('simple:json-routes@2.1.0');

  // api.use('check', 'server');
  // api.use('meteorhacks:async@1.0.0', 'server');

  api.addFiles('lib/hl7-resource-diagnostic-order.js');
  api.addFiles('server/rest.js', 'server');

  api.export('DiagnosticOrderSchema');
  api.export('DiagnosticOrders');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clinical:hl7-resource-diagnostic-order');
});
