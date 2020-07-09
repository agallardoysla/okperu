import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';

import call from 'react-native-phone-call';
import ContenedorGeneral from './ContenedorGeneral';

function Categorias(props) {
	return (
		<ContenedorGeneral cerrar={props.onShowCategorias}>
			<View style={style.subContainer}>
				<View style={style.cabeceraContainer}>
					<View style={style.titulo}>
						<Text style={style.tituloText}>Elijan una categoría</Text>
					</View>
					<TouchableWithoutFeedback onPress={props.onShowCategorias}>
						<View style={style.cerrarContainer}>
							<Text style={style.cerrarText}>X</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<FlatList
					style={{ width: '100%', paddingHorizontal: '10%', marginTop: 20 }}
					ItemSeparatorComponent={separador}
					data={props.categorias}
					renderItem={({ item, index }) => renderItem(item, index, props)}
					ListEmptyComponent={emptyItem}
					keyExtractor={(data) => props.categorias.indexOf(data).toString()}
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
const renderItem = (item, index, props) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				props.onShowCategorias();
				props.setcliente({ ...props.cliente, categoria_empresas: item });
			}}
		>
			<View style={style.itemContainer}>
				<View>
					<Text style={style.itemDireccion}>{item}</Text>
				</View>
				<View
					style={{
						width: 25,
						height: 25,
						borderWidth: 1,
						borderRadius: 5,
						borderColor: 'rgba(52,52,52,0.5)',
					}}
				></View>
			</View>
		</TouchableWithoutFeedback>
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
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(52,52,52,0.3)',
		paddingHorizontal: 20,
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

export default Categorias;
