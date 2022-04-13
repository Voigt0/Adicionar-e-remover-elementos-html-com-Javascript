      function login(){
        document.getElementById("login").innerHTML = document.getElementById("nome").value;
      }

      function produto(unit, preco, acao, value) {
        vunit = parseInt(document.getElementById(unit).innerHTML);
        vpreco = parseFloat(document.getElementById(preco).innerHTML);
        if(acao == "p"){
          document.getElementById(unit).innerHTML = ++vunit;
          document.getElementById(preco).innerHTML = vpreco + value;
        }else if(acao == "m"){
          if(document.getElementById(unit).innerHTML > 0){
            document.getElementById(unit).innerHTML = --vunit;
            document.getElementById(preco).innerHTML = vpreco - value;
          }
        }
      }

      function finalizar(){
        document.location.reload(true);
      }

      function remover(item){
          var pai = document.getElementById(item);
          pai.remove(pai);
      }
      
// <div class="row" id="item2">
//           <div class="col-3">
//             <img src="../img/parafuso2.png" style="width: 20vw;">
//           </div>
//           <div class="col-5">
//             <p>Parafuso Phillips<br> R$ 1.50</p>
//           </div>
//           <div class="col-2" style="text-align: center;">
//             <button type="button" class="btn btn-dark" onclick="produto('unit2', 'precoUnit2', 'p', 1.50)">+</button>
//             <p id="unit2">0</p>
//             <button type="button" class="btn btn-dark" onclick="produto('unit2', 'precoUnit2', 'm', 1.50)">-</button>
//           </div>
//           <div class="col-2">
//             <p class="text-center">R$:</p>
//             <p class="text-center" id="precoUnit2"> 00.00</p><br><br>
//             <button type="button" class="btn btn-danger" onclick="remover('item2')">Remover</button>
//           </div>
//           <hr>
//         </div>
    var key = 2;

    function adicionar(){
      key = key + 1;
      var divItens = document.getElementById("itemAdd");
      var divItemNumero = document.createElement("div");
      divItemNumero.setAttribute('id', 'item'+(key));
      document.getElementById("itens").insertBefore(divItemNumero, divItens);
      var divRaiz = document.getElementById("item"+(key));
      var divTitle = document.createElement("div");
      var title = document.createTextNode("titulo");
      divTitle.appendChild(title);
      document.getElementById("itens").insertBefore(divTitle, divRaiz.nextSibling);
      var divImg = document.createElement("div");
      var imagem = document.createTextNode("imagem");
      divImg.appendChild(imagem);
      document.getElementById("itens").insertBefore(divImg, divRaiz.nextSibling);
    }