
import './Cart.css'
const Carts = ({ Cart ,handeRemoce}) => {
  return (
    <div>
      <h4>Cart : {Cart.length}</h4>
      <div className='Carts-contain'>
        {Cart.map((bottle) =><div>
             <img src={bottle.img} alt="" />
             <button onClick={()=>handeRemoce(bottle.id)} >fdsgdfg</button>
        </div>  )}
      </div>
    </div>
  );
};

export default Carts;
