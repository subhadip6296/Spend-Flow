import { useContext } from 'react'
import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transcation } from './Transcation'


export const TransList = () => {
  const { transactions } = useContext(GlobalContext);

  
  return (
    <div>
        <h3>History</h3>
        <ul className="list">
        {transactions.map(transaction => (<Transcation key={transaction.id} transaction={transaction} />))}
         
      </ul>
    </div>
  )
}
