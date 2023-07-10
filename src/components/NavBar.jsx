import PropTypes from "prop-types";

const NavBar = ({ children }) => {
  return (
    <nav className="bg-primary flex justify-between items-center p-4 text-white rounded-md mb-2 font-games">
      {children}
    </nav>
  );
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
