import {} from "./Navbar.css";
import CartWidget from "../CardWidget/CardWidget";

export const Navbar = () => {
  return (
    <div className="container">
      <h3>TIENDA DE COMIDA</h3>
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Fdiseno-logotipo-supermercado-lema-tienda_7064711.htm&psig=AOvVaw323eDcp2YDHNKOmKjQGM9z&ust=1680412888276000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjr6Pv3h_4CFQAAAAAdAAAAABAE "
        alt=""
      />
      <ul className="menu">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Carito</a>
        </li>
        <CartWidget />
      </ul>
    </div>
  );
};
