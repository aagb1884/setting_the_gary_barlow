import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const pathname = usePathname();

  useEffect(() => {
      setActiveLink(pathname);
  }, [pathname]);


  const handleMenuPress = () => {
    setShowMenu(!showMenu);
  };

  return (

    <View style={styles.headerContainer}>
     <View style={styles.headerContent}>
     <TouchableOpacity onPress={handleMenuPress}>
          <Ionicons name="menu" size={40} color="#fff" />
        </TouchableOpacity>
      <Text style={styles.headerText}>
        setting the gary barlow
      </Text>      
      </View>  
        {showMenu && (
        <View style={styles.menu}>
           <View style={[styles.menuTextContainer, activeLink === '/' && styles.activeLink]}>
          <Link href="/">
            <Text style={[styles.menuText, activeLink === '/' && styles.activeText]}>
              Home
            </Text>
          </Link>
          </View>
          <View style={[styles.menuTextContainer, activeLink === '/play' && styles.activeLink]}>
          <Link href="/play">
            <Text style={[styles.menuText, activeLink === '/play' && styles.activeText]}>
              Play
            </Text>
          </Link>
          </View>
          {/* <View style={[styles.menuTextContainer, activeLink === '/instructions' && styles.activeLink]}>
          <Link href="/instructions">
          <Text style={[styles.menuText, activeLink === '/instructions' && styles.activeText]}>
          How to Play
            </Text>
          </Link>
          </View>
          <View style={[styles.menuTextContainer, activeLink === '/about' && styles.activeLink]}>
          <Link href="/about">
          <Text style={[styles.menuText, activeLink === '/about' && styles.activeText]}>
          About
            </Text>
          </Link>
         </View> */}
        </View>
       )}
      </View>
    

  );
}

const styles = StyleSheet.create({
  headerContainer: { 
    backgroundColor: 'darkred', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
    margin: '5%'
  },
  headerText: {
    justifyContent: 'center',
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 30, 
    fontWeight: 'bold', 
    textShadowColor: 'black', 
    textShadowRadius: 5,
    paddingLeft: '5%',
   },
  menu: { 
    flexDirection: 'column', 
    justifyContent: 'space-around',
    justifyItems: 'stretch', 
   },
   menuTextContainer: {
    backgroundColor: 'rgba(255, 240, 3, 0.2)',
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  activeLink: {
    backgroundColor: 'yellow', 
  },
   menuText: { 
    color: '#fff', 
    fontSize: 20,
    fontWeight: 'bold', 
    textShadowColor: 'black',
    textShadowRadius: 3, 
    textAlign: 'center'
   },
   activeText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold', 
    textShadowColor: 'white',
    textShadowRadius: 3, 
    textAlign: 'center'
   }
})