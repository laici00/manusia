function validate() {

    var name = document.getElementById("name").value;
    if (name === "" || name === null) {

        alert("?????? ?????? ????");
        return false;
        
    } else if (name === "413251223") {
        alert("???????");
        document.getElementById("t2").textContent = "<o>";
        
        document.getElementById("t2").href = "https://i.imgur.com/xnmpNDh.png";

    } else {
        alert("????????? ????");
        document.getElementById("name").value = "";
        return false;
    }

}



