/**
 * Created by Administrator on 2017/10/18.
 */
app.directive('shopping',function(){
    return {
        templateUrl:'App/View/shop.html',
        transclude: true,
        scope:{
            item:'=item',
            index:'@index'
        },
        link:function(scope,ele,attr){
            $('ion-scroll').height($(window).height())
        },
        controller:'shopController'
    }
});