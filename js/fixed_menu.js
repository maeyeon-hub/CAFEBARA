window.addEventListener("load",function(){

    let fixed_menu = this.document.querySelector(".fixed_menu")
    let lastScrollTop = 0
    let hideTimeOut

    this.window.addEventListener("scroll",function(){
        // 스크롤했을 때 실행되는 동작
       
        let scrollTop = this.document.documentElement.scrollTop
        // 위에서 스크롤 바가 얼만큼 내려왔는지 계산하여 변수에 저장
        if(scrollTop < lastScrollTop){
            // 마우스 휠을 위로 올렸을 때
            fixed_menu.classList.add("on")
            // 2초 뒤에 나타난 메뉴가 사라지게 됨
            // 이미 존재하는 예약 타임이 있다면 제거
            if(hideTimeOut){
                this.clearTimeout(hideTimeOut)
            }
            hideTimeOut = this.setTimeout(function(){
                fixed_menu.classList.remove("on")
            },2000)
        }else{
            // 마우스 휠을 아래로 내렸을 때
            fixed_menu.classList.remove("on")
        }
        
        lastScrollTop = scrollTop


    })

    // 하단 메뉴에 마우스 올리면 기존에 설정되어있었던 2초뒤에 사라지는 동작이 취소됨
    fixed_menu.addEventListener("mouseover",function(){
        clearTimeout(hideTimeOut)
    })
    fixed_menu.addEventListener("mouseout",function(){
        hideTimeOut = setTimeout(function(){
            fixed_menu.classList.remove("on")
        },2000)
    })

    let btn_top = this.document.querySelector("#btn_top")
    // 위로가기 버튼을 클릭하면 페이지 최상단으로 부드럽게 스크롤하여 이용되는 기능
    btn_top.addEventListener("click",function(e){
        window.scrollTo({top:0,behavior:"smooth"})
        e.preventDefault()
    })












})