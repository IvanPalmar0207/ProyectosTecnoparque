/*React-Native Hooks*/
import { Link } from "expo-router";
/*Styles*/
import { StyleSheet } from "react-native";
/*Components*/
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
/*Icons*/
import { FaShoppingCart } from "react-icons/fa";

export default function Menu(){
    return (
        <ThemedView style={styles.titleContainer}>
        <ThemedText type='title' style={styles.titleMain}>FVFenix🍎</ThemedText>
          <Link href='cart'>
              <ThemedText style={styles.cartOption}><FaShoppingCart /></ThemedText>                  
          </Link>                        
      </ThemedView>
    )
}

const styles = StyleSheet.create({
    
    titleContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        width:'auto',
        height:'auto',
        backgroundColor: '#23A455',
        padding: 15,
    },
    
    titleMain:{
        color: 'white',
    },    
    
    cartOption:{
        fontSize:30,
        color : 'white',
        margin: 10,
    },

})