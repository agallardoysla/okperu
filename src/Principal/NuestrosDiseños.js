import React from 'react';

import { View, StyleSheet, FlatList, Text, Image, TouchableWithoutFeedback } from 'react-native';

import diseños from '../context/diseños';

import { backgroundColor } from '../temas/tema1';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const NuestrosDiseños = (props) => {
	return (
		<View style={styles.Container}>
			<View style={styles.tituloContainer}>
				<Text style={styles.titulo}>{'NUESTROS DISEÑOS'}</Text>
			</View>
			<View style={styles.subContainer}>
				<FlatList
					horizontal={true}
					data={diseños}
					ItemSeparatorComponent={separatorItem}
					renderItem={(item, key) => renderItem(item, key, props)}
					keyExtractor={(item) => diseños.indexOf(item).toString()}
				/>
			</View>
		</View>
	);
};

const separatorItem = ({ item }, key) => {
	return <View style={{ margin: 2 }} />;
};
const renderItem = ({ item }, key, props) => {
	//console.log("Promociones", item);
	//const imagen_url = `http://chaski-waska.com/app/imagenes/categorias/${item.id}.png`;
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				props.setImagenSelect(item);
				props.setShowImagen();
			}}
			key={`${key}`}
		>
			<View style={styles.promociones}>
				<Image style={styles.wrapper} source={item}></Image>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	Container: {
		width: '100%',
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
		backgroundColor: 'white',
		borderRadius: 5,
	},
	tituloContainer: {
		width: '100%',
		height: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	subContainer: {
		width: '100%',
		height: 130,
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 4,
	},
	titulo: {
		fontSize: RFPercentage(2.5),
		fontWeight: 'bold',
		textAlign: 'center',
		color: backgroundColor.light.backgroundColor,
	},

	wrapper: {
		width: 130,
		height: 130,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gray',
	},
	textoContainer: {
		width: 300,
		height: 190,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
	},
	texto: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	descuentoContainer: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		alignItems: 'flex-end',
	},
	descuento: {
		width: 60,
		height: 25,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
		borderWidth: 1,
		borderRadius: 10,
		borderColor: 'white',
		margin: 5,
	},
	descuentoText: {
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold',
	},
});

export default NuestrosDiseños;
