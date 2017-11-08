import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import Input from '../styles/Input';
import moment from 'moment';
import Img from '../styles/Img';

class ChartBTC extends Component {
	render() {
		const { btc } = this.props;
		let arrDate = [];
		let arrCurrency = [];

		if (btc.list.length > 0) {
			btc.list.map((bt, index) => {
				arrDate.push(moment(bt.date).format('LT'));
				arrCurrency.push(bt.USD);
				return [];
			});
		}
		let actual = `USD ${arrCurrency[arrCurrency.length - 1]}`;
		return (
			<div
				className="chart"
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexWrap: 'wrap',
					flexDirection: 'row',
					height: '300px',
					width: '400px'
				}}
			>
				<Img
					src="https://cryptominded-muc3mconxtxewee6orxv.netdna-ssl.com/coin_icons/bitcoin.png"
					alt="BTC"
				/>
				<span
					style={{
						display: 'inline-block',
						paddingTop: '8px',
						paddingLeft: '7px'
					}}
				>
					BITCOIN
				</span>
				<Line
					data={{
						labels: arrDate,
						datasets: [
							{
								label: 'USD',
								fill: false,
								lineTension: 0.1,
								backgroundColor: 'rgb(249,164,63)',
								borderColor: 'rgb(249,164,63)',
								borderCapStyle: 'butt',
								borderDash: [],
								borderDashOffset: 0.0,
								borderJoinStyle: 'miter',
								pointBorderColor: 'rgb(249,164,63)',
								pointBackgroundColor: '#fff',
								pointBorderWidth: 1,
								pointHoverRadius: 5,
								pointHoverBackgroundColor: 'rgb(249,164,63)',
								pointHoverBorderColor: 'rgba(220,220,220,1)',
								pointHoverBorderWidth: 2,
								pointRadius: 5,
								pointHitRadius: 10,
								data: arrCurrency
							}
						]
					}}
					options={{
						title: {
							display: false,
							text: this.props.name,
							fontSize: 25
						},
						legend: {
							display: false,
							position: 'right'
						}
					}}
				/>
				<Input
					className
					name="dolarBtc"
					type="text"
					value={actual}
					disabled="disabled"
				/>
			</div>
		);
	}
}

function mapStateToProps({ btc, eth, dash }) {
	return { btc, eth, dash };
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ChartBTC);
