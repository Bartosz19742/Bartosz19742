var portfolioApp = angular.module('portfolioApp',[]); 

portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.galleries = [
    { 'title':'ziemia1',
    'when':'2013-08-04', 
     'thumbnailUrl':'ziemia1.png'
    },
    { 'title':'ziemia2',
    'when':'2015-08-04', 
     'thumbnailUrl':'ziemia2.png'
    },
    { 'title':'ziemia3',
    'when':'2012-08-04', 
     'thumbnailUrl':'ziemia3.png'
    },
    { 'title':'ziemia4',
    'when':'2016-08-04', 
     'thumbnailUrl':'ziemia4.png'
    },
    { 'title':'ziemia5',
    'when':'2014-02-03', 
     'thumbnailUrl':'ziemia5.png'
    },
    { 'title':'ziemia6',
    'when':'2016-05-03', 
     'thumbnailUrl':'ziemia6.png'
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