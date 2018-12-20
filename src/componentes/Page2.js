import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';
import {
	Container,
	Content,
	Form,
	Item,
	Label,
	Input,
	Button
} from 'native-base';
import {
	ConnectionDatabase
} from '../service';
import {
	Dimensions
} from '../util';

export default class Page2 extends Component {

	static navigationOptions = {
		title: 'Adicinar Pessoa',
	};

	_adicionarPessoa = (id, nome, email, cidade, idade) => {

		ConnectionDatabase.transaction((tx) => {
			tx.executeSql('INSERT INTO pessoa (id, nome, email, cidade, idade) values (?, ?, ?, ?, ?)', [id, nome, email, cidade, idade], (tx, results) => {
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

						<Form style={{
							width: Dimensions.LARGURA_DO_DISPOSITIVO / 1.01,
							alignSelf: 'center',
						}}>

							<Item
								style={{
									marginLeft: 0,
									marginRight: 0
								}}
								floatingLabel>
								<Label>Id</Label>
								<Input />
							</Item>

							<Item
								style={{
									marginLeft: 0,
									marginRight: 0
								}}
								floatingLabel>
								<Label>Nome</Label>
								<Input />
							</Item>

							<Item
								style={{
									marginLeft: 0,
									marginRight: 0
								}}
								floatingLabel>
								<Label>Email</Label>
								<Input />
							</Item>

							<Item
								style={{
									marginLeft: 0,
									marginRight: 0
								}}
								floatingLabel>
								<Label>Cidade</Label>
								<Input />
							</Item>

							<Item
								style={{
									marginLeft: 0,
									marginRight: 0
								}}
								floatingLabel>
								<Label>Idade</Label>
								<Input />
							</Item>
						</Form>

					</View>

					<View style={{
						marginTop: 5,
						width: Dimensions.LARGURA_DO_DISPOSITIVO / 1.01,
						alignSelf: 'center'
					}}>
						<Button
							block
							onPress={() => this._adicionarPessoa(id, nome, email, cidade, idade)} >
							<Text style={{
								fontSize: 14,
								textAlign: "center",
								color: 'white'
							}}>SALVAR</Text>
						</Button>
					</View>

				</Content>

			</Container>
		);
	}
}