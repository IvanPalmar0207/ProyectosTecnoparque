/*Components*/
import { Link } from "expo-router";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
/*Icons*/
import { FaHandPointUp } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
/*Styles*/
import { StyleSheet } from "react-native";

export default function Footer(){
    return (
        <ThemedView style = {styles.containerFooter}>
            <ThemedView style = {styles.containerNetWorks}>
                <Link href='mailto:palmar.ivan0205@gmail.com' style = {styles.netWorkIcon}>
                    <FaHandPointUp />
                </Link>
                
                <Link href='https://wa.me/3157201170' style = {styles.netWorkIcon}>
                    <FaWhatsapp />
                </Link>
                
                <Link href='https://www.instagram.com/ivan_palmar_/' style = {styles.netWorkIcon}>
                    <FaInstagram />
                </Link>
            </ThemedView>

            <ThemedView style = {styles.containerTextFoot}>
                <ThemedText style = {styles.textFooter}>
                    Copyright - Ivan David Palmar Martinez
                </ThemedText>
            </ThemedView>

        </ThemedView>
    )
}

const styles = StyleSheet.create({
    containerFooter : {
        padding : 20,
        backgroundColor : '#23A455',
    },

    containerNetWorks : {
        backgroundColor : '#23A455',    
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },

    netWorkIcon : {
        color : 'white',
        fontSize: 30,
        marginLeft : 20,
        marginRight : 20
    },

    containerTextFoot : {
        backgroundColor : '#23A455',
        marginTop : 10,
        alignItems : 'center',
    },

    textFooter : {
        color : 'white',
        fontSize : 15,
        fontWeight : 'bold',
    }

})