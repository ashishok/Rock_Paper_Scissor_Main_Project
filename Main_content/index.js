// finction to send name to the Game page
function nam() {

    const i = document.forms["myform1"]["fname"].value;
    
    sessionStorage.setItem("page",i);
    // document.getElementById("two").innerHTML = "<i> hello </i> \t" + "<strong> " + i;
    return;
}

// Exit button to exit the page
const exit = document.querySelector(".end_game");
exit.addEventListener('click', () => {
    setTimeout("window.close()", 300);
})

