$("#register-btn").click(function () {
    $("#login").slideUp()
    $("#register").fadeIn()
})
$("#login-btn").click(function () {
    $("#register").slideUp()
    $("#login").slideDown()
})

//#region  js cods in Giga Menu In NavBar

var gigaCloseNumber = 0;

function openNav(openBtn, closeBtn, widthBtnOrFother, widthPanel, closeFother, closePanel, attribute = "width") {
    const GigaMenuFother = document.querySelector(closeBtn);
    const GigaMenu = document.querySelector(openBtn);
    const body = document.querySelector("body");


    if (gigaCloseNumber == 0) {
        GigaMenuFother.style.cssText = `${attribute}:${widthBtnOrFother}`;
        GigaMenu.style.cssText = `${attribute}:${widthPanel}`;
        body.style.overflow = "hidden";
        gigaCloseNumber = 1;
    } else if (gigaCloseNumber === 1) {
        function close() {
            GigaMenu.style.cssText = `${attribute}:${closeFother}`;
            GigaMenu.removeAttribute("style");

            setTimeout(() => {
                GigaMenuFother.style.cssText = `${attribute}:${closePanel}`;
                body.style.overflow = "auto";
            }, 400);
            gigaCloseNumber = 0;

        }
        close();
    }
    GigaMenuFother.addEventListener("click", () => {
        openNav(openBtn, closeBtn, widthBtnOrFother, widthPanel, closeFother, closePanel);
    }, false);

}

//#endregion


//#region 2 click
{
    const btn = document.querySelector("#BtnCreatGp");
    btn.addEventListener("click", () => {
        openNav('.gigamenu', '.GigaMenuFother', '100%', '290px', '0', '0');
        openNav('.m21', '.m20', 'inherit', 'inherit', 'hidden', 'hidden', 'visibility');
    });
}
//#endregion


//#region go Chat

// exit btn when click 
function visibility1(do1, dn2) {
    const d1 = document.querySelector(do1);
    const d2 = document.querySelector(dn2);
    const btns = [...document.querySelectorAll("#users li")]

    btns.forEach((item) => {
      item.addEventListener("click",()=>{
        if (!item.classList.contains("FixBug") && !item.classList.contains("search")) {
            d1.classList.toggle("d-none");
            d2.classList.toggle("d-none");
        }
      })
    })
}

// users when click 
function visibility2(do1, dn2, btn) {

    const d1 = document.querySelector(do1);
    const d2 = document.querySelector(dn2);
    var btnn = document.querySelector(btn);
    btnn.addEventListener("click", () => {
        d1.classList.toggle("d-none");
        d2.classList.toggle("d-none");
    })
}


// auto runs 
visibility1(".tag1", ".tag2");

visibility2(".tag1", ".tag2",".clickVSort2");
//#endregion
