/*Components*/
import { ThemedText } from "./ThemedText";
import { Link } from "expo-router";
/*Styles*/
import { StyleSheet } from "react-native";

export default function AddCart(){
    return (
        <Link href='cart' onPress={() => {
            alert('El producto ha sido agregado al carrito')
        }}>
            <ThemedText style = {styles.cartButtonAdd}>
                Comprar
            </ThemedText>
        </Link>
    )
}

const styles = StyleSheet.create({    
    cartButtonAdd : {
        backgroundColor : '#32b330',
        padding : 10,
        alignItems : 'center',
        color : 'white',
        borderRadius : 10,
        fontWeight : 'bold'
    }

})