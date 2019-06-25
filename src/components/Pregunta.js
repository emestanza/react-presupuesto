import React, { Fragment, useState } from "react";
import Error from "./Error";

function Pregunta(props) {
    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;

    //submit
    // validar el presupuesto
    const agregarPresupuesto = e => {

        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        guardarError(false);

        // Si se pasa la validación
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);
    };

    return (
        <Fragment>
            {error ? <Error mensaje="El presupuesto es Incorrecto" /> : null}

            <h2>Coloca tu Presupuesto</h2>
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e =>
                        guardarCantidad(parseInt(e.target.value, 10))
                    }
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;
