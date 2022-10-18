import { useState } from "react"
import './OrdenacaoArray.css'

function OrdenacaoArray() {
    //capturar "valores" do Array
    let [primeiroValor = "", setPrime] = useState()
    console.log("Array de Entrada:", primeiroValor)
    //Transformar string em Array type number
    let texto = primeiroValor;
    let arrayX = texto.split(", ")
    let length = arrayX.length;
    let arrayNumber = [];
    for (var i = 0; i < length; i++)
        arrayNumber.push(parseInt(arrayX[i]));

    //Variáveis primordiais para ordernar o array
    let array = arrayNumber
    let arraySave = array.length;
    let valor = array[0];
    let arrayN = []

    //Lógica que ordena o Array
    for (arrayN.length; arraySave > arrayN.length; arrayN.length) {
        let filterArray = array.filter(
            function verifyEle(elem) {
                return (elem < valor)
            }
        )

        if (filterArray.length == 0) {
            arrayN.push(valor)
            array.shift()
            valor = array[0]
        }
        else {
            array.push(valor)
            array.shift()
            valor = array[0]
        }
    }

    //Organizar os valores do Array para apresentar na página
    let data = "";
    let forEachx = arrayN.forEach(
        function verifyEle(elem) {
            if (typeof elem == "number") {
                data += elem + " ; ";
            }
        }
    )

    console.log("Array de saída(ordenado): ", arrayN)

    return (
        <div>
            <h1>Ordenação de Array</h1>
            <div>
                <div className="containerCal">
                    <div className="boxText">
                        <h2>Seja bem-vindo, digite os valores do Array</h2>
                        <p>Obs: Os valores tem que ser numéricos e devem ser dispostos da seguinte forma:<br></br>3, 2, 1, 5...</p>
                    </div>
                    <div className="boxInput">
                        <input type='text' placeholder="Ex: 3, 2, 1, 5..." onChange={(e) => setPrime(e.target.value)}></input>
                    </div>

                    {primeiroValor && (
                        <div className="textRe">
                            <h2>Array de Etrada: {primeiroValor}</h2>
                            <h2>Array ordenado: {data}</h2>
                        </div>
                    )
                    }
                    <div className="boxText">
                        <p>A pasta que contém a lógica está presente na: "./src/componentes/OrdenacaoArray"</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrdenacaoArray