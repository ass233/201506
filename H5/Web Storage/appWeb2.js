/**
 * Created by 北狼 on 2016/10/24.
 */
function saveStorage(id) {
    var target = document.getElementById(id);
    var str = target.value;
//保存数据 key value
    localStorage.setItem("message",str);
}

function loadStorage(id) {
    var target = document.getElementById(id);
    //读取数据
    var msg = localStorage.getItem("message");
    target.innerHTML = msg;
}