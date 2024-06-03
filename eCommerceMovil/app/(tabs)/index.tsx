/*React-Native*/
import { Image, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
/*Components*/
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CategorieOptions from '@/components/CategoriesNav';
import AddCart from '@/components/AddCart';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
/*Icons*/
import { Collapsible } from '@/components/Collapsible';
import { ScrollView } from 'react-native-gesture-handler';
import { FaTruckMoving } from 'react-icons/fa';
import { FaPaypal } from 'react-icons/fa';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function HomeScreen() {

  return (
    <ScrollView style={styles.container}> 
        <Menu />
        
        <ThemedView style={styles.containerCategories}>
            <ThemedText type='subtitle'>
                🍉La Mejor Verduleria🥭
            </ThemedText>
            
            <ThemedView style={styles.categorieProducts}>
                {CategorieOptions('Frutas')}
                {CategorieOptions('Tuberculos')}
                {CategorieOptions('Verduras')}
            </ThemedView>
        </ThemedView>

        <ThemedView style = {styles.containerRelease}>
            <ThemedText style = {styles.releaseTitle}type='subtitle'>
                🥥 Verduleria Fenix 💐
            </ThemedText>
            <Image             
                style = {styles.releaseImage}
                source={require('../images/ReleaseImage.jpg')}
            />    
            <ThemedView style = {styles.containerReleaseText}>
                <ThemedText type='default' style = {styles.releaseText}>
                    Bienvenido a Vegetables and Fruits Fenix, tu tienda de confianza en la cual puedes contar
                    para comprar todo tipo de productos organicos que desees llevar a tu nevera, ofrecemos los productos mas 
                    frescos y duraderos que podras conocer, te ofrecemos servicios como inmesas cantidades de frutas, vegetales y tuberculos.
                    Somos una compañia que ha venido desde el barrio y esta dispuesta para el barrio y su gente calidad con ganas
                    de experimentar sabores unicos con los cuales degustar el paladar con productos frescos y con origen del campo Colombiano 
                    apoyando a nuestros agricultores.
                </ThemedText>            
            </ThemedView>
        </ThemedView>

        <ThemedView style={styles.hotSalesContianer}>
            <ThemedText style = {styles.hotSalesTitle} type='subtitle'>
                💸 Mas Vendidos 💰
            </ThemedText>

            <ThemedView style={styles.containerSales}>
                <ThemedView>
                    <Image 
                        style = {styles.hotSalesImages}
                        source={require('../images/Tomato.jpg')}
                    />
                    <Collapsible title='Tomate / Tomates'>
                        <ThemedText style={styles.hotSaleText}>
                            El tomate está compuesto principalmente por agua y su macronutriente 
                            mayoritario son los hidratos de carbono. Entre las vitaminas cabe destacar
                            el contenido en vitamina A,  y vitamina C y entre los minerales el potasio.                    
                        </ThemedText>
                        <ThemedView style = {styles.containerPrices}>
                            <ThemedText>
                                $3.566 COP - KILO
                            </ThemedText>
                            <AddCart />
                        </ThemedView>
                    </Collapsible>
                </ThemedView>
                
                <ThemedView>
                    <Image 
                        style = {styles.hotSalesImages}
                        source={require('../images/Lettuce.jpg')}
                    />
                    <Collapsible title='Lechuga / Lechugas'>
                        <ThemedText style={styles.hotSaleText}>
                            La lechuga es un alimento que aporta muy pocas calorías por su alto contenido
                            en agua y su escasa cantidad de hidratos de carbono, proteínas y grasas.                         </ThemedText>
                        <ThemedView style = {styles.containerPrices}>
                            <ThemedText>
                                $1.859 COP - 500g
                            </ThemedText>
                            <AddCart />
                        </ThemedView>
                    </Collapsible>
                </ThemedView>

                <ThemedView>
                    <Image 
                        style = {styles.hotSalesImages}
                        source={require('../images/Yuca.jpg')}
                    />
                    <Collapsible title='Yuca / Yucas'>
                        <ThemedText style={styles.hotSaleText}>
                            La yuca es uno de alimentos vegetales de mayor fuente de energía en el mundo, 
                            tanto para consumo humano como animal. Su cultivo se adapta a diferentes 
                            condiciones geográficas, por lo que puede ser una importante reserva cuando hay 
                            malas cosechas de otros productos alimentarios.                        
                        </ThemedText>                        
                        <ThemedView style = {styles.containerPrices}>
                            <ThemedText>
                                $2.645 COP - 500g
                            </ThemedText>
                            <AddCart />
                        </ThemedView>
                    </Collapsible>
                </ThemedView>

                <ThemedView>
                    <Image 
                        style = {styles.hotSalesImages}
                        source={require('../images/Mango.jpg')}
                    />
                    <Collapsible title='Mango / Mangos'>
                        <ThemedText style={styles.hotSaleText}>
                            El mango es una fruta tropical que puede aportar una gran fuente de 
                            nutrientes a los integrantes de la casa. Una pieza contiene más de 20 tipos
                            diferentes de vitaminas y minerales y es libre en grasas, sodio y 
                            colesterol.                       
                        </ThemedText>
                        <ThemedView style = {styles.containerPrices}>
                            <ThemedText>
                                $3.740 COP - 500g
                            </ThemedText>
                            <AddCart />
                        </ThemedView>
                    </Collapsible>
                </ThemedView>

                <ThemedView>
                    <Image 
                        style = {styles.hotSalesImages}
                        source={require('../images/Coconut.jpg')}
                    />
                    <Collapsible title='Coco / Cocos'>
                        <ThemedText style={styles.hotSaleText}>
                            El coco es una fruta con propiedades de la vitamina E de importante acción 
                            antioxidante sobre la piel y es ideal para las personas que se encuentran 
                            con debilidad. VITAMINAS: C (39 MG.) B1 (0,06 mg), B2(01,8 mg). MINERALES: 
                            Potasio (398 mg), fósforo (110 mg), calcio (16 mg), hierro (4 mg).                        </ThemedText>
                        <ThemedView style = {styles.containerPrices}>
                            <ThemedText>
                                $8.792 COP - 800g
                            </ThemedText>
                            <AddCart />
                        </ThemedView>
                    </Collapsible>
                </ThemedView>

            </ThemedView>

        </ThemedView>
    
        <ThemedView style = {styles.containerPoliticies}>
            <ThemedView style = {styles.politiciesContent}>
                <FaTruckMoving />
                <ThemedText style = {styles.textPoliticie}>    
                    Envio Gratuito
                </ThemedText>
            </ThemedView>
            <ThemedView style = {styles.politiciesContent}>
                <FaPaypal />
                <ThemedText style = {styles.textPoliticie}>    
                    Pago Seguro
                </ThemedText>
            </ThemedView>
            <ThemedView style = {styles.politiciesContent}>
                <FaArrowCircleUp />
                <ThemedText style = {styles.textPoliticie}>    
                    Alta calidad
                </ThemedText>
            </ThemedView>            
        </ThemedView>

        <Footer />

    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  
container:{
    backgroundColor: 'white'
  },
    

containerCategories:{
   marginTop : 30,
   marginBottom : 30,
   alignItems: 'center',
},

categorieProducts:{
    marginTop: 25,
    flexDirection:'row',    
},

containerReleaseText:{
    backgroundColor :  '#ddd4b1',
    marginTop:5,
    marginLeft : 40,
    marginRight : 40,
},

releaseText : {
    textAlign: 'center',
},


releaseTitle : {
    fontWeight : 600,
    color : '#1a7a3f'
},

containerRelease : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor :  '#ddd4b1',
    paddingBottom: 40,
    paddingTop: 30,
},

releaseImage : {
    width : 300,
    height : 200,
    marginTop : 30,
    marginBottom : 30,
    resizeMode:'stretch',
    borderRadius : 20,
},

hotSalesContianer: {
    padding : 40,
    alignItems: 'center',
    justifyContent: 'center',
},

containerSales:{
    marginBottom : 20,
    justifyContent:'center',
    alignItems: 'center',
    flex: 1,
    flexDirection : 'column',
},

hotSaleText : {
    textAlign:'left',
    justifyContent:'center',
    alignItems: 'center'
},

hotSalesImages:{
    width : 320,
    height : 200,
    marginBottom : 20,
    borderRadius : 20,
    marginTop : 40
},

hotSalesTitle : {
    fontWeight : 600
},

containerPrices : {
    marginTop : 35,
    marginBottom : 20,
    marginLeft : -7,
    flexDirection : 'row',
    justifyContent : 'space-around',
},

containerPoliticies : {
    backgroundColor :  '#ddd4b1',
    alignItems  : 'center',
    justifyContent : 'center',
    flexDirection : 'row',
    paddingTop : 30,
    paddingBottom : 30,
},

politiciesContent : {
    backgroundColor : '#32b330',
    color : 'white',
    margin : 10,
    width : 100,
    padding : 30,
    height : 160,
    alignItems : 'center',
    fontSize : 30,
    borderRadius : 10,
},

textPoliticie : {
    color : 'white',
    fontWeight : 'bold',
    textAlign : 'center',
    marginTop : 20
}

});