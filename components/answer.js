import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Pressable } from 'react-native';


export default function Answer({checkAnswer, setCurrentSong, setReset}) {
    const [text, setText] = useState('');

    
    const handleClearText = () => {
        setText('');
      };

      const handleSetCurrentSong = () => {
        setReset(true)
        handleClearText();
        setCurrentSong(text);
       checkAnswer();
       setTimeout(() => setReset(false), 0);
      };

      

    return (
        <SafeAreaView>
            <View style={styles.inputBox}>
                <TextInput 
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Enter Song Title..."
                />
                <Pressable
                onPress={handleSetCurrentSong}>
                   <Text>Set The Bar</Text> 
                </Pressable>
                <Pressable
                onPress={handleClearText}>
                   <Text>Clear</Text> 
                </Pressable>
               
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });