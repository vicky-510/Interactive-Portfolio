
import {Spinner} from "react-bootstrap";


const Loader = () => {

    return(
        <Spinner 
        animation="border"
        role="status"
        style={{
            width:'50px',
            height:'50px',
            margin:'auto',
            display:'block',
            color:'#182C61'
        }}
        ></Spinner>
    )
}

export default Loader;