import React, {Component} from 'react';
import { Button } from 'react-native';
import { Container, Content, Form, Item, Label, Input } from 'native-base';
import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase({ name: 'test.db', createFromLocation: '~sqlexample.db' });

export default class Page2 extends Component {

	static navigationOptions = {
	    title: 'Welcome Page 2',
	};

	_adicionarPessoa = (id, nome, email, cidade, idade) => {

		db.transaction((tx) => {
	    	tx.executeSql('INSERT INTO pessoa (id, nome, email, cidade, idade) values (?, ?, ?, ?, ?)', [id, nome, email, cidade, idade], (tx, results) => {
	        	var len = results.rows.length;
	        
	        	if (len > 0) {
	          		var arr = [];
	          
	          		for(var i = 0; i < len; i++){
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

					<Form>

						<Item floatingLabel>
							<Label>Id</Label>
							<Input />
			            </Item>

						<Item floatingLabel>
							<Label>Nome</Label>
							<Input />
			            </Item>

			            <Item floatingLabel>
							<Label>Email</Label>
							<Input />
			            </Item>

			            <Item floatingLabel>
							<Label>Cidade</Label>
							<Input />
			            </Item>

			            <Item floatingLabel>
							<Label>Idade</Label>
							<Input />
			            </Item>
					</Form>

					<Button
			        	title="Salvar"
			    		onPress={() => this._adicionarPessoa(id, nome, email, cidade, idade)} />
				</Content>
	    	</Container>
	    );
	}
}