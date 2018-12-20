import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'test.db', createFromLocation: '~sqlexample.db' });

export default db;