import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './PreferencesScreenStyles'
import {GetSportsList} from 'api/external/Decathalon';
import { SuperGridSectionList } from 'react-native-super-grid';
import { Searchbar,Avatar, Button, Card, Title, Paragraph, ImageBackground  } from 'react-native-paper';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SvgCssUri } from 'react-native-svg';
var _ = require('lodash');
import useDebounce from 'hooks/debounce';
import {PreferencePageContext} from './index'

const Favourites = () => {
  const [images, setImages] = useState([])
  const [showDetailsModal, setDetails] = useState(false);
  const [currentDetailsID, setCurrentDetailID] = useState(null)
  const [searchQuery, setSearchQuery] = useState('');
  const {step1} = useContext(PreferencePageContext)
  const {selectedSports, setSelectedSports} = step1;

  const showDetails = (data) => {
    setCurrentDetailID(data)
    setDetails(true)
  }
  const debouncedSearchTerm = useDebounce(searchQuery, 300);
  const closeDetails = () => {
    setDetails(false)
    setCurrentDetailID(null)
  }

  const addOrRemove = (sport) => {
    if(selectedSports.includes(sport)){
      setSelectedSports([...selectedSports.slice(0, selectedSports.indexOf(sport))])
    }
    else{
      setSelectedSports([...selectedSports, sport])
    }
  }

  useEffect(() => {
    const initialData = async() => {
      const data = await GetSportsList(query=searchQuery, null, null, parents_only=false)
      console.log(data.length)
      setImages(data)
      console.log("uiuiui")
    }
    initialData()
  }, [debouncedSearchTerm])
  console.log(selectedSports)
  return (
    <>
      <Text style={styles.title}>
        Select your favourite sports
      </Text>
      <Searchbar
        placeholder="Search"
        onChangeText={(query) =>  setSearchQuery(query)}
        value={searchQuery}
        style={styles.searchbar}
        placeholder={"Search your favourite sports"}
      />
      <SuperGridSectionList
        itemDimension={130}
        sections={[{title: "Favourite Sport", data: images}]}
        style={styles.gridView}
        renderItem={data => (
          <TouchableOpacity 
            onPress={() => addOrRemove(data.item.id)} 
            onLongPress={() => showDetails(data.item)} 
            style={[styles.itemContainer, {backgroundColor: "#fff"}]}
          >
            <View style={{flex:1, justifyContent:"space-between", flexDirection: "row"}}>
              <Text style={styles.itemName}>{data.item.attributes.name}</Text>
              {selectedSports.includes(data.item.id) ? 
                  <Icon name={'check-circle'} style={styles.checkicon} />: null
              }
            </View>
            <View style={{flex:1, flexDirection: "row", justifyContent: "flex-end"}}>
              <SvgCssUri
                width="50"
                height="50"
                uri={data.item.attributes.icon}
              />
            </View>
            
          </TouchableOpacity>
        )}
      />
      <Modal 
        isVisible={showDetailsModal}
        onSwipeComplete={() => closeDetails()}
        onBackdropPress={() => closeDetails()}
        animationIn="slideInUp"
        hasBackdrop={true}
        animationInTiming={500}
        swipeDirection="down"
        style={{margin:0, height: "50%"}}
        hideModalContentWhileAnimating={true}
      >
        <View style={styles.detailsModal}>
          <View style={{alignItems: "center"}}>
            <Icon name={"minus"} style={styles.swipeIcon} />
          </View>
          <ScrollView contentContainerStyle={{marginHorizontal: 20, marginVertical: 20}}>
            {
              currentDetailsID ? 
                <Card>
                  <Card.Cover source={{ 
                    uri: currentDetailsID.relationships.images.data.length &&  currentDetailsID.relationships.images.data[0].url
                    ? 
                    currentDetailsID.relationships.images.data[0].url: null }} />
                  <Card.Content>
                    <View style={{flex:1, flexDirection: "row", justifyContent: "space-between"}}> 
                      <Title>{currentDetailsID.attributes.name}</Title>
                      <SvgCssUri
                        width="40"
                        height="40"
                        uri={currentDetailsID.attributes.icon}
                        
                      />
                    </View>
                    
                    <Paragraph>{currentDetailsID.attributes.description}</Paragraph>
                  </Card.Content>
                </Card>
                :
                <Text>Nothing is selected</Text>
            }
          </ScrollView>
        </View>
      </Modal>
    </>
  )
}

export default Favourites;