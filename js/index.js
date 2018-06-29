$(function () {
    function xiax(s1,su){
        let flag=true
        s1.click(function(){
            if(flag){
                ha1(this,su);
                flag=false;
            }
            else{
                ha2(this)
                flag=true
            }

        })

        function ha1(obj,shu){
            $(obj).stop()
            $(obj).css({transform:"rotate(45deg)"})
            $(obj).parent().parent().animate({"height":shu+"px"})

        }
        function ha2(obj){
            $(obj).stop()
            $(obj).css({transform:"rotate(0deg)"})
            $(obj).parent().parent().css({"height":"37px"})

        }
    }
    let s1=$("h4").eq(0)
    xiax(s1,300)
    let s2=$("h4").eq(1)
    xiax(s2,350)
    let s3=$("h4").eq(2)
    xiax(s3,100)
    let s4=$("h4").eq(3)
    xiax(s4,100)
    let s5=$("h4").eq(4)
    xiax(s5,130)
    let s6=$("h4").eq(5)
    xiax(s6,160)
    let s7=$("h4").eq(6)
    xiax(s7,130)
})