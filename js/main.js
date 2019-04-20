var app = angular.module("app", ["ngRoute", "ui.bootstrap"]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "templates/app.index.html"
    })
    .when("/contact", {
      templateUrl: "templates/contact.html",
      controller: 'app.contact'
    })
    .when("/about", {
      templateUrl: "templates/about.html",
      controller: 'app.about'
    });
}]);

app.controller("app.contact", function($scope) {
  $scope.con = "fhjsdvfjhvsfjhvsdjhfvjh"
})

app.controller("app.about", function($scope) {
  $scope.con = "fhjsdvfjhvsfjhvsdjhfvjh"
})

app.controller("main.control", function($scope, $uibModal) {

     $scope.knowMore = function () {
      alert('know more')
    // $uibModal.open({
    //   templateUrl: 'modal.html',
    //   controller: function ($scope, $uibModalInstance) {
    //     $scope.ok = function () {
    //       $uibModalInstance.close();
    //     };
    //
    //     $scope.cancel = function () {
    //       $uibModalInstance.dismiss('cancel');
    //     };
    //   }
    // })
  };

  $('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoPlay: true,
    dots: true,
    autoPlayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      600: {
        items: 3,
        loop: true,
      },
      1000: {
        items: 5,
        loop: true,
      }
    }
  })

  $scope.bb = 'fromjsssssssss'
  $scope.materials = [{
      img: 'img/parts/i3.jpg',
      name: 'CPU(i3)',
      icon: 'img/icons/hardware.png',
    },
    {
      img: 'img/parts/i5.jpg',
      name: 'CPU(i5)',
      icon: 'img/icons/hardware.png',
    }, {
      img: 'img/parts/harddisk.jpg',
      name: 'Segate HardDisk',
      icon: 'img/icons/harddisk.png',
    }, {
      img: 'img/parts/key.jpg',
      name: 'RGB-Keyboard',
      icon: 'img/icons/keyboard.png',
    }, {
      img: 'img/parts/mouse.jpg',
      name: 'RGB-Mouse',
      icon: 'img/icons/mouse.png',
    }, {
      img: 'img/parts/pad.jpg',
      name: 'RGB-Mouse-Pad',
      icon: 'img/icons/m_pad.png',
    }, {
      img: 'img/parts/gcard.jpg',
      name: 'GTX_1080 Graphics Card',
      icon: 'img/icons/graphics-card.png',
    },
    {
      img: 'img/parts/gcard_box.jpg',
      name: 'GTX_720 Graphics Card',
      icon: 'img/icons/graphics-card.png',
    }, {
      img: 'img/parts/smps.jpg',
      name: 'Power Supply',
      icon: 'img/icons/power.png',
    },
  ]
});
