"use strict";
exports.FLIGHTS = [
    { id: 1, name: 'Flight1', totalPrice: 100.00, destination: 'MSP', userPrice: [50.00, 50.00], userId: [1, 2] },
    { id: 2, name: 'Flight2', totalPrice: 200.00, destination: 'DEN', userPrice: [60.00, 140.00], userId: [1, 2] },
    { id: 3, name: 'Flight3', totalPrice: 300.00, destination: 'MKE', userPrice: [100.00, 200.00], userId: [1, 2] },
    { id: 4, name: 'Flight4', totalPrice: 400.00, destination: 'BOS', userPrice: [220.00, 180.00], userId: [1, 2] },
    { id: 5, name: 'Flight5', totalPrice: 500.00, destination: 'LGA', userPrice: [450.00, 50.00], userId: [1, 2] }
];
exports.FLYERS = [
    {
        id: 1,
        name: 'Max',
        startingLocation: 'ORD'
    },
    {
        id: 2,
        name: 'Ben',
        startingLocation: 'ORD'
    },
    {
        id: 3,
        name: 'Luke',
        startingLocation: 'MKE'
    }
];
exports.FLIGHTRESULTS = [
    {
        id: 1,
        price: 500,
        startingLocation: 'ORD',
        endingLocation: 'BOS',
        startDate: '2/25/2017',
        endDate: '2/27/2017',
        startTime: '14:50',
        endTime: '18:10'
    },
    {
        id: 2,
        price: 276,
        startingLocation: 'MKE',
        endingLocation: 'BOS',
        startDate: '2/25/2017',
        endDate: '2/27/2017',
        startTime: '16:15',
        endTime: '20:15'
    },
    {
        id: 3,
        price: 320,
        startingLocation: 'ORD',
        endingLocation: 'LGA',
        startDate: '2/25/2017',
        endDate: '2/27/2017',
        startTime: '15:50',
        endTime: '19:00'
    },
    {
        id: 4,
        price: 700,
        startingLocation: 'MKE',
        endingLocation: 'LGA',
        startDate: '2/25/2017',
        endDate: '2/27/2017',
        startTime: '16:15',
        endTime: '20:15'
    }
];
exports.FLYERFLIGHTRESULTS = [
    {
        id: 1,
        flyer: this.FLYERS[0],
        flightResult: this.FLIGHTRESULTS[0]
    },
    {
        id: 2,
        flyer: this.FLYERS[1],
        flightResult: this.FLIGHTRESULTS[0]
    },
    {
        id: 3,
        flyer: this.FLYERS[2],
        flightResult: this.FLIGHTRESULTS[1]
    },
    {
        id: 4,
        flyer: this.FLYERS[0],
        flightResult: this.FLIGHTRESULTS[2]
    },
    {
        id: 5,
        flyer: this.FLYERS[1],
        flightResult: this.FLIGHTRESULTS[2]
    },
    {
        id: 6,
        flyer: this.FLYERS[2],
        flightResult: this.FLIGHTRESULTS[3]
    }
];
exports.DESTINATIONRESULTS = [
    {
        id: 1,
        destination: 'BOS',
        flyerFlightResult: [this.FLYERFLIGHTRESULTS[0], this.FLYERFLIGHTRESULTS[1], this.FLYERFLIGHTRESULTS[2]],
        firstArrive: 1514407545000,
        lastArrive: 1514414748000,
        firstDepart: 1514407545000,
        lastDepart: 1514411148000,
        totalCost: 1276
    },
    {
        id: 2,
        destination: 'LGA',
        flyerFlightResult: [this.FLYERFLIGHTRESULTS[3], this.FLYERFLIGHTRESULTS[4], this.FLYERFLIGHTRESULTS[5]],
        firstArrive: 1514407545000,
        lastArrive: 1514414748000,
        firstDepart: 1514407545000,
        lastDepart: 1514411148000,
        totalCost: 1340
    }
];
//# sourceMappingURL=mock-flight-results.js.map