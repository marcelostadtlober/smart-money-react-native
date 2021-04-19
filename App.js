/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  addEntry = () => {
    alert("Abrir tela de adicionar lançamento.");
  }

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 22, fontWeight: "bold", marginTop: 10, marginBottom: 10}}>Saldo: $2.102,45</Text>
      <Button onPress={addEntry} title="Adicionar"></Button>

      <Text style={{fontSize: 22, fontWeight: "bold", marginTop: 10, marginBottom: 10}}>Categorias</Text>
      <FlatList
        data={[
          {key: 'Alimentação: $200'},
          {key: 'Combustível: $12'},
          {key: 'Aluguel: $120'},
          {key: 'Lazer: $250'},
          {key: 'Outros: $1200'}
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}>
      </FlatList>

      <Text style={{fontSize: 22, fontWeight: "bold", marginTop: 10, marginBottom: 10}}>Últimos Lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'Supermercado Isadora: $190'},
          {key: 'posto Ipiranga: $190'}
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}>
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
