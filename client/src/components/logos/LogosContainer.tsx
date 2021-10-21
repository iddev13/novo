import { connect } from "react-redux";
import { LogosType } from "../../redux/reducers/logos-reducer";
import { getLogos } from "../../redux/selectors/logos-selector";
import { AppStateType } from "../../redux/store";
import Logos from "./Logos";

type MapStateToPropsType = {
	logos: Array<LogosType>
}
type MapDispatchToPropsType = {}
type OwnPropsType = {}

type PropsTypes = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

let mapStateToProps = (state: AppStateType): PropsTypes => {
	return {
		logos: getLogos(state)
	}
}

const LogosContainer = connect(mapStateToProps, {})(Logos);

export default LogosContainer;