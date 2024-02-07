"use client";
import { useState } from "react";
import styles from "./page.module.css";
export default function Home() {
const [numero1, setNumero1] = useState('');
const [numero2, setNumero2] = useState('');
const [resultado, setResultado] = useState(null);
const sumar = () => {
const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
setResultado(`Resultado de la suma: ${resultadoSuma}`);
};
const restar = () => {
const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
setResultado(`Resultado de la resta: ${resultadoResta}`);
};
const multiplicar = () => {
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
    };
    const division = () => {
        if(parseFloat(numero2)!== 0){ 
        const resultadoDivison = parseFloat(numero1) / parseFloat(numero2);
        setResultado(`Resultado de la división: ${resultadoDivison}`);
    }else{
        setResultado('Error: División por cero!!!');
    }
        };
        const potencia = () => {
            
            const resultadoPotencia = Math.pow(parseFloat(numero1) , parseFloat(numero2));
            
            setResultado(`Resultado de la potencia: ${resultadoPotencia}`);
            };

            const raiz = () => {
                const resultadoRaiz = Math.sqrt(parseFloat(numero1))
                setResultado(`Resultado de la raiz cuadrada: ${resultadoRaiz}`);
                };

                const borrarNumero = () => {
                    setNumero1(''); // Esto borra el valor de numero1
                    setNumero2(''); // Esto borra el valor de numero2
                  };

                  const reiniciarCalculadora = () => {
                    setNumero1('');
                    setNumero2('');
                    setResultado(null);
                  };
return (
<main className={styles.main}>
<div className={styles.calculadora}>
<div className={styles.numeros}>
<h2 className={styles.title}>Calculadora</h2>
<label className={styles.text}>Número 1:</label>
<input className={styles.inputnum} type="number"
value={numero1} onChange={(e) => setNumero1(e.target.value)} />
</div>
<div className={styles.numeros}>
<label className={styles.text} >Número 2:</label>
<input className={styles.inputnum} type="number"
value={numero2} onChange={(e) =>  setNumero2(e.target.value)} />
</div>
<div>
<button className={styles.button} onClick={sumar}>Sumar</button>
<button className={styles.button} onClick={restar}>Restar</button>
<button className={styles.button} onClick={multiplicar}>Multiplicar</button>
<button className={styles.button} onClick={division}>Dividir</button>
<button className={styles.button} onClick={raiz}>Raiz cuadrada</button>
<button className={styles.button} onClick={potencia}>Potencia</button>
<button className={styles.button1} onClick={borrarNumero}>Borrar</button>
<button className={styles.button1} onClick={reiniciarCalculadora}>Reiniciar</button>

</div>
{resultado && <div
className={styles.resultado}>{resultado}</div>}
</div>
</main>
);
}