import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Countdown = ({ reset }) => {
    
        const [counter, setCounter] = useState(60);

        useEffect(() => {
            if (reset) {
              setCounter(60); 
            }
        
            const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
          }, [counter, reset]);

    return (
        <View>
          <Text>Countdown: {counter}</Text>
        </View>
      );
    };
        
 
export default Countdown;




