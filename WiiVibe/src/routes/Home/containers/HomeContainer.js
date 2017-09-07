import {connect} from "react-redux";
import Home from "../components/Home";
import {} from "../modules/home";

import {setName} from "../modules/home";

const mapStateToProps = (state) => ({
    name: state.home.name
});

const mapActionCreators = {
    setName
};

export default connect(mapStateToProps, mapActionCreators)(Home);