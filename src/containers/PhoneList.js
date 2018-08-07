import { connect } from 'react-redux';
import PhoneList from '../components/PhoneList';

const mapStateToProps = state => ({
    phones : state.phones
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneList)