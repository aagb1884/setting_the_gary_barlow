import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Pressable, View, Text, useColorScheme, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import Header from '../components/header';

export default function Index () {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  
  const handlePress = (path) => {
    router.push(path);
  };

  return (
    <SafeAreaProvider>
     <Header />
      <ScrollView style={[styles.mainContainer, themeContainerStyle]}>
        <View style={styles.contentContainer}>
          <Text style={[styles.title, themeContainerStyle]}>
           SETTING THE BAR
            {"\n"}
          </Text>
          <Text style={[styles.mainText, themeContainerStyle]}>
            SETTING THE GARY BARLOW
            {"\n"}
            </Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.homePageButton}>
            <Link href="/play">
              <Pressable onPress={() => handlePress('/play')} style={styles.playButton}>
                <Text style={styles.buttonLabel}>Play!</Text>
              </Pressable>
            </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'crimson',
  },
  contentContainer: {
    alignItems: 'stretch',
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  title: {
    fontSize: 30, 
    fontWeight: 'bold', 
    margin: 10,
    textAlign: 'center'
  },
  mainText: {
    fontSize: 18,
    margin: 20,
    padding: 5,
    textAlign: 'center'
  },
  lightContainer: {
    color: "black"
  },
  darkContainer: {
    color: 'white'
  },
  homePageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
  }
});