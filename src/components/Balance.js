import React from 'react';
import { useContext, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  useEffect(() => {
    document.title = total;
  }, [total]);

  return (
    <>
      <h4 className='balance'>Your Balance</h4>
      <h1>₹{total}</h1>
    </>
  )
}
