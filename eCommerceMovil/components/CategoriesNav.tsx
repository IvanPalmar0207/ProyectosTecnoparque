/*Components*/
import { Link } from "expo-router"
import { ThemedText } from "./ThemedText"
/*Styles*/
import { StyleSheet } from "react-native"

export default function CategorieOptions(nombres: string) {
    return (
    <Link 
        href='products'
        onPress={() => {
            alert(`Has elegido la seccion de ${nombres}`)                        
        }}
    >
        <ThemedText style={styles.optionsShoes}>{nombres}</ThemedText>
    </Link> 
    )
}

const styles = StyleSheet.create({
    optionsShoes:{
        backgroundColor :  '#32b330',
        padding : 10,
        margin: 6,
        borderRadius : 5,
        fontWeight: 600,
        color : 'white',
    }
})