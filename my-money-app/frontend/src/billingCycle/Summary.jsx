import React from 'react';
import Grid from '../common/layout/grid';
import Row from '../common/layout/row';
import ValueBox from '../common/widgets/valueBox';
export default function Summary({credit, debt}){
	return (
		<Grid>
			<fieldset>
				<legend>Resumo</legend>
				<Row>
					<ValueBox cols="12 4" color="green" icon="bank"
						value={`R$ ${credit}`} text="Total de Créditos"/>
					<ValueBox cols="12 4" color="red" icon="credit-card"
						value={`R$ ${debt}`} text="Total de Débitos"/>
					<ValueBox cols="12 4" color="blue" icon="money"
						value={`R$ ${credit - debt}`} text="Valor consolidado"/>
				</Row>
			</fieldset>

		</Grid>
	);
}
