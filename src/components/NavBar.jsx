import PropTypes from "prop-types";

const NavBar = ({ children }) => {
  return (
    <nav className="bg-primary flex justify-between items-center p-3 text-white rounded-md mb-1 font-games">
      {children}
    </nav>
  );
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
