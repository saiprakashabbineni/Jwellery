import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Searchbar} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {FlatList} from 'react-native';
import {ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating';

const screenWidth = Dimensions.get('window').width;
const Carouseldata = [
  {
    id: 1,
    image1:
      'https://t4.ftcdn.net/jpg/06/32/35/07/360_F_632350799_JOTa4JpzSoka6W6LJm5Oq9PcXsCveqr8.jpg',
  },
  {
    id: 2,
    image1:
      'https://t4.ftcdn.net/jpg/06/32/35/07/360_F_632350799_JOTa4JpzSoka6W6LJm5Oq9PcXsCveqr8.jpg',
  },
  {
    id: 3,
    image1:
      'https://t4.ftcdn.net/jpg/06/32/35/07/360_F_632350799_JOTa4JpzSoka6W6LJm5Oq9PcXsCveqr8.jpg',
  },
];
const namedata = [
  {
    id: 1,
    name: 'Fancy',
  },
  {
    id: 2,
    name: 'Dailywear',
  },
  {
    id: 3,
    name: 'Couple Rings',
  },
  {
    id: 4,
    name: 'Rings',
  },
  {
    id: 5,
    name: 'Fancy',
  },
];
const datarings = [
  {
    id: 1,
    ringimage:
      'https://png.pngtree.com/thumb_back/fh260/background/20230314/pngtree-wedding-ring-engagement-background-image_1947930.jpg',
    ringtitle: 'Modern Style Silver Diamond Ring',
    ringprice: '₹ 1950',
    rating: '1',
  },
  {
    id: 2,
    ringimage:
      'https://png.pngtree.com/thumb_back/fh260/background/20230314/pngtree-wedding-ring-engagement-background-image_1947930.jpg',
    ringtitle: 'Modern Style Silver Diamond Ring',
    ringprice: '₹ 1950',
    rating: '2',
  },
  {
    id: 3,
    ringimage:
      'https://png.pngtree.com/thumb_back/fh260/background/20230314/pngtree-wedding-ring-engagement-background-image_1947930.jpg',
    ringtitle: 'Modern Style Silver Diamond Ring',
    ringprice: '₹ 1950',
    rating: '3',
  },
  {
    id: 4,
    ringimage:
      'https://png.pngtree.com/thumb_back/fh260/background/20230314/pngtree-wedding-ring-engagement-background-image_1947930.jpg',
    ringtitle: 'Modern Style Silver Diamond Ring',
    ringprice: '₹ 1950',
    rating: '4',
  },
  {
    id: 5,
    ringimage:
      'https://png.pngtree.com/thumb_back/fh260/background/20230314/pngtree-wedding-ring-engagement-background-image_1947930.jpg',
    ringtitle: 'Modern Style Silver Diamond Ring',
    ringprice: '₹ 1950',
    rating: '5',
  },
  {
    id: 6,
    ringimage:
      'https://png.pngtree.com/thumb_back/fh260/background/20230314/pngtree-wedding-ring-engagement-background-image_1947930.jpg',
    ringtitle: 'Modern Style Silver Diamond Ring',
    ringprice: '₹ x950',
    rating: '200',
  },
  {
    id: 7,
    ringimage:
      'https://png.pngtree.com/thumb_back/fh260/background/20230314/pngtree-wedding-ring-engagement-background-image_1947930.jpg',
    ringtitle: 'Modern Style Silver Diamond Ring',
    ringprice: '₹ 1950',
    rating: '1',
  },
  {
    id: 8,
    ringimage:
      'https://png.pngtree.com/thumb_back/fh260/background/20230314/pngtree-wedding-ring-engagement-background-image_1947930.jpg',
    ringtitle: 'Modern Style Silver Diamond Ring',
    ringprice: '₹ 1950',
    rating: '3',
  },
];

const render = ({item}) => {
  return (
    <View>
      <Image
        source={{uri: item.image1}}
        style={{
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          height: 250,
        }}
      />
    </View>
  );
};

const itemsringdata = ({item}) => {
  return (
    <View style={styles.ringsContainer}>
      <View style={{width: screenWidth / 2}}>
        <View style={{position: 'relative'}}>
          <Image
            source={{uri: item.ringimage}}
            style={{height: 170, width: screenWidth / 2.6, borderRadius: 10}}
          />
          <View style={{position: 'absolute', top: 10, right: 40}}>
            <Icon
              name="heart-outline"
              type="FontAwesome"
              color="black"
              size={30}
              style={{paddingHorizontal: 10}}
            />
          </View>
        </View>
        <View>
          <Text style={{fontSize: 15, color: 'black', width: 140}}>
            {item.ringtitle}
          </Text>
          <Text style={{fontWeight: 900}}>{item.ringprice}</Text>

          <StarRating
        disabled={false}
        maxStars={5}
        rating={item.rating}
      
      />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{backgroundColor: 'lightblue', marginTop: 10}}>
                BestSeller
              </Text>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: 'green',
                  marginTop: 10,
                  paddingHorizontal: 8,
                  paddingVertical: 10,
                  marginRight: 50,
                  color: 'white',
                }}>
                Add to Cart
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const RingPage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeIndex, setActiveIndex] = React.useState('');
  const Carouselref = React.useRef('null');
  const [ci, setCi] = React.useState(null);

  const namedataitems1 = ({item, index}) => {
    return (
      <View>
        <Text
          style={index === ci ? styles.namedatatext : styles.namedatatext1}
          onPress={() => {
            setCi(index);
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    //  <ScrollView>
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="arrow-left"
            type="FontAwesome"
            color="black"
            size={40}
            style={{paddingHorizontal: 10}}
          />
          <Text style={styles.Ringheader}>RINGS</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="heart-outline"
            type="FontAwesome"
            color="black"
            size={30}
            style={{paddingHorizontal: 10}}
          />
          <Icon
            name="cart-outline"
            type="FontAwesome"
            color="black"
            size={30}
            style={{paddingHorizontal: 10}}
          />
        </View>
      </View>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.search}
        />
      </View>

      {/* //from here need to come scrolling */}

      {/* so can i give scroll view from carousel like this */}
      <FlatList
        data={[1]}
        style={{
          backgroundColor: '#FFFFFF',
          paddingTop: 5,
          paddingHorizontal: 10,
          marginBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View style={styles.imageCarouselContainer}>
              <Carousel
                ref={Carouselref}
                data={Carouseldata}
                renderItem={render}
                sliderWidth={screenWidth}
                itemWidth={screenWidth - 10}
                onSnapToItem={index => setActiveIndex(index)}
                loop={true}
                autoplay={true}
                autoplayInterval={10000}
              />
              {/* <Pagination 
        dotsLength={Carouseldata.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        
        /> */}
            </View>
            <View>
              <FlatList
                data={namedata}
                renderItem={namedataitems1}
                horizontal={true}
                keyExtractor={item => item.id.toString()}
              />
            </View>
            <View>
              <FlatList
                data={datarings}
                renderItem={itemsringdata}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </>
        }
      />
    </View>
    // </ScrollView>
  );
};

export default RingPage;

const styles = StyleSheet.create({
  Ringheader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  search: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  imageCarouselContainer: {
    height: 290,
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  namedatatext: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: 'white',
  },
  namedatatext1: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: 'green',
  },
  ringsContainer: {
    height: 330,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    marginHorizontal: 10,
    marginTop: 20,
    width: screenWidth / 2.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
});
