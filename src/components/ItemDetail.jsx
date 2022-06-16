import { useState } from "react"
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ singleBook }) => {
  const { name, photo, author, date, info, stock, categories } = singleBook
  const [inputNumber, setInputNumber] = useState(0);
  const navigate = useNavigate();

  const substractQuantity = () => {
    if(inputNumber > 0){
      setInputNumber(inputNumber - 1)
    }
  }
  const addQuantity = () => {
    if(inputNumber < stock){
      setInputNumber(inputNumber + 1)
    }
  }
  // para controlarlo con el teclado al input number
  const handleChange = e => {
    if(e > 0 && e <= stock){
      // me di cuenta que si lo accionas con el teclado lo pasa como string, asi que lo convierto con Number()
      setInputNumber(Number(e))
    }
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(inputNumber > 0){
      alert(`Added ${inputNumber} to the CART`)
      navigate('/cart')
    }else{
      alert('Quantity incorrect')
    }
  }
  return (
    <>
      {
        photo &&
          <div className="col-12 col-md-4">
            <img src={require(`../assets/img/${photo}`)} alt={name} className="img-thumbnail rounded mx-auto d-block" />
          </div>
      }
      <div className="col-12 col-md-8">
        <h2>{name}</h2>
        <hr/>
        <p>{author}</p>
        <p>{date}</p>
        <cite>{info}</cite>
        <div className="mt-3">
          {
            (categories && categories.length > 0) &&
            categories.map((category, index) => (
              <span key={index} className="badge grow rounded-pill bg-gradient me-2">
                <a href={`/category/${category}`} className="text-color-background fs-6 p-2">{category}</a>
              </span>
            )
            )
          }
        </div>
        <form
          onSubmit={e => handleSubmit(e)}
          className="mt-3 w-25"
        >
          <ItemCount 
            inputNumber={inputNumber}
            substractQuantity={substractQuantity}
            addQuantity={addQuantity}
            handleChange={handleChange}
          />
          <input 
            type="submit" 
            className="btn btn-outline-accent rounded-pill mt-2 w-100"
            value="Add to cart"  />
        </form>
      </div>
    </>
  )
}

export default ItemDetail