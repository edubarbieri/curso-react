import React, { Component } from 'react';
import Grid from '../common/layout/grid';
import {Field, arrayInsert, arrayRemove} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../common/form/Input';
import If from '../common/operator/if';

class ItemList extends Component {
	add(index, item = {}){
		if(this.props.readOnly){
			return;
		}
		this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
	}
	remove(index){
		if(this.props.readOnly || this.props.list.length <= 1){
			return;
		}
		this.props.arrayRemove('billingCycleForm', this.props.field, index);
	}
	renderRows(){
		const list = this.props.list || [];
		const {field} = this.props;
		return list.map((item, index) => (
			<tr key={index}>
				<td>
					<Field name={`${field}[${index}].name`} component={Input}
						placeholder="Informe o nome" readOnly={this.props.readOnly}/>
				</td>
				<td>
					<Field name={`${field}[${index}].value`} component={Input}
						placeholder="Informe o valor" readOnly={this.props.readOnly}/>
				</td>
				<If test={this.props.showStatus}>
					<td>
						<Field name={`${field}[${index}].status`} component={Input}
							placeholder="Informe o status" readOnly={this.props.readOnly}/>
					</td>
				</If>
				<td>
					<button type="button" className="btn btn-success"
						onClick={() => this.add(index + 1)}>
						<i className="fa fa-plus"></i>
					</button>
					<button type="button" className="btn btn-warning"
						onClick={() => this.add(index + 1, item)}>
						<i className="fa fa-clone"></i>
					</button>
					<button type="button" className="btn btn-danger"
						onClick={() => this.remove(index)}>
						<i className="fa fa-trash-o"></i>
					</button>

				</td>
			</tr>
		));
	}
	render() {
		return (
			<Grid cols={this.props.cols}>
				<fieldset>
					<legend>{this.props.legend}</legend>
				</fieldset>
				<table className="table">
					<thead>
						<tr>
							<th>Nome</th>
							<th>Valor</th>
							<If test={this.props.showStatus}>
								<th>Status</th>
							</If>
							<th className="table-actions">Ações</th>
						</tr>
					</thead>
					<tbody>
						{this.renderRows()}
					</tbody>
				</table>
			</Grid>
		);
	}
}


const mapDisaptchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove}, dispatch);

export default connect(null, mapDisaptchToProps)(ItemList);
