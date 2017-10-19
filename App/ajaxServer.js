/**
 * Created by Administrator on 2017/10/12.
 */
app.factory('ajaxServer',['$http','$q',function($http,$q){
    return {
        getData:function(type,url){
            var df = $q.defer();
            if(type.toUpperCase() === 'JSONP'){
                $.ajax({
                    url:url,
                    dataType:type,
                    success:function(data){
                        df.resolve(data);
                    },
                    error:function(err){
                        df.reject(err);
                    }
                })
            }else{
                $http({
                    method:type,
                    url:url
                }).then(function(data){
                    df.resolve(data);
                },function(err){
                    df.reject(err);
                })
            }
            return df.promise;
        }
    }
}]);