let blocos = document.querySelectorAll("td");
let msg = document.querySelector("p");
let reset = document.querySelector("button");
let jogada = "O";

blocos.forEach(bloco => {
    bloco.addEventListener('click',Event => {
        //Lógica para realizar uma jogada
        if(bloco.innerText == "")
            {
                bloco.innerText = jogada;
                //Lógica pra trocar a jogada
                if(jogada =="O")
                    {
                        jogada = "X";
                    }
                    else
                    {
                        jogada = "O"
                    }
                    //Lógica para alterar a mensagem
                    msg.innerText =`Próximo a jogar: ${jogada}`;
                    verificaGanhador();
            }
    })
})

reset.addEventListener('click', event =>{
    blocos.forEach(bloco => {
        bloco.innerText = "";
        msg.innerText = `Próximo a jogar: ${jogada}`
    })
})

//Função para verificafr se houve vitória
function verificaGanhador() {
    let empate = true;
    if(
        //Conferindo vitórias através de linhas
        (blocos[0].innerText !="" && blocos[0].innerText == blocos[1].innerText && blocos[0].innerText == blocos[2].innerText ) ||
        (blocos[3].innerText !="" && blocos[3].innerText == blocos[4].innerText && blocos[3].innerText == blocos[5].innerText ) ||
        (blocos[6].innerText !="" && blocos[6].innerText == blocos[7].innerText && blocos[6].innerText == blocos[8].innerText ) ||
        //Conferindo através de colunas
        (blocos[0].innerText !="" && blocos[0].innerText == blocos[3].innerText && blocos[0].innerText == blocos[6].innerText ) ||
        (blocos[1].innerText !="" && blocos[1].innerText == blocos[4].innerText && blocos[1].innerText == blocos[7].innerText ) ||
        (blocos[2].innerText !="" && blocos[2].innerText == blocos[5].innerText && blocos[2].innerText == blocos[8].innerText ) ||
        //Conferindo através da diagonal
        (blocos[0].innerText !="" && blocos[0].innerText == blocos[4].innerText && blocos[0].innerText == blocos[8].innerText ) ||
        (blocos[2].innerText !="" && blocos[2].innerText == blocos[4].innerText && blocos[2].innerText == blocos[6].innerText )

    )
    {
       msg.innerHTML = "<h1> Vitória! </h1>" 
       empate = false;
    }
    //Verificando empate
    if(empate)
        {
            let blocosPreenchidos =true;
            for(let i = 0; i < blocos.length; i++)
                {
                    if(blocos[i].innerText == "")
                        {
                            blocosPreenchidos = false;
                            break;
                        }
                }
                if(blocosPreenchidos)
                    {
                        msg.innerHTML = "<h1> Deu velha! </h1>" ;
                    }
        }
}