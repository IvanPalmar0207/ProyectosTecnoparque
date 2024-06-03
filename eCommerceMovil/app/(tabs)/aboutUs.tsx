/*React-Native*/
import { StyleSheet, Image} from 'react-native';
/*Components*/
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Menu from '@/components/Menu';
import { Link } from 'expo-router';
import Footer from '@/components/Footer';

export default function TabTwoScreen() {
  return (
    <ScrollView>
        <Menu />
        <ThemedView style = {styles.mainContainerAbout}>
            <ThemedView style = {styles.containerAboutImage}>
                <ThemedText style = {styles.whoWeAreText} type='subtitle'>
                    🍅 ¿Quienes Somos? 🌽
                </ThemedText>
                <Image 
                    style = {styles.whoWeImage}
                    source={require('../images/WoWeImage.jpg')}
                />
                <ThemedText style = {styles.whoAreWeText}>
                    Somos una familia apasionada por la tierra y sus frutos, con raíces profundas 
                    en la agricultura local colombiana. Nuestro equipo está compuesto por expertos en 
                    horticultura y amantes de la comida saludable, que seleccionan cuidadosamente 
                    cada producto para asegurarse de que cumpla con nuestros altos estándares de 
                    calidad. Creemos en la importancia de apoyar a los agricultores locales y en la
                    promoción de prácticas agrícolas sostenibles que respeten el medio ambiente y que
                    apoyen a las comunidades menos favorecidas dandoles la oportunidad de crecer tanto de
                    manera personal como laboral trabajando para nosotros en la fabricacion de nuestros productos.
                </ThemedText>
            </ThemedView>
            <ThemedView style = {styles.ourMisionContainer}>
                <ThemedText style = {styles.whoWeAreText} type='subtitle'>
                    🔎 Nuestra Mision 🔍
                </ThemedText>
                <Image 
                    style = {styles.whoWeImage}
                    source={require('../images/OurMision.jpg')}
                />
                <ThemedText style = {styles.whoAreWeText}>
                    Nuestra misión es proporcionar a nuestra comunidad acceso a frutas y verduras
                    frescas, nutritivas y de alta calidad a precios justos. Nos esforzamos por 
                    fomentar una alimentación saludable y consciente, ofreciendo productos que no 
                    solo beneficien tu salud, sino también al planeta. Queremos ser un puente entre
                    los agricultores y nuestros clientes, creando una relación de confianza basada
                    en la transparencia y la responsabilidad.
                </ThemedText>
            </ThemedView>
            <ThemedView style = {styles.contactUsContainer}>
                <ThemedText style = {styles.whoWeAreText} type='subtitle'>
                    ✨ Contactanos 🎊
                </ThemedText>
                <ThemedView style = {styles.contactForm}>
                    <TextInput 
                        style = {styles.inputForm}
                        placeholder = 'Numero de documento'
                        keyboardType = 'numeric'
                    />
                    <TextInput 
                        style = {styles.inputForm}
                        placeholder = 'Nombre Completo'
                        keyboardType = 'default'
                    />
                    <TextInput 
                        style = {styles.inputForm}
                        placeholder = 'Correo Electronico'
                        keyboardType = 'email-address'
                    />
                    <TextInput 
                        style = {styles.inputForm}
                        placeholder = 'Telefono de contacto'
                        keyboardType = 'numeric'
                    />
                    <TextInput                     
                        style = {styles.textForm}
                        placeholder='Mensaje o inquietud'
                        multiline
                        editable
                        numberOfLines={5}
                        maxLength={60}
                    />
                </ThemedView>  
                <ThemedText style = {styles.containerButtonForm}>
                    <Link
                        style = {styles.buttonAU}
                        href='aboutUs'
                        onPress={() => {
                            alert('Se ha cancelado la operacion')
                    }}>
                        <ThemedText>
                            Cancelar
                        </ThemedText>                    
                    </Link>
                    <Link
                        style = {styles.buttonAU}
                        href='/'
                        onPress={() => {
                            alert('Se ha enviado el mensaje correctamente, gracias!')
                        }}
                    >
                        <ThemedText>    
                            Confirmar
                        </ThemedText>                    
                    </Link>
                </ThemedText>      
            </ThemedView>
        </ThemedView>
        <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

    mainContainerAbout : {
        display: 'flex',
    },

    containerAboutImage : {
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center',
        padding : 40
    },

    whoWeAreText : {
        fontWeight : 600,
        color : '#1a7a3f',        
    },
    
    whoWeImage : {
        width : 300,
        height : 200,
        marginTop : 30,
        borderRadius : 20
    },

    whoAreWeText : {
        marginTop : 30,
        textAlign : 'center',
    },

    ourMisionContainer : {
        justifyContent : 'center',
        alignItems : 'center',        
        backgroundColor : '#ddd4b1',        
        padding : 40        
    },

    contactUsContainer : {
        padding : 40,
        justifyContent : 'center',
        alignItems : 'center',
    },

    contactForm : {
        marginTop : 30
    },

    inputForm : {
        width : 300,        
        marginBottom : 30,
        height : 50,
        borderBottomWidth : 0.5,
        borderColor : 'black',                
        paddingLeft : 10,
        fontFamily: 'Helvetica',  
    },

    textForm : {
        borderWidth : 0.5,
        borderColor : 'black',                
        padding : 10,
        fontFamily: 'Helvetica',  
        marginTop : 10,
    },

    containerButtonForm : {
        marginTop : 40
    },

    buttonAU : {
        margin : 30,
        backgroundColor : '#32b330',
        padding : 12,
        color : 'white',
        borderRadius : 15,
        fontWeight : 600
    }

});
