sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'travel/sang/travelproc/test/integration/FirstJourney',
		'travel/sang/travelproc/test/integration/pages/TravelList',
		'travel/sang/travelproc/test/integration/pages/TravelObjectPage',
		'travel/sang/travelproc/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('travel/sang/travelproc') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);