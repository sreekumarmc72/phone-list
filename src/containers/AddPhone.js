import { connect } from 'react-redux';
import AddPhone from '../components/AddPhone';
import { addPhone } from '../actions';

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    addPhone    :   name => dispatch(addPhone(name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPhone)