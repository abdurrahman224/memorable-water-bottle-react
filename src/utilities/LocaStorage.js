const getStorCart = () => {
  const stordeCardStirng = localStorage.getItem("cart");
  if (stordeCardStirng) {
    return JSON.parse(stordeCardStirng);
  }
  return [];
};

const soveAddtoCart = (cart) => {
  const cartstringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartstringify);
};

const AddtoCart = (id) => {
  const cart = getStorCart();
  cart.push(id);
  if (cart.length  < 1) {
    return cart;
  }
  soveAddtoCart(cart);
};

const removeForamls = (id)=>{

const cart = getStorCart()
const remaing  = cart.filter(idx=>idx !== id)

soveAddtoCart(remaing)



}


export { AddtoCart, getStorCart ,removeForamls};
