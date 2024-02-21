import data from "../jogos.json";


function Box(props) {
    if (props.Eh_novo === "sim") {
        return (
        <div class="box">
            <img src={props.Imagem} alt={props.Nome}></img>
            <div class="box-text">
                <h2>{props.Nome}</h2>
                <h3>{props.Tipo}</h3>
                <div class="rating-download">
                    <div class="rating">
                        <i class='bx bxs-star' ></i>
                        <span>{props.Classificacao}</span>
                    </div>
                    {/*<a href="#" class="box-btn"><i class='bx bx-down-arrow-alt'></i></a>*/}
                </div>
            </div>
        </div>
    )
    } 
    
}

function New() {
    return (
    <div> 
        <section class="new container" id="new">
        <div class="heading">
            <i class='bx bx-game' ></i>
            <h2>Novos Jogos</h2>
        </div>
        {/* Content */}
        <div class="new-content">
            {data.Jogos.map((jogos) => {
                return <Box key={jogos.Nome} Nome={jogos.Nome} Tipo={jogos.Tipo} Imagem={jogos["Endereco da Imagem"]} Classificacao={jogos.Classificacao} Eh_novo={jogos["Eh novo"]}/>
            })}
            
        </div>
        <div class="next-page">
            {/*<a href="#">Próxima Página</a>*/}
        </div>
    </section>
    </div>
  );
}

export default New;