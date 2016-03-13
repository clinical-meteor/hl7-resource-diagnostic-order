// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (process.env.INITIALIZE) {
    console.log('INITIALZING');
    if (DiagnosticOrders.find().count() === 0) {
    console.log('No DiagnosticOrders found.  Creating some...');

      var orderId = DiagnosticOrders.insert({
        orderer: {
          display: "Jane Doe",
          reference: "Jane Doe"
        },
        public: true,
        ordinal: 1,
        status: "completed",
        event: [{
          description: "Referred to rheumatology.",
          dateTime: new Date(2009, 10, 13)
        }],
        note: ["Pt sudden onset left sidded numbness, S/P ER visit, being followed by neuro.  Childhood hx of delayed myelinization."]
      });
      console.log('orderId', orderId);

      orderId = DiagnosticOrders.insert({
        orderer: {
          display: "Jane Doe",
          reference: "Jane Doe"
        },
        public: true,
        ordinal: 2,
        status: "completed",
        event: [{
          description: "MRI brain w/wo contrast.",
          dateTime: new Date(2009, 10, 27)
        }],
        note: ["dx - multiple sclerosis"]
      });
      console.log('orderId', orderId);

      orderId = DiagnosticOrders.insert({
        orderer: {
          display: "Jane Doe",
          reference: "Jane Doe"
        },
        public: true,
        ordinal: 3,
        status: "completed",
        event: [{
          description: "Cold air challenge.",
          dateTime: new Date(2009, 10, 27)
        }],
        note: ["Dx - asthma?"]
      });
      console.log('orderId', orderId);

      orderId = DiagnosticOrders.insert({
        orderer: {
          display: "Jane Doe",
          reference: "Jane Doe"
        },
        public: true,
        ordinal: 3,
        status: "completed",
        event: [{
          description: "Allergy Panel",
          dateTime: new Date(2009, 10, 27)
        }]
      });
      console.log('orderId', orderId);

    }
  }
});
