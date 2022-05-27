import { useState, useEffect } from "react";
import Header from "./header";
import ContainerForm from './form'
import './style.css'
import List from "./list";

function MainScreen() {
  const [listTransactions, setListTransactions] = useState([])

  useEffect(() => {
    setListTransactions(listTransactions)
  }, [listTransactions])

  return (
    <>
      <section className="main">
        <Header />
        <div className="container">
          <ContainerForm
            list={listTransactions}
            setList={setListTransactions}
          />
          <List
            list={listTransactions}
            setList={setListTransactions}
          />
        </div>
      </section>
    </>
  )
}

export default MainScreen