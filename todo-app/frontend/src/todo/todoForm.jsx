import React from 'React';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clear} from './todoActions';


class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.keyHandler = this.keyHandler.bind(this);
	}

	componentWillMount() {
		this.props.search();
	}

	keyHandler(e) {
		const { add, search, clear, description } = this.props;
		if (e.key === 'Enter') {
			e.shiftKey ? search() : add(description);
		} else if (e.key === 'Escape') {
			clear();
		}
	}
	render() {
		const { add, search, clear, description } = this.props;
		return (
			<div>
				<div role='form' className='todoForm'>
					<Grid cols='12 9 10'>
						<input type="text" id='description' className='form-control'
							placeholder='Adicionar uma tarefa'
							value={this.props.description} onChange={this.props.changeDescription}
							onKeyUp={this.keyHandler}>
						</input>
					</Grid>
					<Grid cols='12 3 2'>
						<IconButton style='primary' icon='plus' onClick={() => add(description)}>
						</IconButton>
						<IconButton style='info' icon='search' onClick={search}></IconButton>
						<IconButton style='default' icon='close' onClick={clear}></IconButton>
					</Grid>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
