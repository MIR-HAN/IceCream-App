import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Index'



const Scoops = () => {
  const [data, setData] = useState([]);

  const [basket, setBasket] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:4040/scoops")
      .then((res) => setData(res.data))

  }, [])

  // add items to basket

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  }

  // remove item from basket
  const clearFromBasket = (delete_id) => {
    //remove item by id
    const filtered = basket.filter((i) => i.id !== delete_id)
    //update state
    setBasket(filtered)
  }


  return (
    <div className=' mb-5'>

     
      <h1> Flavors </h1>
      <p> Price for each  <span className='text-success'>5</span>€</p>
      <h3>
        Ice creams total prices: {" "}
        <span data-testid="total" className='text-success'>{basket.length * 5}</span>€
      </h3>

      <div className='row gap-5 justify-content-between mt-4'>
        {data.map((i) => (
          <div className='col'> <Card
            key={i.id}
            item={i}
            addToBasket={addToBasket}
            clearFromBasket={clearFromBasket}
            amount={basket.filter((item) => item.name == i.name).length}
          /></div>

        ))}
      </div>

    </div>
  )
}

export default Scoops