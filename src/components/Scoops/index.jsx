import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Index'
import Basket from '../Basket/index'


const Scoops = () => {
  const [data, setData] = useState([]);

  const [basket, setBasket] = useState([]);

  const totalPrice = basket.reduce((total, i) => total + i.amount, 0)

  console.log(totalPrice)
  useEffect(() => {

    axios
      .get("http://localhost:4040/scoops")
      .then((res) => setData(res.data))

  }, [])

  // add items to basket

  const addToBasket = (item) => {

    const found = basket.find((i) => i.id === item.id)

    if (found) {

      const updated = { ...found, amount: found.amount + 1 };

      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i))

      setBasket(newBasket)

    } else {
      setBasket(basket.concat({ ...item, amount: 1 }));

    }
  }

  // remove item from basket
  const clearFromBasket = (delete_id) => {
    //remove item by id
    const filtered = basket.filter((i) => i.id !== delete_id)
    //update state
    setBasket(filtered)
  }

  //descent the basket amount
  const decreaseAmount = (delete_id) => {

    const found = basket.find((i) => i.id === delete_id)

    if (found.amount > 1) {

      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i))

      setBasket(newBasket)
    } else {
      clearFromBasket(delete_id)
    }

  }

  const getItemAmount = (item) => {
    const found = basket.find((i) => i.id === item.id);
    return found ? found.amount : 0;
  };

  return (
    <div className=' mb-5'>
      <Basket
        basket={basket}
        addToBasket={addToBasket}
        clearFromBasket={clearFromBasket}
        decreaseAmount={decreaseAmount}
      />

      <h1> Flavors </h1>
      <p> Price for each  <span className='text-success'>5</span>€</p>
      <h3>
        Ice creams total prices: {" "}
        <span data-testid="total" className='text-success'>{totalPrice * 5}</span>€
      </h3>

      <div className='row gap-5 justify-content-between mt-4'>
        {data.map((i) => (
          <div className='col'> <Card
            key={i.id}
            item={i}
            addToBasket={addToBasket}
            clearFromBasket={clearFromBasket}
            amount={getItemAmount(i)}
          /></div>

        ))}
      </div>

    </div>
  )
}

export default Scoops