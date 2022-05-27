import { useEffect, useState } from "react";
import Card from "./card";
import './style.css'

function List({ list, setList }) {

  const [filter, setFilter] = useState(list)

  useEffect(() => {
    setFilter(list)
  }, [list])

  const teste = (e) => {
    e.preventDefault()
    const clicado = e.target.className

    if (clicado !== "todos") {
      return setFilter([...list].filter(({ type }) => {
        return type == clicado
      }))
    } else {
      return setFilter([...list])
    }
  }

  return (
    <section className="list">
      <div>
        <h1>Resumo financeiro</h1>
        <div>
          <button className="todos"
            onClick={(e) => teste(e)}>Todos</button>
          <button className="entrada"
            onClick={(e) => teste(e)}>Entradas</button>
          <button className="saída"
            onClick={(e) => teste(e)}>Despesas</button>
        </div>
      </div>
      <Card
        transitions={filter}
        setList={setList}
      />
    </section>
  )
}

export default List