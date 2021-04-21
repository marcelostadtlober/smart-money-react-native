import React from 'react';
 import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
 
 const App = () => {
   addEntry = () => {
     alert('Olá tudo bem?');
   };
   
   return (
     <View style={{ padding: 10 }}>
       <Text style={ styles.title }>Saldo: $2.102,45</Text>
       
       <Button onPress={addEntry} title='Adicionar' />
 
       <Text style={ styles.title }>Categorias</Text>
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
 
       <Text style={ styles.title }>Últimos Lançamentos</Text>
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
 
 const styles = StyleSheet.create({
   title: {
     fontSize: 22,
     fontWeight: 'bold',
     marginTop: 10,
     marginBottom: 10
   }
 });
 
 export default App;
 