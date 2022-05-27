import deleteIcon from './../../../../imgs/deleteIcon.svg'
import noTransitions from './../../../../imgs/NoCard.svg'
import './style.css'

function Card({ transitions, setList }) {

  function deleteItem(e) {
    e.preventDefault()
    const itemClicado = e.target.alt
    return setList(transitions.filter(({ description }) => {
      return description !== itemClicado
    }))
  }

  return (
    <section className='card'>
      {transitions.length > 0 ?
        <>
          {transitions.map(({ description, type, value }, index) => (
            <div
              key={index} className='cardContainer'
              style={{ borderLeft: value > 0 ? "4px solid #03B898" : "4px solid #505857" }}
            >
              <div>
                <h1>{description}</h1>
                <p>{type}</p>
              </div>
              <div className='valor'>
                <h4>R$ {value}</h4>
                <img className='deleteIcon' src={deleteIcon} alt={description} onClick={(e) => deleteItem(e)} />
              </div>
            </div>
          ))
          }
        </>
        :
        <>
          <h1>Você ainda não possui nenhum lançamento</h1>
          <img className='noTransitions' src={noTransitions} alt="" />
          <img className='noTransitions' src={noTransitions} alt="" />
          <img className='noTransitions' src={noTransitions} alt="" />
          <img className='noTransitions' src={noTransitions} alt="" />
        </>
      }


    </section >

  )
}

export default Card