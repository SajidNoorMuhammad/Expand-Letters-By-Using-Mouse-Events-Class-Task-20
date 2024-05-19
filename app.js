var p= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, maiores. Dolores, expedita maxime enim debitis eligendi alias atque porro totam doloribus recusandae. Vel minus repellendus iure officia nam minima officiis?"

var text= document.getElementById("text")
    text.innerHTML= p.slice(0,50) + "..."

function expand(type){
    if (type === 'over'){
        text.innerHTML = p
    }else{
        text.innerHTML= p.slice(0,50) + "..."
    }
}
