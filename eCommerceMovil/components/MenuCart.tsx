/*React-Native*/
import { Link } from "expo-router"
/*Components*/
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView"
/*Icons*/
import { FaHouseUser } from "react-icons/fa"
/*Styles*/
import { StyleSheet } from "react-native"

export default function MenuCart (){
    return (
        <ThemedView style={styles.titleContainer}>
        <ThemedText type='title' style={styles.titleMain}>FVFenix🍎</ThemedText>
          <Link href='/'>
              <ThemedText style={styles.cartOption}><FaHouseUser /></ThemedText>                  
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