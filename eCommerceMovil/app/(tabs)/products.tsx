/*Components*/
import Menu from "@/components/Menu";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Collapsible } from "@/components/Collapsible";
import AddCart from "@/components/AddCart";
import Footer from "@/components/Footer";
/*Hooks React-Native*/
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function Products(){
    return (
        <ScrollView>
            <ThemedView>
                <Menu />
            </ThemedView>
            
            <ThemedView style = {styles.fruitsContainer}>
                <ThemedText style = {styles.titleCategory} type="subtitle">
                    🥭 Frutas 🍏
                </ThemedText>

                <ThemedText style = {styles.containerDescription}>
                    Las frutas son uno de los regalos más deliciosos y nutritivos de la 
                    naturaleza. Se caracterizan por su variedad de colores, sabores y texturas,
                    que van desde lo más dulce hasta lo más ácido. Las frutas son esenciales en cualquier 
                    dieta saludable debido a su alto contenido en nutrientes vitales. Pueden 
                    consumirse frescas, secas, en jugos, batidos, ensaladas de frutas o como
                    ingredientes en una amplia gama de platos culinarios.
                </ThemedText>

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
                        source={require('../images/Banana.jpg')}
                    />
                    <Collapsible title='Banano / Bananos'>
                        <ThemedText style={styles.hotSaleText}>
                            El plátano es una fruta tropical procedente del árbol que recibe el mismo
                            nombre o banano, perteneciente a la familia de las musáceas. Tiene forma
                            alargada o ligeramente curvada, de 100-200 g de peso. La piel del babano es gruesa,
                            de color amarillo y fácil de pelar, y la pulpa es blanca o amarillenta y
                            carnosa.
                        </ThemedText>
                        <ThemedView style = {styles.containerPrices}>
                            <ThemedText>
                                $1.945 COP - 500g
                            </ThemedText>
                            <AddCart />
                        </ThemedView>
                    </Collapsible>                    
                </ThemedView>

                <ThemedView>
                    <Image 
                        style = {styles.hotSalesImages}
                        source={require('../images/Watermelon.jpg')}
                    />
                    <Collapsible title='Sandia / Sandias'>
                        <ThemedText style={styles.hotSaleText}>
                            La sandía es muy apreciada por ser refrescante y rica en agua y sales. En 
                            concreto, es la fruta que mayor cantidad de agua contiene (95% de su peso),
                            por lo que aporta muy poca energía y, en general, pocos nutrientes, aunque
                            contiene cantidades apreciables de diversas vitaminas y minerales.               
                        </ThemedText>
                        <ThemedView style = {styles.containerPrices}>
                            <ThemedText>
                                $20.700 - 1 und
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

            <ThemedView style = {styles.vegetablesContainer}>
                <ThemedText style = {styles.titleCategory} type="subtitle">
                    🥬 Vegetales 🥦
                </ThemedText>

                <ThemedText style = {styles.containerDescription}>
                    Los vegetales, también conocidos como verduras, abarcan una amplia 
                    variedad de plantas comestibles que se consumen por sus hojas, tallos, 
                    flores, raíces y semillas. Los vegetales son fundamentales en una dieta balanceada y
                    son conocidos por su bajo contenido calórico y alta densidad de 
                    nutrientes. Los vegetales pueden consumirse crudos, al vapor, 
                    hervidos, asados, salteados o como parte de una multitud de platos y 
                    recetas.                
                </ThemedText>
                
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

                <ThemedView style = {styles.containerVegetables}> 
                    <Image 
                        style = {styles.hotSalesImages}
                        source={require('../images/Cucumber.jpg')}
                    />
                    <Collapsible title='Pepino / Pepinos'>
                        <ThemedText style={styles.hotSaleText}>
                            El pepino es una hortaliza de bajo aporte calórico debido a su reducido 
                            contenido en hidratos de carbono, en comparación con otras hortalizas, y a su
                            elevado contenido de agua, aporta fibra, pequeñas cantidades de vitamina C, 
                            provitamina A y de vitamina E, y, en proporciones aún menores, vitaminas del
                            grupo B                        
                        </ThemedText>
                        <ThemedView style = {styles.containerPrices}>
                            <ThemedText>
                                $1.660 COP - 500g
                            </ThemedText>
                            <AddCart />
                        </ThemedView>
                    </Collapsible>                    
                </ThemedView>

            </ThemedView>

            <ThemedView style = {styles.tubersContainer}>
                <ThemedText style = {styles.titleCategory} type="subtitle">
                    🌰 Tuberculos 🫚
                </ThemedText>

                <ThemedText style = {styles.containerDescription}>
                    Los tubérculos son las partes subterráneas de ciertas plantas que 
                    almacenan nutrientes, especialmente carbohidratos. Son conocidos por su 
                    alto contenido energético y su versatilidad en la cocina. Los tubérculos
                    son esenciales en muchas culturas culinarias alrededor del mundo y se 
                    utilizan en una variedad de platos, desde guisos y sopas hasta frituras y
                    purés.                
                </ThemedText>
                <ThemedView style = {styles.containerVegetables}> 
                    <Image 
                        style = {styles.hotSalesImages}
                        source={require('../images/Carrot.jpg')}
                    />
                    <Collapsible title='Zanahoria / Zanahorias'>
                        <ThemedText style={styles.hotSaleText}>
                            Es un tuberculo o vegetal diurético que evita la retención de líquidos. No puede faltar
                            en verano, ya que facilita el bronceado de manera saludable y totalmente 
                            natural. Al ingerirla aporta todas las vitaminas y nutrientes necesarios 
                            para disfrutar de una piel fantástica, de suficiente energía y una muy 
                            buena digestión.               
                        </ThemedText>
                        <ThemedView style = {styles.containerPrices}>
                            <ThemedText>
                                $2.470 COP - 500g
                            </ThemedText>
                            <AddCart />
                        </ThemedView>
                    </Collapsible>                    
                </ThemedView>
                
                <ThemedView>
                    <Image 
                        style = {styles.hotSalesImages}
                        source={require('../images/Potatoes.jpg')}
                    />
                    <Collapsible title='Papa / Papas'>
                        <ThemedText style={styles.hotSaleText}>
                            La papa es una fuente importante de carbohidratos, almidón, proteínas 
                            de calidad, B6 y potasio. Las papas de pulpa amarilla son ricas en 
                            luteína y zeaxantina, asociadas a la prevención de enfermedades, y las 
                            papas de pulpa morada y roja son ricas en antocianinas.                        
                        </ThemedText>
                        <ThemedView style = {styles.containerPrices}>
                            <ThemedText>
                                $2.415 COP - 500g
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

            </ThemedView>
            <Footer />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fruitsContainer : {
        alignItems : 'center',
        padding : 40
    },

    vegetablesContainer : {
        alignItems : 'center',
        padding : 40,
        backgroundColor : 'white',        
    },

    containerVegetables : {
        backgroundColor : 'white',        
    },

    tubersContainer : {
        alignItems : 'center',
        padding : 40
    },

    titleCategory : {
        color : '#1a7a3f',        
        fontWeight : 600,
    },

    hotSalesImages:{
        width : 320,
        height : 200,
        marginBottom : 20,
        borderRadius : 20,
        marginTop : 40
    },
  
    hotSaleText : {
        textAlign:'left',
        justifyContent:'center',
        alignItems: 'center'
    },

    containerPrices : {
        marginTop : 35,
        marginBottom : 20,
        marginLeft : -7,
        flexDirection : 'row',
        justifyContent : 'space-around',
    },

    containerDescription : {
        marginTop : 20,
        textAlign : 'center',
        fontFamily : 'Helvetica'
    }

})