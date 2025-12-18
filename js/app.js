function openFile() {
var input = document.getElementById("url");
var msg = document.getElementById("msg");
var link = input.value.trim();

if (link === "") {
msg.textContent = "Paste a Diskwala link";
return;
}

if (!link.startsWith("https://diskwala.com/
")) {
msg.textContent = "Invalid Diskwala link";
return;
}

msg.textContent = "";
window.open(link, "_blank");
}
