import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList
} from 'react-native';
import {
	ConnectionDatabase
} from '../service';
import {
	Dimensions
} from '../util';
import {
	Container,
	Content,
	Button
} from 'native-base';

export default class Page1 extends Component {

	static navigationOptions = {
		title: 'Page 1',
	};

	constructor(props) {
		super(props);

		this.state = {
			list: ''
		}

		ConnectionDatabase.transaction((tx) => {
			tx.executeSql('SELECT * FROM pessoa', [], (tx, results) => {
				var len = results.rows.length;

				if (len > 0) {
					var arr = [];

					for (var i = 0; i < len; i++) {
						arr.push(results.rows.item(i));
					}

					console.log(arr);
					this.setState({ list: arr });
				}
			});
		});
	}

	render() {

		return (

			<Container>

				<Content>

					<View style={{ flex: 3 }}>

						<FlatList
							data={this.state.list}
							renderItem={({ item }) => (
								<View style={{
									width: Dimensions.LARGURA_DO_DISPOSITIVO / 1.01,
									alignSelf: 'center'
								}}>
									<Text>{item.id}</Text>
									<Text>{item.nome}</Text>
									<Text>{item.idade}</Text>
									<Text>{item.email}</Text>
									<Text>{item.cidade}</Text>
									<View style={{ backgroundColor: 'black', height: 1 }} />
								</View>
							)}
							keyExtractor={(item) => item.id.toString()}
						/>

					</View>

				</Content>

				<View style={{
					marginTop: 5,
					marginBottom: 5,
					width: Dimensions.LARGURA_DO_DISPOSITIVO / 1.01,
					alignSelf: 'center'
				}}>
					<Button
						block
						onPress={() => this.props.navigation.navigate('Page2')} >
						<Text style={{
							fontSize: 14,
							textAlign: "center",
							color: 'white'
						}}>ADICIONAR</Text>
					</Button>
				</View>

			</Container>



		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});