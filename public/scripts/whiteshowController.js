afPhoto.controller('WhiteShowController', function ($scope, $uibModal, $log, $document) {
  console.log('White Show Controller connected...')

  var modalPopup = function () {
    return $scope.modalInstance = $uibModal.open({
      templateUrl: '/public/views/whiteshowmodal.html',
      controller: 'CarController as car'
    });
  };

  // var vm = this;
  $scope.openModalPopup = function () {
    console.log('openModalPopup')
    modalPopup().result
    .then(function (data) {
      console.log('Data:', data)
      $scope.handleSuccess(data);
    })
    .then(null, function (reason) {
      $scope.handleDismiss(reason);
    });
  };

  // $scope.openModalPopup = function(Id) {
  //   var modalInstance = $uibModal.open({
  //     templateUrl:'../../public/views/teamplates/bikeDetails.html',
  //     controller: 'bikeController',
  //     resolve: {
  //       editId: function() {
  //         console.log(Id);
  //         return Id;
  //       }
  //     }
  //   });
  // }

  
  // Close the modal if Yes button click
$scope.ok = function () {
  $scope.modalInstance.close('Ok Button Clicked')
};

// Dismiss the modal if No button click
$scope.cancel = function () {
  $scope.modalInstance.dismiss('Cancel Button Clicked')
};

// Log Success message
$scope.handleSuccess = function (data) {
  $log.info('Modal closed: ' + data);
};

// Log Dismiss message
$scope.handleDismiss = function (reason) {
  $log.info('Modal dismissed: ' + reason);
}

  //   console.log ('modal stuff... this', this)
  //   var $ctrl = this;
  //   $ctrl.items = ['item1', 'item2', 'item3'];
  //
  //   $ctrl.animationsEnabled = true;
  //   console.log ('modal stuff... $ctrl', $ctrl)
  //
    $scope.open = function (size, parentSelector) {
      console.log ('$ctrl.open');
      var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      var modalInstance = $uibModal.open({
        animation: $ctrl.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        size: size,
        appendTo: parentElem,
        resolve: {
          items: function () {
            return $ctrl.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        console.log ('modal stuff2...')

        $ctrl.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  //
  //   $ctrl.openComponentModal = function () {
  //     console.log ('modal stuff3...')
  //
  //     var modalInstance = $uibModal.open({
  //       animation: $ctrl.animationsEnabled,
  //       component: 'modalComponent',
  //       resolve: {
  //         items: function () {
  //           return $ctrl.items;
  //         }
  //       }
  //     });
  //
  //     modalInstance.result.then(function (selectedItem) {
  //       $ctrl.selected = selectedItem;
  //     }, function () {
  //       $log.info('modal-component dismissed at: ' + new Date());
  //     });
  //   };
  //
  //
  //     $uibModal.open({
  //       animation: $ctrl.animationsEnabled,
  //       ariaLabelledBy: 'modal-title-top',
  //       ariaDescribedBy: 'modal-body-top',
  //       templateUrl: 'stackedModal.html',
  //       size: 'sm',
  //       controller: function($scope) {
  //         $scope.name = 'top';
  //       }
  //     });
  //   };
  //   console.log('modal stuff4...');
  //   $ctrl.toggleAnimation = function () {
  //     $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  //   };
  // });
  //
  // // Please note that $uibModalInstance represents a modal window (instance) dependency.
  // // It is not the same as the $uibModal service used above.
  //
  // afPhoto.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  //   console.log ('Modal Instance ctrl')
  //
  //   var $ctrl = this;
  //   $ctrl.items = items;
  //   $ctrl.selected = {
  //     item: $ctrl.items[0]
  //   };
  //
  //   $ctrl.ok = function () {
  //     $uibModalInstance.close($ctrl.selected.item);
  //   };
  //
  //   $ctrl.cancel = function () {
  //     $uibModalInstance.dismiss('cancel');
  //   };
  // });
  //
  // // Please note that the close and dismiss bindings are from $uibModalInstance.
  //
  // afPhoto.component('modalComponent', {
  //   templateUrl: 'myModalContent.html',
  //   bindings: {
  //     resolve: '<',
  //     close: '&',
  //     dismiss: '&'
  //   },
  //   controller: function () {
  //     var $ctrl = this;
  //
  //     $ctrl.$onInit = function () {
  //       $ctrl.items = $ctrl.resolve.items;
  //       $ctrl.selected = {
  //         item: $ctrl.items[0]
  //       };
  //     };
  //
  //     $ctrl.ok = function () {
  //       $ctrl.close({$value: $ctrl.selected.item});
  //     };
  //
  //     $ctrl.cancel = function () {
  //       $ctrl.dismiss({$value: 'cancel'});
  //     };
  //   }
  //
  //   /// END of MODAL stuff


});
