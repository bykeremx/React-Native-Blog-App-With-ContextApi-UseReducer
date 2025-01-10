import React from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import useBlogs from '../../hooks/useBlog';
const ItemSection = ({ item, navigation }) => {
  const { deleteBlog } = useBlogs();
  const handleDelete = async () => {
    await deleteBlog(item.id);
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BlogDetail', { detail: item })}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name="right" size={20} color="#c0392b" />
          <Text style={styles.title}>{item.title}</Text>

        </View>
        <View style={styles.footer}>
          <FontAwesome6 name="user-tie" size={15} color="grey" />
          <Text style={styles.author}>
            {item.author}</Text>
          <TouchableOpacity style={styles.trashButton}
            onPress={handleDelete}
          >
            <Entypo name="trash" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton}
          onPress={()=>navigation.navigate('EditBlog',{detail:item})}
          >
            <Entypo name="pencil" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemSection
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f9',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#f4f6f6',
    marginBottom: 10,
  }, title: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5,
    color: 'black',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  author: {
    fontSize: 15,
    marginLeft: 10,
    color: 'grey',
  }
  , footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingVertical: 10,
    paddingTop: 5,
    alignItems: 'center',
  },
  trashButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 20,
    padding: 7,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }, editButton: {
    backgroundColor: '#82e0aa',
    borderRadius: 20,
    padding: 7,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

