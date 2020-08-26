import React,{useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Additem from './components/Additem';

const App = () => {
  const [items,setItems] = useState([
    { id:1,text:'Milk'},
    { id:2,text:'EGG'},
    { id:3,text:'YAM'},
    { id:4,text:'BREAD'},
    { id:5,text:'Yamarita'},
  ]);

  const addItem = (text) => {
    if(!text){
     Alert.alert('Error','Please Enter a Text', [{text:'OK'}]);

    }else{
      setItems(prevItems => {
        return [{id:prevItems.length+1,text},...prevItems];
      });
    }
  }

  const deleteItem  = (id) =>{
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }
return (
  <View style={styles.container}>
    <Header/>
    <Additem addItem={addItem}/>
    <FlatList
    data={items}
    renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
    />
  </View>
);

};

const styles = StyleSheet.create({
container:{ 
  flex:1, 
  paddingTop:60,
  // justifyContent: 'center', 
  // alignItems:'center'
}

});


export default App;