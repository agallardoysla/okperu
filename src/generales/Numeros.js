import React, { Component } from 'react';
import {
	View,
	ImageBackground,
	Text,
	StyleSheet,
	FlatList,
	TouchableWithoutFeedback,
	Image,
	Linking,
} from 'react-native';

import call from 'react-native-phone-call';
import ContenedorGeneral from './ContenedorGeneral';

function Numeros(props) {
	if (!props.showNumeros) {
		return <View></View>;
	}
	return (
		<ContenedorGeneral cerrar={props.onShowNumeros}>
			<View style={style.subContainer}>
				<View style={style.cabeceraContainer}>
					<View style={style.titulo}>
						<Text style={style.tituloText}>{`Directorio`}</Text>
					</View>
					<TouchableWithoutFeedback onPress={props.onShowNumeros}>
						<View style={style.cerrarContainer}>
							<Text style={style.cerrarText}>X</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<FlatList
					style={{ width: '100%', paddingHorizontal: '10%', marginTop: 20 }}
					ItemSeparatorComponent={separador}
					data={props.asociados}
					renderItem={renderItem}
					ListEmptyComponent={emptyItem}
				/>
			</View>
		</ContenedorGeneral>
	);
}

const separador = () => {
	return <View style={{ height: 5 }}></View>;
};

const emptyItem = () => {
	return (
		<View>
			<Text>No hay sugerencias aún</Text>
		</View>
	);
};
const renderItem = ({ item }) => {
	return (
		<View style={style.itemContainer}>
			<View>
				<Text style={style.itemTitulo}>{item.nombre_empresas}</Text>
				<Text style={style.itemDireccion}>{item.direccion_empresas}</Text>
				<TouchableWithoutFeedback
					onPress={() => {
						call({ number: `+51${item.celular_empresas}` }).catch(console.error);
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginVertical: 2,
						}}
					>
						<Image style={{ width: 20, height: 20 }} source={require('../images/llamar.png')} />
						<Text style={[style.itemNumero]}>{item.celular_empresas}</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
			<TouchableWithoutFeedback
				onPress={() => {
					Linking.openURL(
						`https://www.google.com/maps/dir/?api=1&destination=${item.latitud_empresas},${item.longitud_empresas}`
					);
				}}
			>
				<Image style={{ width: 40, height: 40 }} source={require('../images/mapa.png')} />
			</TouchableWithoutFeedback>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		position: 'absolute',
		backgroundColor: 'rgba(52,52,52,0.2)',
	},
	subContainer: {
		width: '90%',
		height: '85%',
		backgroundColor: 'white',
		borderRadius: 20,
		borderWidth: 2,
		borderColor: 'rgba(52,52,52,0.1)',
		marginTop: '10%',
	},
	cabeceraContainer: {
		width: '100%',
		height: 80,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
	titulo: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	tituloText: {
		fontSize: 17,
		color: 'rgba(52,52,52,0.7)',
		fontWeight: 'bold',
	},
	cerrarContainer: {
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: 'pink',
	},
	cerrarText: { color: 'pink', fontWeight: 'bold' },
	itemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 5,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(52,52,52,0.3)',
	},
	itemTitulo: {
		fontWeight: 'bold',
		fontSize: 15,
	},
	itemDireccion: {
		fontSize: 12,
	},
	itemNumero: {
		fontWeight: 'bold',
		fontSize: 13,
		color: '#85c5ce',
	},
});

export default Numeros;
