export const singlecustomer = {
  'customerId': 'CUSTOMER1',
  'title': 'MR',
  'givenName': 'Tony',
  'surname': 'Davis',
  'email': '',
  'mobileDetails': {
    'countryCode': '+61',
    'mobileNumber': '447804314'
  },
  'forwardEmail': false,
  'forwardSMS': true,
  'products': [
    {
      'productId': 'CUSTOMER1FLIGHT2',
      'flightNumber': '497',
      'departure': {
        'airportCode': 'SYD',
        'airportName': 'SYDNEY',
        'departureDate': '20151022',
        'departureTime': '1153'
      },
      'arrival': {
        'airportCode': 'MEL',
        'airportName': 'MELBOURNE',
        'arrivalDate': '20151022',
        'arrivalTime': '1253'
      },
      'companyIdentifier': {
        'marketingCarrierCode': 'QF'
      },
      'barcodeRequired': true,
      'passbookRequired': true
    }
  ]
};

export const singleCustomerWithInfant = {
  'customerId': 'CUSTOMER1',
  'title': 'MR',
  'givenName': 'Tony',
  'surname': 'Davis',
  'email': '',
  'mobileDetails': {
    'countryCode': '+61',
    'mobileNumber': '447804314'
  },
  'forwardEmail': false,
  'forwardSMS': true,
  'products': [
    {
      'productId': 'CUSTOMER1FLIGHT2',
      'flightNumber': '497',
      'departure': {
        'airportCode': 'SYD',
        'airportName': 'SYDNEY',
        'departureDate': '20151022',
        'departureTime': '1153'
      },
      'arrival': {
        'airportCode': 'MEL',
        'airportName': 'MELBOURNE',
        'arrivalDate': '20151022',
        'arrivalTime': '1253'
      },
      'companyIdentifier': {
        'marketingCarrierCode': 'QF'
      },
      'barcodeRequired': true,
      'passbookRequired': true
    }
  ],
  'infants': [
    {
      'customerId': 'INFANT1',
      'title': 'MR',
      'givenName': 'Tony',
      'surname': 'Davis',
      'email': '',
      'mobileDetails': {
        'countryCode': '+61',
        'mobileNumber': '447804314'
      },
      'forwardEmail': false,
      'forwardSMS': true,
      'products': [
        {
          'productId': 'INF_PROD_1',
          'flightNumber': '497',
          'departure': {
            'airportCode': 'SYD',
            'airportName': 'SYDNEY',
            'departureDate': '20151022',
            'departureTime': '1153'
          },
          'arrival': {
            'airportCode': 'MEL',
            'airportName': 'MELBOURNE',
            'arrivalDate': '20151022',
            'arrivalTime': '1253'
          },
          'companyIdentifier': {
            'marketingCarrierCode': 'QF'
          },
          'barcodeRequired': true,
          'passbookRequired': true
        }
      ]
    }
  ]
};

export const singleCustomerRequestBody = {
  booking: {
    'pnr': '6Q7RNS',
    'surname': 'QANTAS'
  },
  customers: [
    {
      customerId: 'CUSTOMER1',
      email: 'test@email.com',
      givenName: 'Tony',
      forwardEmail: true,
      forwardSMS: true,
      mobileDetails: {
        countryCode: '+61',
        mobileNumber: '123456789'
      },
      products: [
        {
          arrival: {
            airportCode: 'MEL',
            airportName: 'MELBOURNE',
            arrivalDate: '20151022',
            arrivalTime: '1253'
          },
          barcodeRequired: true,
          companyIdentifier: {
            marketingCarrierCode: 'QF'
          },
          departure: {
            airportCode: 'SYD',
            airportName: 'SYDNEY',
            departureDate: '20151022',
            departureTime: '1153'
          },
          flightNumber: '497',
          passbookRequired: true,
          productId: 'CUSTOMER1FLIGHT2'
        }
      ],
      surname: 'Davis',
      title: 'MR'
    }
  ]
};

export const multiCustomerRequestBody = {
  booking: {
    'pnr': 'pnr',
    'surname': 'QANTAS'
  },
  customers: [
    {
      customerId: 'CUSTOMER1',
      email: 'test@email.com',
      givenName: 'givenName',
      forwardEmail: true,
      forwardSMS: true,
      mobileDetails: {
        countryCode: '+61',
        mobileNumber: '123456789'
      },
      products: [{
        arrival: {
          airportCode: 'MEL',
          airportName: 'MELBOURNE',
          arrivalDate: '20151022',
          arrivalTime: '1253'
        },
        barcodeRequired: true,
        companyIdentifier: {
          marketingCarrierCode: 'QF'
        },
        departure: {
          airportCode: 'SYD',
          airportName: 'airportName',
          departureDate: '20151022',
          departureTime: '1153'
        },
        flightNumber: '497',
        passbookRequired: true,
        productId: 'CUSTOMER1FLIGHT2'
      }],
      surname: 'surname',
      title: 'title'
    },
    {
      customerId: 'CUSTOMER2',
      email: 'test@email.com',
      givenName: 'givenName',
      forwardEmail: true,
      forwardSMS: true,
      mobileDetails: {
        countryCode: '+61',
        mobileNumber: '987654321'
      },
      products: [{
        arrival: {
          airportCode: 'MEL',
          airportName: 'airportName',
          arrivalDate: '20151022',
          arrivalTime: '1253'
        },
        barcodeRequired: true,
        companyIdentifier: {
          marketingCarrierCode: 'QF'
        },
        departure: {
          airportCode: 'SYD',
          airportName: 'SYDNEY',
          departureDate: '20151022',
          departureTime: '1153'
        },
        flightNumber: '497',
        passbookRequired: true,
        productId: 'CUSTOMER1FLIGHT2'
      }],
      surname: 'surname',
      title: 'title'
    }]
  };
  
  
  export const inValidMultiCustomerRequestBody = {
    booking: {
      'pnr': 'pnr',
      'surname': 'QANTAS'
    },
    customers: [
      {
        customerId: 'CUSTOMER1',
        email: 'test@email.com',
        givenName: 'givenName',
        forwardEmail: true,
        forwardSMS: true,
        mobileDetails: {
          countryCode: '+61',
          mobileNumber: '123456789'
        },
        products: [{
          arrival: {
            airportCode: 'MEL',
            airportName: 'MELBOURNE',
            arrivalDate: '20151022',
            arrivalTime: '1253'
          },
          barcodeRequired: true,
          companyIdentifier: {
            marketingCarrierCode: 'QF'
          },
          departure: {
            airportCode: 'SYD',
            airportName: 'airportName',
            departureDate: '20151022',
            departureTime: '1153'
          },
          flightNumber: '497',
          passbookRequired: true,
          productId: 'CUSTOMER1FLIGHT2'
        }],
        surname: 'surname',
        title: 'title'
      },
      {
        customerId: 'CUSTOMER2',
        email: 'invalidemail.com',
        givenName: 'givenName',
        forwardEmail: true,
        forwardSMS: true,
        mobileDetails: {
          countryCode: '+61',
          mobileNumber: '987654321'
        },
        products: [{
          arrival: {
            airportCode: 'MEL',
            airportName: 'airportName',
            arrivalDate: '20151022',
            arrivalTime: '1253'
          },
          barcodeRequired: true,
          companyIdentifier: {
            marketingCarrierCode: 'QF'
          },
          departure: {
            airportCode: 'SYD',
            airportName: 'SYDNEY',
            departureDate: '20151022',
            departureTime: '1153'
          },
          flightNumber: '497',
          passbookRequired: true,
          productId: 'CUSTOMER1FLIGHT2'
        }],
        surname: 'surname',
        title: 'title'
      }]
    };
