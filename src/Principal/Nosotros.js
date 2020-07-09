import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Linking } from 'react-native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import Footer from '../generales/Footer';
import TextoContainer from '../generales/TextoContainer';
import Contactos from './Contactos';
import Somos from './Somos';
import NuestrosDiseños from './NuestrosDiseños';
import ImagenContainer from '../generales/ImagenContainer';
import ProformaContainer from '../generales/ProformaContainer';

const MISIÓN = `  Hacer que las empresas sean sostenibles en el tiempo, sin la necesidad que los mismos dueños tengan que estar invirtiendo todo su tiempo en la permanencia de sus negocios, logrando mejorar la calidad en sus productos, atención al cliente, imagen corporativa, clima laboral y servicio para sus clientes. Logrando la estandarización de sus productos y/o servicios.`;
const VISIÓN = `  Lograr asesorar a más de 10 000 empresas en todo el mundo y ser considerada una de las corporaciones más importantes del planeta. A su vez crear una fundación que logre contribuir con las necesidades básicas de las personas de pocos recursos en cada ciudad del planeta, con un fondo que se recolectará de las empresas asesoradas.`;

const Nosotros = () => {
	const [showMision, setShowMision] = useState(false);
	const [showVision, setShowVision] = useState(false);
	const [showImagen, setShowImagen] = useState(false);
	const [showProforma, setShowProforma] = useState(false);

	const [imagenSelect, setImagenSelect] = useState(0);

	return (
		<View style={style.container}>
			<Somos />
			<View style={style.MisonVisionBoton}>
				<TouchableWithoutFeedback
					onPress={() => {
						setShowMision(true);
					}}
				>
					<View style={style.verMisionVision}>
						<Text style={style.verMisionVisionText}>MISIÓN</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => {
						setShowVision(true);
					}}
				>
					<View style={style.verMisionVision}>
						<Text style={style.verMisionVisionText}>VISIÓN</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
			<NuestrosDiseños
				setShowImagen={() => {
					setShowImagen(true);
				}}
				setImagenSelect={setImagenSelect}
			/>
			<Contactos setShowProforma={() => setShowProforma(true)} />
			<Footer />

			{showMision && <TextoContainer titulo={`MISIÓN`} texto={MISIÓN} setShow={() => setShowMision(false)} />}
			{showVision && <TextoContainer titulo={`VISIÓN`} texto={VISIÓN} setShow={() => setShowVision(false)} />}
			{showImagen && <ImagenContainer setShow={() => setShowImagen(false)} imagenSelect={imagenSelect} />}
			{showProforma && <ProformaContainer setShow={() => setShowProforma(false)} />}
		</View>
	);
};
const style = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: '#f8f8f8',
	},
	MisonVisionBoton: {
		flexDirection: 'row',
		width: '100%',
		height: 50,
		alignItems: 'center',
		backgroundColor: 'white',
		paddingHorizontal: '5%',
	},
	verMisionVision: {
		flex: 1,
		alignItems: 'center',
	},
	verMisionVisionText: {
		color: '#49a9b7',
		fontWeight: 'bold',
		fontSize: RFPercentage(2.5),
	},
});
export default Nosotros;
