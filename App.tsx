import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styled from 'styled-components/native';

// 변수명은 대문자로 시작해야함
const NumberButton = styled.TouchableOpacity`
  background-color: #b6b6b6;
  width: 75px;
  height: 75px;
  border-radius: 100px;
  margin: 20px;
  align-items: center;
  justify-content: center;
`;

const OperatorButton = styled(NumberButton)`
  background-color: #0084ff;
`;

const NumberText = styled.Text`
  font-size: 24px;
  color: white;
`;

const ResultText = styled.Text`
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 30%;
  margin-right: 5%;
  /* text-align: right; */
`;

const App = () => {
  return (
    <View style={{backgroundColor: '#181818', flex: 1}}>
      {/* 코드 이해 필요 */}
      <ResultText style={{color: 'white'}}>0</ResultText>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', width: 400}}>
        {[...Array(10).keys()].reverse().map(num => (
          <NumberButton key={num}>
            <NumberText>{num}</NumberText>
          </NumberButton>
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: 115,
          marginTop: -115,
        }}>
        <NumberButton>
          <MaterialIcons name="restart-alt" size={32} color="white" />
        </NumberButton>
        <NumberButton>
          <Entypo name="dot-single" size={32} color="white" />
        </NumberButton>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: 340,
          marginTop: -575,
        }}>
        <OperatorButton>
          <MaterialCommunityIcons name="equal" size={32} color="white" />
        </OperatorButton>
        <OperatorButton>
          <Entypo name="plus" size={32} color="white" />
        </OperatorButton>
        <OperatorButton>
          <Entypo name="minus" size={32} color="white" />
        </OperatorButton>
        <OperatorButton>
          <Entypo name="cross" size={32} color="white" />
        </OperatorButton>
        <OperatorButton>
          <FontAwesome6 name="divide" size={32} color="white" />
        </OperatorButton>
      </View>
    </View>
  );
};

export default App;
