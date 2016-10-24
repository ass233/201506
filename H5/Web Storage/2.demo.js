/**
 * Created by 北狼 on 2016/10/24.
 */
function saveStorage(id) {
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    localStorage.setItem(time,data);
    alert("数据已存储");
    loadStorage('msg');
}

function loadStorage(id) {
    var result = "<table border = '1'>";
    for(var i = 0;i<localStorage.length;i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var data = new Date();
        data.setTime(key);
        result += "<tr><td>"+"</td><td>"+data+"</td></tr>";
    }
    result += "</table>";
    var target = document.getElementById(id);
    target.innerHTML = result;
}

function clearStorage() {
    localStorage.clear();
    alert("数据已删除");
    loadStorage('msg')
}