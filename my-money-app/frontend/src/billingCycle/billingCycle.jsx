import React, { Component } from 'react';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';

import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BillingCycleList from './BillingCycleList';
import BillingCycleForm from './billingCycleForm';

import { create, update, remove, init} from './billingCyclesActions';


class BillingCycle extends Component {
	componentWillMount() {
		this.props.init();
	}
	render() {
		return (
			<div>
				<ContentHeader title='Ciclos de pagamentos' small='Cadastro' />
				<Content>
					<Tabs>
						<TabsHeader>
							<TabHeader label='Listar' icon='bars' target='tabList' />
							<TabHeader label='Incluir' icon='plus' target='tabCreate' />
							<TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
							<TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
						</TabsHeader>
						<TabsContent>
							<TabContent id='tabList'>
								<BillingCycleList/>
							</TabContent>
							<TabContent id='tabCreate'>
								<BillingCycleForm onSubmit={this.props.create} submitLabel="Incluir" submitClass="primary" />
							</TabContent>
							<TabContent id='tabUpdate'>
								<BillingCycleForm onSubmit={this.props.update} submitLabel="Alterar" submitClass="info" />
							</TabContent>
							<TabContent id='tabDelete'>
								<BillingCycleForm onSubmit={this.props.remove} submitLabel="Remover" submitClass="danger" readOnly={true}/>
							</TabContent>
						</TabsContent>
					</Tabs>
				</Content>

			</div>
		);
	}
}
const mapDispatchToPros = dispach => bindActionCreators({ create, update, remove, init}, dispach);
export default connect(null, mapDispatchToPros)(BillingCycle);
