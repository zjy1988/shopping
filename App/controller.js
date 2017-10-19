 /**
 * Created by Administrator on 2017/10/18.
 */
app.controller('shopController',['$scope','ajaxServer',function($scope,ajaxServer){
    ajaxServer.getData('get','Data/shop.json').then(function(data){
        $scope.things = data.data;
        getTotal()
    });
    function getTotal(){
        $scope.count = 0;
        $scope.total = 0;
        $scope.things.forEach(function(val){
            if(val.check){
                $scope.count += val.num;
                $scope.total += val.num * val.price;
            }
        })
    }
    $scope.deleteFn = function(index){
        $scope.things.splice(index,1)
    };
    $scope.checkAll = function(){
        if(!$scope.flag){
            $scope.flag = true;
            $scope.things.forEach(function(val){
                val.check = true;
            })
        }else{
            $scope.flag = false;
            $scope.things.forEach(function (val) {
                val.check = false;
            })
        }
        getTotal()
    };
    $scope.checkFn = function(index){
        var things = $scope.things;
        var count = 0;
        things[index].check = !things[index].check;
        for(var i=0;i<things.length;i++){
            if(things[i].check){
                count++;
            }
        }
        if(count == things.length){
            $scope.flag = true;
        }else{
            $scope.flag = false;
        }
        getTotal();
    };
    $scope.countFn = function (val) {
        console.log($scope.item)
        if (val == "+") {
            $scope.item.num += 1;
        } else {
            if ($scope.item.num <= 1) return;
            $scope.item.num -= 1;
        }
        getTotal()
    }
}]);