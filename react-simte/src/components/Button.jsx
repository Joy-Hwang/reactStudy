import PropTypes from "prop-types";
const Button = (props) => {
  console.log(props);
  return <button type="button">버튼</button>;
};
Button.propTypes = { btntext: PropTypes.string.isRequired };
export default Button;
