import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import reducers from './src/reducers';

import Home from './src/Home/Home';

const RootStack = createStackNavigator(
	{
		Home: Home,
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
	}
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
	return (
		<Provider store={createStore(reducers)}>
			<View style={styles.container}>
				<AppContainer />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: (Platform.OS === 'android') & (getStatusBarHeight() > 24) ? (statusBar = getStatusBarHeight()) : 0,
	},
});
