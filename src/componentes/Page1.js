import React, {Component} from 'react';
import { 
	StyleSheet,
	Text,
	Button,
	View,
	FlatList
} from 'react-native';
import {
	ConnectionDatabase
} from '../service';

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
      		
      		<View style={styles.container}>
        	
	        	<FlatList
	          		data={this.state.list}
	          		renderItem={({ item }) => <Text>{item.nome}</Text>}
	          		keyExtractor={(item) => item.id.toString()}
	        	/>

	        	<Button
		        	title="Adicionar"
		    		onPress={() => this.props.navigation.navigate('Page2')} />
					
      		</View>
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