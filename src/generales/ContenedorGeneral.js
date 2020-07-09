import React, { useEffect } from 'react';
import { View, Alert, BackHandler } from 'react-native';

function ContenedorGeneral(props) {
	useEffect(() => {
		const backAction = () => {
			props.cerrar();
			return true;
		};

		const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

		return () => backHandler.remove();
	}, []);

	return (
		<View
			style={[
				{
					width: '100%',
					height: '100%',
					alignItems: 'center',
					position: 'absolute',
					backgroundColor: 'rgba(52,52,52,0.2)',
				},
				props.style,
			]}
		>
			{props.children}
		</View>
	);
}

export default ContenedorGeneral;
