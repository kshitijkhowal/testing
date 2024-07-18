$(".del-btn").click(function(){
    const i = $(this).attr("post-i")
    fetch(`/${i}`, {
        method: "delete",
        headers: { "Content-Type": "application/x-www-form-urlencoded"}
    })
    .then(function(res){
        window.location = res.url
        // window.location.reload()
    })
})



$(".edit-btn").click(function(){
    const i = $(this).attr("post-i");
    const tit_edit=prompt("Enter Your Title");
    const con_edit=prompt("Enter Your Content");
    fetch(`/${i}`, {
        method: "post",
        headers: { "Content-Type": "application/json"},
        body:JSON.stringify({tit_edit:tit_edit,con_edit:con_edit}),
    })
    .then(function(res){
        window.location = res.url
    })
})


