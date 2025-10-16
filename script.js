function adicionarTarefa(){
  let valordoinput = document.querySelector("input").value;
  
  let li  = document.createElement("li");
    li.innerHTML = valordoinput; +  '<span onclick="deletartarefa(this)"> deletar </span>'

    document.querySelector("ul").appendChild(li);
}

function deletartarefa(li){
   li.parentNode.remove();
}