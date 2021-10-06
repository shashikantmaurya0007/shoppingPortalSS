import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-heading">Naruto Shop</div>
          <div className="nav-list">
            <div>HOME</div>

            <div>Products</div>
            <div>Login</div>
            <div>Cart</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
