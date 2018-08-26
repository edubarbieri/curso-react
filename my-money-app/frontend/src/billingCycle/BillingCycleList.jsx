import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getList, showUpdate, showDelete} from './billingCyclesActions';

class BillingCycleList extends Component {
	componentWillMount() {
		this.props.getList();
	}
	renderRows() {
		const list = this.props.list || [];
		return list.map(item => (
			<tr key={item._id}>
				<td>{item.name}</td>
				<td>{item.month}</td>
				<td>{item.year}</td>
				<td className="table-actions" >
					<button className="btn btn-warning" onClick={() => this.props.showUpdate(item)}>
						<i className="fa fa-pencil"></i>
					</button>
					<button className="btn btn-danger" onClick={() => this.props.showDelete(item)}>
						<i className="fa fa-trash-o"></i>
					</button>
				</td>

			</tr>
		));
	}
	render() {
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>Nome</th>
							<th>Mês</th>
							<th>Ano</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{this.renderRows()}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToPros = dispach => bindActionCreators({ getList, showUpdate, showDelete }, dispach);

export default connect(mapStateToProps, mapDispatchToPros)(BillingCycleList);
