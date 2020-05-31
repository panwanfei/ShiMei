function text(type,url,path,callBack) {
    var xhr = new XMLHttpRequest();

    //2.建立服务端连接（找到哪个服务器去要数据）
    xhr.open(type,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+url);

    //3.设置头信息，告诉服务器让数据以表单的形式传递过去。
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

    xhr.send(path);

    //5.接受服务端返回的数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200){
            var resData = JSON.parse(xhr.responseText);
            var str = resData.data;
            callBack(str );
        }
    }
}