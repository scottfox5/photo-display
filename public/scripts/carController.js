afPhoto.controller('CarController', function ($scope, $uibModal, $uibModalInstance) {

  console.log('Car Controller connected...')
  console.log ('modal stuff... this', this)

  // closing the modal on button ng-click='cancel()'
  $scope.closeModal = function () {
    console.log('Close modal:')
    $uibModalInstance.dismiss('button click');
  };

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  // set current index to id of image clicked 
  var currIndex = 0;
  var modalInstance = undefined;
  var slides = $scope.slides = [
    {
      image: 'public/assets/photos/adriennefox.photography/maternal-instinct/IMG_1634.jpg',
      text: 'maternal-instinct-pumping',
      id: 0
    },
    {
      image: 'public/assets/photos/adriennefox.photography/maternal-instinct/Julia.jpg',
      text: 'maternal-instinct-julia',
      id: 1
    }
  ];

});
