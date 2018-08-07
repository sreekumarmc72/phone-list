import { connect } from 'react-redux';
import PhoneList from '../components/PhoneList';
import { markCostly, markLowCost } from '../actions';

const mapStateToProps = state => ({
    phones  : state.phones
});

const mapDispatchToProps = dispatch => ({
    markCostly  :   id => dispatch(markCostly(id)),
    markLowCost :   id => dispatch(markLowCost(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneList)