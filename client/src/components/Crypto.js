import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartBTC from './ChartBTC';
import ChartETH from './ChartETH';
import ChartDASH from './ChartDASH';

class Crypto extends Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
					flexDirection: 'row'
				}}
			>
				<div>
					<ChartBTC name="BTC" />
				</div>
				<div>
					<ChartETH name="ETH" />
				</div>
				<div>
					<ChartDASH name="DASH" />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ btc, eth, dash }) {
	return { btc, eth, dash };
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Crypto);
