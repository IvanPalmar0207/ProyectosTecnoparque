/*React-Native*/
import { ScrollView } from "react-native-gesture-handler"
import { Link } from "expo-router"
/*Components*/
import MenuCart from "@/components/MenuCart"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import TableCart from "@/components/TableCart"
/*Styles*/
import { StyleSheet } from "react-native"
/*Icons*/
import { FaArrowCircleLeft } from "react-icons/fa"

export default function Cart(){
    return (
        <ScrollView>            
            <MenuCart />
            
            <ThemedView style={styles.mainContainerCart}>
                <ThemedView style = {styles.containerGoBack}>
                    <Link
                        href='/'
                        onPress={() => {
                            alert('Seras dirigido a la pagina principal')
                        }}
                    >
                        <ThemedText style = {styles.goBackCart} type="subtitle">
                           <FaArrowCircleLeft style={styles.goBackCartIcon} />   Volver
                        </ThemedText>
                    </Link>
                </ThemedView>

                <TableCart />
                
                <ThemedView style = {styles.containerOrder}>
                    <ThemedText style = {styles.titleOrder} type="subtitle">
                        🥑 Entrega 🍏
                    </ThemedText>
                    
                    <ThemedText style = {styles.orderDescription}>
                        Puedes consultar todas las opciones de envio para aboslutamente todos los
                        productos que adquieras con nosotros, incluyendo plazos de entrega, 
                        etc.
                    </ThemedText>
                    
                    <ThemedView style = {styles.payTotal}>
                        <ThemedText>Subtotal:</ThemedText>
                        <ThemedText style = {styles.total}>$10.571</ThemedText>
                    </ThemedView>
                    
                    <ThemedView style = {styles.payTotal}>
                        <ThemedText>Total:</ThemedText>
                        <ThemedText style = {styles.total}>$10.571</ThemedText>
                    </ThemedView>
                    
                    <ThemedView style = {styles.contianerPayment}>
                        <Link 
                            href='/'
                            style = {styles.payButton}
                            onPress={() => {
                                alert('Todos los productos han sido pagados correctamente')
                                }
                            }
                        >
                            <ThemedText>
                                Pagar Productos
                            </ThemedText>
                        </Link>
                    </ThemedView>

                </ThemedView>

            </ThemedView>                        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainerCart : {
        padding : 25
    },

    containerGoBack : {
        alignItems : 'flex-start',
        marginBottom : 30
    },

    goBackCart : {
        fontWeight : 600,
    },

    goBackCartIcon : {
        marginTop : 10,
        color : '#32b330'
    },

    containerOrder : {
        marginTop : 40,        
    },

    titleOrder : {
        fontWeight : 600,
        textAlign : 'center',
    },

    orderDescription : {
        textAlign : 'center',
        marginTop : 20
    },

    payTotal : {
        paddingLeft : 10,
        paddingRight : 10,
        marginTop : 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    total : {
        fontWeight : '600',
    },

    contianerPayment : {
        marginTop : 20,
        justifyContent : 'flex-end',
        alignItems : 'flex-end',
        padding : 10
    },

    payButton : {
        backgroundColor : '#32b330',
        color : 'white',
        padding : 10,
        borderRadius : 10,
        fontWeight : 600        
    }

})