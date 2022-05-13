document.querySelector('#Calcular').addEventListener('click', (event)=>{
    event.preventDefault();
    let base = document.querySelector('#valor_base').value;
    let trans = document.querySelector('#ajuda_transporte').value;
    let aliment = document.querySelector('#ajuda_alimentação').value;
    let receita = Number(base) + Number(trans) + Number(aliment);
    document.querySelector("#receita_total").value = receita

    let auto = document.querySelector('#desconto_automoveis').value;
    let faltas = document.querySelector('#faltas').value;
    let desc = Number(auto) + Number(faltas);
    document.querySelector("#desc").value = desc
    let total = Number(receita) - Number(desc);
     document.querySelector("#total").value = total
   

});