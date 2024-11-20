window.addEventListener("load",function(){

    // 모바일 메뉴열기, 닫기
    let btn_gnb = this.document.querySelector("#btn_gnb")
    let hidden_gnb = this.document.querySelector(".hidden_gnb")
    let btn_close_gnb = this.document.querySelector("#btn_close_gnb")

    btn_gnb.addEventListener("click",function(){
        hidden_gnb.classList.add("on")
    })
    btn_close_gnb.addEventListener("click",function(){
        hidden_gnb.classList.remove("on")
    })

})