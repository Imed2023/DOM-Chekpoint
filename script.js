//Delete items from the cart

let del=document.querySelectorAll(".delete")
let pr=document.querySelectorAll(".price")


for (let i = 0; i < del.length; i++) {
   
   del[i].addEventListener("click",function() {
    var mt=pr[i].innerHTML
    document.getElementById("finalPrice").value -=mt

        del[i].parentElement.remove()
        mt=0

        
   })
    
}

//Quantity Increase

let plus=document.querySelectorAll(".plus-btn")


for (let i = 0 ; i<plus.length; i++) {
    let pu=Number(document.querySelectorAll(".price")[i].innerHTML)
    plus[i].addEventListener("click", function(){
        let pt=Number(document.getElementById("finalPrice").value)
        let qtini=Number(document.querySelectorAll(".Quant")[i].value)
        document.querySelectorAll(".Quant")[i].value = qtini+1
        document.querySelectorAll(".price")[i].innerHTML=pu*Number(document.querySelectorAll(".Quant")[i].value)
        document.getElementById("finalPrice").value = pu+pt
    })
}


//Quantity Decrease

let moins=document.querySelectorAll(".minus-btn")


for (let i = 0 ; i<plus.length; i++) {
    let pu=Number(document.querySelectorAll(".price")[i].innerHTML)
    
    moins[i].addEventListener("click", function(){
        if (Number(document.querySelectorAll(".Quant")[i].value)>1) {
            qtini=Number(document.querySelectorAll(".Quant")[i].value)
        document.querySelectorAll(".Quant")[i].value = qtini-1
        document.querySelectorAll(".price")[i].innerHTML=pu*Number(document.querySelectorAll(".Quant")[i].value)
        document.getElementById("finalPrice").value -= pu
    }
    })
}


//Like Button

let blike=document.querySelectorAll(".like")


for (let i = 0 ; i<blike.length; i++) {
    
    blike[i].addEventListener("click", function(){
        
        if (blike[i].style.color=="red") {
            blike[i].style.color=""
            
        }
        else {
            blike[i].style.color="red" 
        }

        }
    )  
}


