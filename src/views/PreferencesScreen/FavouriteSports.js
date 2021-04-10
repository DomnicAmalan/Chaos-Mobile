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
import {PreferencePageContext} from './index';
import styles2 from './indexstyles'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { percentager } from 'utils/math'
import colors from 'config/colors.json'
import { scale } from 'config/scale';


const Favourites = ({ navigation }) => {
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
    }
    initialData()
  }, [debouncedSearchTerm])
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
        initialNumToRender={7}
        renderItem={data => (
          <TouchableOpacity 
            onPress={() => addOrRemove(data.item.id)} 
            onLongPress={() => showDetails(data.item)} 
            style={[styles.itemContainer, {backgroundColor: "#fff"}]}
          >
            <View style={{flex:1, justifyContent:"space-between", flexDirection: "row"}}>
              <Text style={[styles.itemName, selectedSports.includes(data.item.id) ? styles.selectedItems: null ]}>{data.item.attributes.name}</Text>
              {selectedSports.includes(data.item.id) ? 
                <Icon name={'check-circle'} style={styles.checkicon} />: null
              }
            </View>
            <View style={{flex:1, flexDirection: "row", justifyContent: "flex-end"}}>
              <SvgCssUri
                width="50"
                height="50"
                uri={data.item.attributes.icon}
                stroke={selectedSports.includes(data.item.id) ? colors.primary: colors.black1}
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
        onRequestClose={() => closeDetails()}
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
                        stroke={colors.primary}
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
      <View style={styles2.footerContainer}>
        <TouchableOpacity>
          <Text style={styles2.skip}>Skip</Text>
        </TouchableOpacity>
        <AnimatedCircularProgress
            size={scale(40)}
            width={4}
            fill={percentager(selectedSports.length, 3)}
            tintColor={colors.primary}
            backgroundColor={colors.black1}
            lineCap="butt"
        >
          {
            (fill) => (
              <Text style={styles2.progress}>
                {`${selectedSports.length}/3`}
              </Text>
            )
          }
        </AnimatedCircularProgress>
        <TouchableOpacity onPress={() => navigation.navigate("Permissions")} style={[styles2.nexticonContainer, {backgroundColor: selectedSports.length >=3  ? colors.primary: null}]} >
          <Icon name={"arrow-right"} style={styles2.nexticon}  />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Favourites;