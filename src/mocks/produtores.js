import Green from '../../assets/produtores/green.png';
import Salad from '../../assets/produtores/salad.png';
import JennyJack from '../../assets/produtores/jenny-jack.png';
import Grow from '../../assets/produtores/grow.png';
import Potager from '../../assets/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: Green,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Salad",
            imagem: Salad,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: JennyJack,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Grow",
            imagem: Grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Potager",
            imagem: Potager,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
    ]
}

export default produtores;