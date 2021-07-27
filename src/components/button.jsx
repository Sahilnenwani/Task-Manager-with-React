import PropTypes from 'prop-types';
const button = (props) => {
    return (
        <div>
        <button style={{backgroundColor:props.color}} onClick={props.onClick} className="btn">{props.text}</button>            
        </div>
    )
}
button.defaultProps={
color:"stelblue"
}

button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}
export default button
