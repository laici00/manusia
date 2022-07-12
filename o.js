function validate() {

    var name = document.getElementById("name").value;
    var text = document.getElementById("text").value;

    if (name === "ywfmdilbnlybd") {
        document.getElementById("t1").textContent = "//Count letters & add.";
        document.getElementById("t2").textContent = "";
        document.getElementById('name').value = null;
    }

    if (name === "57") {
        document.getElementById("text").textContent = "//combine tres hidden numero.";
        document.getElementById("text2").textContent = "//Top to bottom.";

        var img = document.createElement("img");
       
        img.src = "https://i.imgur.com/mZVLypZ.jpg";
        var src = document.getElementById("pic");
        img.style = "width:400px;height:500px;";
        var style = document.getElementById("pic");
        src.appendChild(img);
        style.appendChild(img);
        document.getElementById('name').value = null;
        document.getElementById("t1").textContent = null;
        document.getElementById("t2").textContent = null;
        
        document.getElementById("title").style = "margin-top : 0px;";
    }

    if (name === "271691") {
        
        
        document.getElementById("t1").textContent = "//Convert numero to letters. ";
        document.getElementById("text").textContent = null;
        document.getElementById("text2").textContent = null;
        document.getElementById("name").value = null;
        document.getElementById("link").textContent = "https://streamable.com/xokser";
        document.getElementById("link").href = "https://streamable.com/xokser";
    }

    if (name === "tragedy" || name === "TRAGEDY") {
        document.getElementById("link").textContent = null;
        document.getElementById("link").href = null;
        document.getElementById("t1").textContent = "//Chapter I completed.";
        document.getElementById("link2").style = "color:yellow";
        document.getElementById("link2").textContent = "<o>";
        document.getElementById("link2").href = "o2.html";
    }



}




