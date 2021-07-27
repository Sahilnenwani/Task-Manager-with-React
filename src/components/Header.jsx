import PropTypes from 'prop-types';
import BTN from "./button"

const Header = ({title , onAdd ,ShowAdd}) => {
       return (
        
        <header className="header">
            {/* <h1 style={{color:"blue"}}>{prop.title}</h1> */}
            {/* <h1 style={headingstyle}>{prop.title}</h1> */}
            <h1 >{title}</h1>
            <BTN color={ShowAdd ? 'Red' : 'green'} text={ShowAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

// const headingstyle={
//     color:"White",
//     backgroundColor:"Black"
// }
Header.defaultProps={
    title:"Task Tracker"
}
Header.propTypes={
    title:PropTypes.string.isRequired
}

export default Header
