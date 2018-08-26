import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import LabelAndInput from '../common/form/LabelAndInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from './billingCyclesActions';
import ItemList from './ItemList';
import Summary from './Summary';

class BillingCycleForm extends Component {
	calculateSummary(){
		const sum = (t,v) => t + v;
		return{
			sumOfCredits: this.props.credits.map(c => +c.value || 0.0).reduce(sum),
			sumOfDebts: this.props.debts.map(d => +d.value || 0.0).reduce(sum)
		};
	}
	render() {
		const { handleSubmit, readOnly, credits, debts } = this.props;
		const summary = this.calculateSummary();
		return (
			<form role="form" onSubmit={handleSubmit}>
				<div className="box-body">
					<Field name="name" component={LabelAndInput}
						label="Nome" cols="12 4" placeholder="Informe o nome" readOnly={readOnly} />
					<Field name="month" component={LabelAndInput} type="number"
						label="Mês" cols="12 4" placeholder="Informe o mês" readOnly={readOnly} />
					<Field name="year" component={LabelAndInput} type="number"
						label="Ano" cols="12 4" placeholder="Informe o ano" readOnly={readOnly} />
					<Summary credit={summary.sumOfCredits} debt={summary.sumOfDebts} />
					<ItemList cols="6" list={credits} readOnly={readOnly} field="credits" legend="Créditos" />
					<ItemList cols="6" list={debts} readOnly={readOnly} field="debts" legend="Débitos" showStatus/>
				</div>
				<div className="box-footer">
					<button type="submit" className={`btn btn-${this.props.submitClass}`}>
						{this.props.submitLabel}
					</button>
					<button type="button" className="btn btn-default" onClick={this.props.init}>
						Cancelar
					</button>
				</div>
			</form>
		);
	}
}

const selector = formValueSelector('billingCycleForm');
const mapDisaptchToProps = dispatch => bindActionCreators({ init }, dispatch);
const mapSateToProperties = state => ({
	credits: selector(state, 'credits'),
	debts: selector(state, 'debts')
});

export default connect(mapSateToProperties, mapDisaptchToProps)(reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm));
