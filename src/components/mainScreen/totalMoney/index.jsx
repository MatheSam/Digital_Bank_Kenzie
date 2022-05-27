import './style.css'

function TotalMoney({ list }) {
  const totalValue = () => {
    return list.reduce((acc, { value }) => {
      return acc + value
    }, 0)
  }
  return (
    <section className='valorTotal'>
      <h1>Saldo total:</h1>
      <h1>R$ {totalValue()}</h1>
    </section>
  )
}

export default TotalMoney