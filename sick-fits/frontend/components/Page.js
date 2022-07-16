import PropTypes from "prop-types";
import Header from "./Header";

const Page = ({ children, cool }) => {
  return (
    <div>
      <Header />
      <h2>Page Component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
};

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.oneOf([PropTypes.any]),
};

export default Page;
