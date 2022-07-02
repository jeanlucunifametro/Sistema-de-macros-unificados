class Produto{
    constructor(){
            this.id = 1;
            this.arrayprodutos = [];
    }
    salvar() {
      let produto = this.lerdados();
     if (this.validacampos(produto)) {
     this.adicionar(produto);
    }
        this.listabela();
        this.cancelar();
    }
    listabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for(let i = 0; i < this.arrayprodutos.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_proteina = tr.insertCell();            
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayprodutos[i].id;
            td_produto.innerText = this.arrayprodutos[i].nomeproduto;
            td_proteina.innerText = this.arrayprodutos[i].proteina;
            
            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png';
            let imgdelete = document.createElement('img');
            imgdelete.src ='img/claro.png';

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgdelete);

        }

    }



    adicionar(produto){
        this.arrayprodutos.push(produto);
        this.id++;

    }



    lerdados(){
        let produto = {}
     produto.id = this.id;
     produto.nomeproduto = document.getElementById('produto').value;
     produto.proteina = document.getElementById('proteina').value;


        return produto;
    }

    validacampos(produto){
        let msg = '';
        if(produto.nomeproduto =='') {
            msg += 'informe o nome do produto '
        }
        if(produto.proteina =='') {
            msg += 'informe a quantidade de proteina '
        }
        if(msg != '') {
            alert(msg);
            return false
        }

        return true;
    }


    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('proteina').value = '';

    }




}
var produto = new Produto()