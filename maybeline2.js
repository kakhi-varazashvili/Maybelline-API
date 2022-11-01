let main = document.querySelector(".main")
let inp = document.querySelector("input")
let arr1 = []
let arr2 = []
// fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
.then(x=> x.json())
.then(arr=>{

    arr1 = arr
    arr2 = arr
    displayItems(arr)
    var btns = document.querySelectorAll(".show")
    for(var i of btns){
        i.addEventListener("click",function(){
            
           // console.log([...[...this.parentNode.children].map(i=> i.classList)].filter(x=> x[1]=="desc"))
           let z = this.parentNode.children
           for(var i of z){
            if(i.classList[1] == "desc"){
                var ct = i
            }
           }
           if(this.innerText == "show more"){
            ct.style.height = "auto"
            this.innerText = "show less"
           }
           else{
            ct.style.height = "100px"
            this.innerText = "show more"
           }
        })
    }

  
})

function displayItems(x){
    for(var i of x){
        let tmp = `
        <div class="card" style="width: 18rem;">
  <img src="${i.image_link}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${i.name}</h5>

    <p class="card-text desc">${i.description}</p>
    

    <button class="show">show more</button>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${i.product_type}</li>
    <li class="list-group-item">${i.rating}</li>
    <li class="list-group-item">${i.price}</li>
  </ul>
  <div class="card-body">
    <a href="${i.product_link}" class="card-link">Product link</a>
    <a href="#" class="card-link">${i.brand}</a>
  </div>
</div>
        `
        main.innerHTML += tmp
    }
}


inp.addEventListener("keyup",function(e){
    main.innerHTML = ""
    if(inp.value == ""){
       arr1 = arr2
       displayItems(arr1)
    }

    else{
        arr1 = arr2
        arr1 = arr1.filter(t=> t.name.toLowerCase().includes(inp.value.toLocaleLowerCase()))
        displayItems(arr1)
    }
})

