import { connect } from "react-redux"
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
        //pass something here
    }
}

export default connect(mapStateToProps)(Home)