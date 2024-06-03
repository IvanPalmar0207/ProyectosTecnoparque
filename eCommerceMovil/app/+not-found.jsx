/*React-Native*/
import { Link, Stack } from 'expo-router';
import { StyleSheet, Image } from 'react-native';
/*Components*/
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: '!ERROR 404 - NOT FOUND!' }} />
        <ThemedView style={styles.container}>
            <Image 
                style = {styles.notFoundImage}
                source = {require('./images/Error404.jpg')}
            />
            
            <ThemedText type="title">
                Esta pagina no existe
            </ThemedText>
            
            <Link href="/" style={styles.link}>
                <ThemedText type="link" style = {styles.goBackMessage}>Ir al inicio</ThemedText>
            </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },

  goBackMessage : {
    textDecorationLine: 'underline'
  },

  notFoundImage : {
    width : 300,
    height : 300
  }

});
