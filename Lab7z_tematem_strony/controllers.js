var portfolioApp = angular.module('portfolioApp',[]); 

portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.galleries = [
    { 'title':'FC Barcelona',
    'when':'2013-08-04', 
     'thumbnailUrl':'barca.jpg'
    },
    { 'title':'Manchester UTD',
    'when':'2015-08-04', 
     'thumbnailUrl':'man.jpg'
    },
    { 'title':'PSG',
    'when':'2012-08-04', 
     'thumbnailUrl':'psg.jpg'
    },
    { 'title':'Real Madryt',
    'when':'2016-08-04', 
     'thumbnailUrl':'real.png'
    },
    { 'title':'Manchester City',
    'when':'2014-02-03', 
     'thumbnailUrl':'city.jpg'
    },
    { 'title':'Bayern Monachium',
    'when':'2016-05-03', 
     'thumbnailUrl':'bay.jpg'
    },
    ];
    $scope.sortList = 
    [
        {
            'label':'Poukładane alfabetycznie',
            'value':'title'
        },
        {
            'label':'Poukładane chronologicznie od najstarszego do najnowszego obrazka',
            'value':'when'
        },
        {
            'label':'Od najnowszego do starszego obrazka',
            'value':'-when'
        },
    ];
}); 