import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Toppings = () => {
  const [data, setData] = useState();

  const [basket,setBasket]=useState([]);


  console.log(basket)
  useEffect(() => {

    axios
      .get("http://localhost:4040/toppings")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message))

  }, [])

  // if there is item removes if not adds
  const handleChange = (isChecked, item)=>{

isChecked
 ? setBasket([...basket, item])
 : setBasket(basket.filter((i)=> i.name !== item.name))

  }


  return (
    <div className=''>
      
      <h1>Sauce types</h1>
      <p>for each <span className='text-success'>2</span>€</p>

      <h3>Souces total price: <span data-testid="total" className='text-success' >{basket.length * 2}</span>€</h3>

      <div className='row gap-3 mt-4'>
        {data?.map((item) => (
          <div className='top-card col' style={{ width: "150px" }}>
            <label htmlFor={item.name}>
              <img src={item.imagePath} height={100} alt="" />
              <p className='text-center text-nowrap'>{item.name}</p>
            </label>

            <input onChange={(e)=> handleChange(e.target.checked, item)} id={item.name} type="checkbox" />
          </div>
        ))}
      </div>


    </div>
  )
}

export default Toppings