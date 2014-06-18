var tasks = ["clean socks", "count SEPTA tokens", "uninstall Safari", "feed pigeons", "feed lions", "eat lions"];
var q = window.confirm("Don't make me ask twice: Press <cancel> if you have another task to do; Press <OK> if you've got enough on your plate.");
//adding additional tasks
while (q == 0) {
    tasks.push(
    prompt("What's left to do?"));
    var q = window.confirm("Are you sure that's all? Press <cancel> to add more.");
}
//generating task list
for (j=0; j < tasks.length; j++) {
    document.write("<ul>" + "<li>" + tasks[j] + "</ul>");
};
/*if (j = tasks.length) {
    document.write("</ul>")
}*/