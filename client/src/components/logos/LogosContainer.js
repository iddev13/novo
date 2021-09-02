import { connect } from "react-redux";
import { getLogos } from "../../redux/selectors/logos-selector";
import Logos from "./Logos";

let mapStateToProps = (state) => {
	return {
		logos: getLogos(state)
	}
}

const LogosContainer = connect(mapStateToProps, {})(Logos);

export default LogosContainer;