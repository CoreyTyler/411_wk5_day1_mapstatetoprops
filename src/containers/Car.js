import { connect } from "react-redux"
import Car from '../components/Car'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
        //pass something here
    }
}

export default connect(mapStateToProps)(Car)