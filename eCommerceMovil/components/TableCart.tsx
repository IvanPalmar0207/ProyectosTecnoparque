/*React-Native*/
import { DataTable } from "react-native-paper"
import { Image, Pressable } from "react-native"
import { useState } from "react"
/*Styles*/
import { StyleSheet } from "react-native"
import { ThemedText } from "./ThemedText"
/*Icons*/
import { FaTrash } from "react-icons/fa"

export default function TableCart(){

    const [counter,setCounter] = useState(1)

    const lessQuantity = () => {
        counter <= 1 ? setCounter(1) : setCounter(counter - 1)
    }

    const moreQuantity = () => {
        setCounter(counter + 1)
    }

    return (
        <DataTable>
            <DataTable.Header style = {styles.headerTable}>
                <DataTable.Title 
                textStyle = 
                {{  fontSize:14, 
                    fontWeight : 600,
                    color : 'white',
                    textAlign : 'center',
                    alignSelf: 'center'
                }}>Nombre</DataTable.Title>
                
                <DataTable.Title
                textStyle = 
                {{  fontSize:14, 
                    fontWeight : 600,
                    color : 'white',
                    textAlign : 'center',
                    marginLeft : 3
                }}>Imagen</DataTable.Title>
                
                <DataTable.Title
                textStyle = 
                {{  fontSize:14, 
                    fontWeight : 600,
                    color : 'white',
                    textAlign : 'center', 
                    marginLeft : 6
                }}>Cantidad</DataTable.Title>
                
                <DataTable.Title
                textStyle = 
                {{  fontSize:14, 
                    fontWeight : 600,
                    color : 'white',
                    textAlign : 'center',
                    marginLeft : 20
                }}>Precio</DataTable.Title>            

            </DataTable.Header>

            <DataTable.Row style = {styles.rowTable}>
                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',                    
                }}>Tomates</DataTable.Cell>
                
                <DataTable.Cell>
                    <Image 
                        style = {styles.imageTable}
                        source={require('../app/images/Tomato.jpg')}                    
                    />
                </DataTable.Cell>

                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',  
                    marginLeft : -6                  
                }}>                    
                    <ThemedText style = {styles.optionsCart} onPress={() => 
                        lessQuantity()
                    }>-</ThemedText>                    
                    
                    {counter}
                                    
                    <ThemedText style = {styles.optionsCart} onPress={() => {
                        moreQuantity()
                    }}>+</ThemedText>
                    
                </DataTable.Cell>
                
                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',                    
                    marginLeft : 20, 
                }}>$3.566</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style = {styles.rowTable}>
                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',                    
                }}>Banano</DataTable.Cell>
                
                <DataTable.Cell>
                    <Image 
                        style = {styles.imageTable}
                        source={require('../app/images/Banana.jpg')}                    
                    />
                </DataTable.Cell>

                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',  
                    marginLeft : -6                  
                }}>                    
                    <ThemedText style = {styles.optionsCart} onPress={() => 
                        lessQuantity()
                    }>-</ThemedText>                    
                    
                    {counter}
                                    
                    <ThemedText style = {styles.optionsCart} onPress={() => {
                        moreQuantity()
                    }}>+</ThemedText>
                    
                </DataTable.Cell>
                
                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',                    
                    marginLeft : 20, 
                }}>$1.945</DataTable.Cell>

            </DataTable.Row>


            <DataTable.Row style = {styles.rowTable}>
                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',                    
                }}>Yuca</DataTable.Cell>
                
                <DataTable.Cell>
                    <Image 
                        style = {styles.imageTable}
                        source={require('../app/images/Yuca.jpg')}                    
                    />
                </DataTable.Cell>

                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',  
                    marginLeft : -6                  
                }}>                    
                    <ThemedText style = {styles.optionsCart} onPress={() => 
                        lessQuantity()
                    }>-</ThemedText>                    
                    
                    {counter}
                                    
                    <ThemedText style = {styles.optionsCart} onPress={() => {
                        moreQuantity()
                    }}>+</ThemedText>
                    
                </DataTable.Cell>
                
                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',                    
                    marginLeft : 20, 
                }}>$2.645</DataTable.Cell>

            </DataTable.Row>

            
            <DataTable.Row style = {styles.rowTable}>
                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',                    
                }}>Papa</DataTable.Cell>
                
                <DataTable.Cell>
                    <Image 
                        style = {styles.imageTable}
                        source={require('../app/images/Potatoes.jpg')}                    
                    />
                </DataTable.Cell>

                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',  
                    marginLeft : -6                  
                }}>                    
                    <ThemedText style = {styles.optionsCart} onPress={() => 
                        lessQuantity()
                    }>-</ThemedText>                    
                    
                    {counter}
                                    
                    <ThemedText style = {styles.optionsCart} onPress={() => {
                        moreQuantity()
                    }}>+</ThemedText>
                    
                </DataTable.Cell>
                
                <DataTable.Cell
                textStyle = 
                {{  fontSize:14,                     
                    textAlign : 'center',                    
                    marginLeft : 20, 
                }}>$2.415</DataTable.Cell>

            </DataTable.Row>


        </DataTable>
    )
}

const styles = StyleSheet.create({    
    headerTable : {    
        padding : 5,
        backgroundColor: '#32b330', 
        fontWeight : 600
    },

    imageTable : {
        width : 40,
        height : 40,
        borderRadius : 10,
        marginLeft : 8  
    },

    rowTable : {
        padding : 20,
        justifyContent : 'center',
    },

    optionsCart : {
        padding : 10,
        backgroundColor: '#32b330', 
        color : 'white',
        borderRadius : 20,
        margin : 6,
        fontWeight : 'bold',
    }

})