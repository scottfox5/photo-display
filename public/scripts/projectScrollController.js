afPhoto.controller('ProjectScrollController', function ($scope, $uibModal, $log, $document) {
  console.log('Project Scroll Controller connected...')

 // setting html template and js controller for modalPopup
  var modalPopup = function (id) {
    console.log('Modal Id pt2:', id);
    return $scope.modalInstance = $uibModal.open({
      templateUrl: '/public/views/galleryModal.html',
      controller: 'CarController as car'
    });
  };

  // function executed on ng-click='openModalPopup()'
  $scope.openModalPopup = function (id) {
    console.log('openModalPopup')
    console.log('Modal Id pt1:', id);
    modalPopup(id).result
    .then(function (data) {
      console.log('Data:', data)
      $scope.handleSuccess(data);
    })
    .then(null, function (reason) {
      $scope.handleDismiss(reason);
    });
  };

  // Log Success message
  $scope.handleSuccess = function (data) {
    $log.info('Modal closed: ' + data);
  };

  // Log Dismiss message // when clicking outside of modal
  $scope.handleDismiss = function (reason) {
    $log.info('Modal dismissed: ' + reason);
  }


});
