import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import Input from '../styles/Input';
import Img from '../styles/Img';

class ChartDASH extends Component {
	render() {
		const { dash } = this.props;
		let arrDate = [];
		let arrCurrency = [];

		if (dash.list.length > 0) {
			dash.list.map((bt, index) => {
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
					src="https://cryptominded-muc3mconxtxewee6orxv.netdna-ssl.com/coin_icons/dash.png"
					alt="DASH"
				/>
				<span
					style={{
						display: 'inline-block',
						paddingTop: '8px',
						paddingLeft: '7px'
					}}
				>
					DASH
				</span>
				<Line
					data={{
						labels: arrDate,
						datasets: [
							{
								label: 'USD',
								fill: false,
								lineTension: 0.1,
								backgroundColor: 'rgb(8,121,201)',
								borderColor: 'rgb(8,121,201)',
								borderCapStyle: 'butt',
								borderDash: [],
								borderDashOffset: 0.0,
								borderJoinStyle: 'miter',
								pointBorderColor: 'rgb(8,121,201)',
								pointBackgroundColor: '#fff',
								pointBorderWidth: 1,
								pointHoverRadius: 5,
								pointHoverBackgroundColor: 'rgb(8,121,201)',
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
					name="dolarDash"
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
export default connect(mapStateToProps, mapDispatchToProps)(ChartDASH);
