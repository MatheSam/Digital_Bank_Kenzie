import { useState } from 'react'
import Card from '../list/card'
import TotalMoney from '../totalMoney'
import './style.css'

function ContainerForm({ setList, list }) {

  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [type, setType] = useState('')

  function handleForm(event) {
    event.preventDefault();

    const currList = {
      description,
      value,
      type
    };

    if (currList.type === "saída") {
      currList.value = currList.value * -1
      setList([...list, currList])
    } else if (currList.type === "" || currList.type === "Selecione") {
      alert("Selecione uma entrada valida")
    } else {
      setList([...list, currList])
    }
  }

  return (
    <section>
      <form onSubmit={handleForm}>
        <div className='descricao'>
          <label>Descrição<br />
            <input
              type="text"
              name='description'
              placeholder='Digite aqui sua descrição'
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </label>
          <p>Ex: Compra de roupas</p>
        </div>

        <div className="valor">
          <div>
            <label className='inptValor'>Valor<br />
              <input type="number" min='0' name='value' placeholder='1' onChange={(event) => setValue(+event.target.value)}
                required />
            </label>
          </div>

          <div>
            <label>Tipo de Valor <br />
              <select name="type" id="" onChange={(event) => setType(event.target.value)}
                required>
                <option>Selecione</option>
                <option value="entrada">Entrada</option>
                <option value="saída">Saída</option>
              </select>
            </label>
          </div>
        </div>

        <button type='submit'>Inserir Valor</button>
      </form>
      <TotalMoney
        list={list}
      />
    </section>
  )
}

export default ContainerForm