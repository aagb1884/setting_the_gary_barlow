import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert, Text } from 'react-native';
import Answer from './components/answer';
import { useState } from 'react';
import Countdown from './components/countdown';

export default function App() {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [previousAnswer, setPreviousAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [reset, setReset] = useState(false);


  const songs = [
    {'title': "5 O'Clock", 'artist': 'T-Pain feat. Wiz Khalifa & Lily Allen', 'chart_position': 6, 'year_released': 2011},
    {'title': 'Babe', 'artist': 'Take That', 'chart_position': 1, 'year_released': 1993},
    {'title': 'Back for Good', 'artist': 'Take That', 'chart_position': 1, 'year_released': 1995},
    {'title': 'Breeze on By', 'artist': 'Donny Osmond', 'chart_position': 8, 'year_released': 2004},
    {'title': 'Candy', 'artist': 'Robbie Williams', 'chart_position': 1, 'year_released': 2012},
    {'title': 'Cry', 'artist': 'Sigma feat. Take That', 'chart_position': 21, 'year_released': 2016},
    {'title': 'Different', 'artist': 'Robbie Williams', 'chart_position': 64, 'year_released': 2012},
    {'title': 'Do What U Like', 'artist': 'Take That', 'chart_position': 82, 'year_released': 1991},
    {'title': 'Elita', 'artist': 'Gary Barlow', 'chart_position': 14, 'year_released': 2020},
    {'title': 'Everything Changes', 'artist': 'Take That', 'chart_position': 1, 'year_released': 1994},
    {'title': 'Face to Face', 'artist': 'Gary Barlow', 'chart_position': 69, 'year_released': 2014},
    {'title': 'The Flood', 'artist': 'Take That', 'chart_position': 2, 'year_released': 2010},
    {'title': 'For All That You Want', 'artist': 'Gary Barlow', 'chart_position': 24, 'year_released': 1999},
    {'title': 'Forever Love', 'artist': 'Gary Barlow', 'chart_position': 1, 'year_released': 1996},
    {'title': 'The Garden', 'artist': 'Take That', 'chart_position': 97, 'year_released': 2009},
    {'title': 'Giants', 'artist': 'Take That', 'chart_position': 13, 'year_released': 2017},
    {'title': 'Greatest Day', 'artist': 'Take That', 'chart_position': 1, 'year_released': 2008},
    {'title': 'Guilty', 'artist': 'Blue', 'chart_position': 2, 'year_released': 2003},
    {'title': 'Happy Now', 'artist': 'Take That', 'chart_position': 52, 'year_released': 2011},
    {'title': 'Hey Boy', 'artist': 'Take That', 'chart_position': 56, 'year_released': 2015},
    {'title': 'Higher Than Higher', 'artist': 'Take That', 'chart_position': 1, 'year_released': 2015},
    {'title': 'Hold Up a Light', 'artist': 'Take That', 'chart_position': 123, 'year_released': 2009},
    {'title': "I Should've Followed You Home", 'artist': 'Agnetha Fältskog', 'chart_position': 99, 'year_released': 2013},
    {'title': "I'd Wait for Life", 'artist': 'Take That', 'chart_position': 17, 'year_released': 2007},
    {'title': 'Kidz', 'artist': 'Take That', 'chart_position': 28, 'year_released': 2011},
    {'title': 'Let in the Sun', 'artist': 'Take That', 'chart_position': 93, 'year_released': 2015},
    {'title': 'Let Me Go', 'artist': 'Gary Barlow', 'chart_position': 2, 'year_released': 2013},
    {'title': 'Lighthouse', 'artist': 'Westlife', 'chart_position': 32, 'year_released': 2011},
    {'title': "Love Ain't Here Anymore", 'artist': 'Take That', 'chart_position': 3, 'year_released': 1994},
    {'title': 'Love Love', 'artist': 'Take That', 'chart_position': 15, 'year_released': 2011},
    {'title': 'A Million Love Songs', 'artist': 'Take That', 'chart_position': 7, 'year_released': 1992},
    {'title': 'Never Forget', 'artist': 'Take That', 'chart_position': 1, 'year_released': 1995},
    {'title': 'Not Me, Not I', 'artist': 'Delta Goodrem', 'chart_position': 18, 'year_released': 2003},
    {'title': 'Once Upon a Christmas Song', 'artist': 'Geraldine McQueen', 'chart_position': 5, 'year_released': 2008 },
    {'title': "Once You've Tasted Love", 'artist': 'Take That', 'chart_position': 47, 'year_released': 1992},
    {'title': 'Open Road', 'artist': 'Gary Barlow', 'chart_position': 7, 'year_released': 1997},
    {'title': 'Out Of Our Heads', 'artist': 'Take That', 'chart_position': 25, 'year_released': 2018},
    {'title': 'Patience', 'artist': 'Take That', 'chart_position': 1, 'year_released': 2006},
    {'title': 'Pray', 'artist': 'Take That', 'chart_position': 1, 'year_released': 1993},
    {'title': 'Promises', 'artist': 'Take That', 'chart_position': 38, 'year_released': 1991},
    {'title': 'Rule the World', 'artist': 'Take That', 'chart_position': 2, 'year_released': 2007},
    {'title': 'Run for your Life', 'artist': 'Matt Cardle', 'chart_position': 6, 'year_released': 2011},
    {'title': 'Said It All', 'artist': 'Take That', 'chart_position': 9, 'year_released': 2009},
    {'title': 'Shame' , 'artist': 'Robbie Williams', 'chart_position': 2, 'year_released': 2010},
    {'title': 'Shine' , 'artist': 'Take That', 'chart_position': 1, 'year_released': 2007},
    {'title': 'Since I Saw You Last', 'artist': 'Gary Barlow', 'chart_position': 65, 'year_released': 2014},
    {'title': 'Sing', 'artist': 'Various Artists', 'chart_position' : 1, 'year_released': 2012},
    {'title': 'Stronger', 'artist': 'Gary Barlow', 'chart_position': 16, 'year_released': 1999},
    {'title': 'Sure', 'artist': 'Take That', 'chart_position': 1, 'year_released': 1994},
    {'title': 'The Official BBC Children in Need Medley', 'artist': 'Peter Kay', 'chart_position': 1, 'year_released': 2009 },
    {'title': 'These Days', 'artist': 'Take That', 'chart_position': 1, 'year_released': 2014},
    {'title': 'This Life', 'artist': 'Take That', 'chart_position': 21, 'year_released': 2023},
    {'title': 'To Love Again', 'artist': 'Alesha Dixon', 'chart_position': 15, 'year_released': 2009},
    {'title': 'Up All Night', 'artist': 'Take That', 'chart_position': 14, 'year_released': 2009},
    {'title': 'When We Were Young', 'artist': 'Take That', 'chart_position': 88, 'year_released': 2011},
    {'title': "Who'd Have Known", 'artist': 'Lily Allen', 'chart_position': 39, 'year_released': 2009},
    {'title': "Why Can't I Wake Up With You", 'artist': 'Take That', 'chart_position': 2, 'year_released': 1993},
    {'title': "The Winner's Song", 'artist': 'Geraldine McQueen', 'chart_position': 2, 'year_released': 2008},
    {'title': 'Windows', 'artist': 'Take That', 'chart_position': 4, 'year_released': 2023}
]

const songData = songs.map((song, index) => {
  return song; 
});



const checkAnswer = () => {
  const songFound = songs.find(song => song.title === currentSong);

  if (songFound) {
    if (!previousAnswer) {
      setPreviousAnswer(songFound);
      Alert.alert('First Answer', 'This is the first answer, set as previous.');
    } else {
      if (songFound.chart_position <= previousAnswer.chart_position) {
        setScore(score + 1);
        setIsAnswerCorrect(true);
        Alert.alert('Correct', 'Your answer is correct!');
      } else {
        setIsAnswerCorrect(false);
        Alert.alert('Incorrect', 'Your answer is incorrect.');
      }
      setPreviousAnswer(songFound);
    }
  } else {
    setIsAnswerCorrect(false);
    Alert.alert('Song Not Found', 'The song title does not match any song in the list.');
  }
};



// check answer logic needs to
//  check song title is in song list 
//  check song chart position is higher than previous answer 
//  if so set answer as correct
//  set score to increase by one point + time remaining
// split across two functions, one to check answer and another to move quiz along



  return (
    <View style={styles.container}>
      <Answer 
      setCurrentSong={setCurrentSong} 
      checkAnswer={checkAnswer} 
      setReset={setReset} />
      <View>
        <Text>{score}</Text>
        
      </View>
      <Countdown reset={reset} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
