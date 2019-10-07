/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Todo from './src/Todo';
import Addtodo from './src/Addtodo';

const App: () => React$Node = () => {
  return (
	<View>
		<Todo/>
		<Addtodo/>
	</View>
  );
};

export default App;
