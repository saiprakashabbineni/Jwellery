
import React, {useState} from 'react';
import {View, Text, Button, Dimensions, StatusBar} from 'react-native';
import {ScrollView, SafeAreaView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// import {Carousel, Pagination} from 'react-native'
// import { Carousel } from '@ant-design/react-native';
import Carousel from 'react-native-snap-carousel';
import {Searchbar} from 'react-native-paper';
import {FlatList} from 'react-native';
import {StyleSheet} from 'react-native';
import {ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const data = [
  {
    id: 1,
    name: 'CHAINS',
    imageUrl:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
  {
    id: 2,
    name: 'PENDANTS',
    imageUrl:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
  {
    id: 3,
    name: 'BRACELETS',
    imageUrl:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
  {
    id: 4,
    name: 'RINGS',
    imageUrl:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
  {
    id: 5,
    name: 'NECKLACE',
    imageUrl:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
  },
];
const images = [
  {
    id: 11,
    name: 'sai',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  },
  {
    id: 12,
    name: 'sai',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  },
  {
    id: 13,
    name: 'sai',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
  },
];

const Cardsdata = [
  {
    Image:
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
    title: 'Titanium Tempest Silver Bracelet',
    price: '100',
  },
  {
    Image:
      'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg',
    title: 'Lunar Luminary Silver Chain',
    price: '200',
  },
  {
    Image:
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
    title: 'RINGS',
    price: '300',
  },
  {
    Image:
      'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg',
    title: 'RINGS',
    price: '400',
  },
];

const Mensdata = [
  {
    title : 'testing',
    Image:
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
      
  },
  {
    title: 'test2',
    Image:
      'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg',
    
  },
];

const Commentdata = [
  {
    Image:
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
    title: 'sai',
    commentdat:
      'Here is a screenshot that should help you understand how each of these variables is used. Let me know if you need more info.',
  },
  {
    Image:
      'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg',
    title: 'ravi',
    commentdat:
      'Here is a screenshot that should help you understand how each of these variables is used. Let me know if you need more info.',
  },
];

const render = ({item}) => (
  
  <View style={styles.text}>
    <TouchableOpacity>
    <Image source={{uri: item.imageUrl}} style={styles.Image} />

      <Text style={styles.texts}>{item.name}</Text>

    </TouchableOpacity>
    </View>
 
);
const renderItem = ({item}) => {
  return (
    <Image
      source={{uri: item.imageUrl}}
      style={{
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height:450
        
      }}
    />
  );
};
const CardsItems = ({item}) => {
  return (
    <View style={styles.item}>
      <Image
        source={{uri: item.Image}}
        style={{height: 200, borderRadius: 10}}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>{item.price}</Text>
    </View>
  );
};
const MensImage = ({item}) => {
  return (
    <View style={styles.containers}>
      <Image
        source={{uri: item.Image}}
        style={{height: 220, borderRadius: 10}}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems:"center",
          paddingTop: 10,
        }}>
        <Text style={{color: '#3f684f',width:150,justifyContent:"center",alignItems:"center",paddingHorizontal:18,color:"#31415a"}}>Titanium Tempest 
Silver Bracelet</Text>
        <Text style={{color:"#31415a",fontWeight:900}}>₹ 2295</Text>
      </View>
    </View>
  );
};
const Mens = ({item}) => {
  return (
    <View style={styles.Mencontainer}>
      <Image
        source={{uri: item.Image}}
        style={{height: 220, borderRadius: 10}}
      />
      <View
        style={{
          flexDirection:"row",
          justifyContent: 'space-between',
          alignItems:"center",
          paddingTop: 10,
          paddingHorizontal:5,
          
        }}>
        <Text style={{color: 'green'}}>{item.title}</Text>

        <Text style={{color:"green"}}>Explore</Text>
        {/* <Icon name="right" size={20}/> */}
      </View>
    </View>
  );
};
const Giftitems = ({item}) => {
  return (
    <View style={styles. Giftscontainers}>
      <Image
        source={{uri: item.Image}}
        style={{height: 220, borderRadius: 10}}
      />
      <View style={{alignItems: 'center', paddingTop: 10,}}>
        <Text style={{color:"green"}}>Gifts For Men</Text>
      </View>
    </View>
  );
};
const Comments = ({item}) => {
  return (
    <View style={styles.formContainers}>
      <View>
        <Image source={{uri: item.Image}} style={styles.Imagess} />
      </View>
      <View style={styles.card}>
        <Text style={styles.text2}>{item.title}</Text>
      </View>
      <View style={styles.cards}>
        <Text style={{fontSize:16,color:"black"}}>{item.commentdat}</Text>
      </View>
    </View>
  );
};
const Homepage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const carouselRef = React.useRef(null);
  const [activecatergory, setActiveCategory] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRef = React.useRef(null);
  const [page, setpage] = useState(0);

  return (
    <View>
      <ScrollView>

        <View style={{backgroundColor:'white'}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              backgroundColor: '#fffbe5',
              height: 70,
            }}>
            <View>
              <Image
                style={{height: 55, width: 166}}
                source={require('../assests/images/logo.png')}
              />
            </View>

            <View style={{flexDirection: 'row',}}>
          
        <Icon
        name="heart-outline"
        type='FontAwesome'
        color="black"
        size={30}
        style={{paddingHorizontal:10}}
      />
      <Icon
        name="bell-outline"
        type='FontAwesome'
        color="black"
        size={30}
        style={{paddingHorizontal:10}}

      />
  <Icon
        name="cart-outline"
        type='FontAwesome'
        color="black"
        size={30}
        style={{paddingHorizontal:10}}

      />

            </View>
          </View>
          <View style={{backgroundColor: '#fffbe5',  paddingHorizontal: 10,
}}>
            <Searchbar
              placeholder="Search Rings"
              onChangeText={setSearchQuery}
              value={searchQuery}
              mode="view"
              style={{
                marginHorizontal: 10,
                marginTop: 5,
                marginBottom:10,
                borderRadius: 8,
                backgroundColor: '#ffffff',
                borderWidth: 1,
                borderColor: '#d3d3d3',
              }}
            />
          </View>
        </View>

        <View>
          <SafeAreaView />

          <FlatList
         
            horizontal={true}
            data={data}
            renderItem={render}
            keyExtractor={item => item.id}
            backgroundColor="white"
           
          />

          <View style={styles.imageCarouselContainer}>
            <Carousel
              ref={carouselRef}
              data={images}
              renderItem={renderItem}
              sliderWidth={screenWidth}
              itemWidth={screenWidth - 10}
              onSnapToItem={index => setActiveIndex(index)}
              loop={true}
              
            />

            {/* <Pagination
              dotsLength={images.length}
              activeDotIndex={activeIndex}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.dotStyle}
              inactiveDotStyle={styles.inactiveDotStyle}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            /> */}
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 15,
                backgroundColor:"white"

              }}>
              <Text style={{fontSize: 18,color:"#11253a"}}>Our Execlusive Collection</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 10,
                backgroundColor:"white"
              }}>
              <View>
                <Text style={{fontSize: 15,color:"#31415a"}}>THE</Text>
              </View>
              <View style={{marginLeft: '40', marginRight: '40'}}>
                <Text style={{fontSize: 40,color:"#11253a"}}>Starlight</Text>
              </View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{fontSize: 15,color:"#31415a"}}>EDIT</Text>
              </View>
            </View>
            <View style={{backgroundColor:"white"}}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
              }}
              style={{
                height: 250,
                width: '95%',
                marginHorizontal: 10,
                marginTop: 10,
                borderRadius: 10,
               

                
              }}
            />
            </View>
            <View style={{backgroundColor:"white"}}>
          <FlatList horizontal={true} data={Mensdata} renderItem={MensImage} />
        </View>
          </View>
        </View>


        <Text
          style={{
            color: '#3f684f',
            textAlign: 'center',
            fontSize: 25,
            fontStyle: 'italic',
            fontWeight: 500,
            marginTop:20
          }}>
          Shop by Gender
        </Text>
        <Text
          style={{
            color: '#3f684f',
            fontSize: 15,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Luxury Jwellery for Men Women and CHildren
        </Text>

        <View>
          <FlatList horizontal={true} data={Mensdata} renderItem={Mens} />
        </View>
        <View style={styles.Womenexplore}>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
            }}
            style={{height: 220, width: "100%"}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: '#3f684f'}}>WOMEN</Text>
            <Text>EXPLORE</Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              color: '#3f684f',
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 500,
              fontStyle:'italic',
            }}>
            Top Sellars
          </Text>
          <Text
            style={{
              color: '#3f684f',
              fontSize: 15,
              textAlign: 'center',
              marginTop: 10,
              paddingBottom:10
            }}>
            Checkout the prodcuts that customer Love
          </Text>
          <ImageBackground source={require('../assests/images/goldbg.jpg')}>
          <View >

          <FlatList horizontal={true} data={Mensdata} renderItem={MensImage} />
        </View>
          </ImageBackground>
        </View>
        <View>
          <Text
            style={{
              color: '#3f684f',
              textAlign: 'center',
              fontSize: 25,
              fontStyle: 'italic',
              fontWeight: 700,
              marginTop: 30,
            }}>
            Show your Love 
          </Text>
          <Text
            style={{
              color: '#3f684f',
              fontSize: 15,
              textAlign: 'center',
              marginTop: 5,
            }}>
            Freshly arrived with a exculsive Launch Price
          </Text>
          <FlatList horizontal={true} data={Mensdata} renderItem={Mens} />
        </View>
        <View style={{backgroundColor:"white"}}>
          <Text
            style={{
              color: '#3f684f',
              textAlign: 'center',
              fontSize: 25,
              fontStyle: 'italic',
              fontWeight: 900,
              marginTop:20
            }}>
            Fresh Arrivals
          </Text>
          <Text
            style={{
              color: '#3f684f',
              fontSize: 15,
              textAlign: 'center',
              marginTop: 10,
            }}>
            Freshly arrived with a exclusive launch price
          </Text>
          <FlatList horizontal={true} data={Mensdata} renderItem={MensImage} />

        </View>
        <View style={{backgroundColor:"white",paddingBottom:30}}>
          <Text
            style={{
              color: '#3f684f',
              textAlign: 'center',
              fontSize: 25,
              fontStyle: 'italic',
              fontWeight: 500,
              marginTop: 20,
            }}>
            Trusted By Many
          </Text>
          <FlatList
            horizontal={true}
            data={Commentdata}
            renderItem={Comments}
          />
        </View>
        <View style={{backgroundColor: '#fffbe5',paddingHorizontal:30,paddingBottom:40}}>
          <Text style={styles.text3}>
          Every Piece We Create Has a Tale to Tell,
 Waiting for you to make it your own!           </Text>
          <Image
            source={require('../assests/images/line.png')}
            style={{width:"100%", height: 40}}
          />
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Icon name="truck-fast-outline" size={40} marginHorizontal={10} color="#3a6347"/>
                <Text style={{color:"#3a6347",fontSize:15,width:130,fontWeight:500}}>Fast & Free Delivery</Text>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon name="hand-heart-outline" size={40} marginHorizontal={10} color="#3a6347"/>
                <Text style={{color:"#3a6347",fontSize:15,width:130,fontWeight:500}}>Lifetime Product
support</Text>
              </View>
            </View>

            <View>
              <View style={{flexDirection: 'row'}}>
                <Icon name="checkbox-marked-circle-outline" size={40} marginHorizontal={10} color="#3a6347"/>
                <Text style={{color:"#3a6347",fontSize:15,width:100,fontWeight:500}}>Certified
Jewellery</Text>
              </View>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon name="truck-check-outline" size={40} marginHorizontal={10} color="#3a6347"/>
                <Text style={{color:"#3a6347",fontSize:15,width:100,fontWeight:500}}>15 days easy
return Policy</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  Image: {
    height: 150,
    width: 130,
    borderRadius: 10,
    margin: 5,
marginTop:20,
},
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10
  },
  texts: {
    fontSize: 14,
    textAlign:"center",
  },
  text1: {
    fontFamily: 'Times New Roman',
    fontWeight: '900',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    color: '#0d243d',
  },
  text2: {
    fontFamily: 'Times New Roman',
    fontWeight: '900',
    fontSize: 24,
    textAlign: 'center',
    color: '#0d243d',
  },
  text3: {
    fontFamily: 'Times New Roman',
    fontWeight: '900',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#3a6347',
    fontStyle:'italic'
  },
  carouselImage: {
    width: '100%',
    height: 400,
    marginTop: 10,
  },
  paginationContainer: {
    paddingVertical: 8,
    backgroundColor: 'transparent',
    paddingTop: 20,
  },
  imageCarouselContainer: {
    backgroundColor: 'white', 
    height:500,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 17,
    color: '#000000',
    alignSelf: 'center',
  },
  container: {
    margin: 20,
  },
  Imagess: {
    height: 80,
    width: 80,
    borderRadius: 50,
    margin: 10,
  },
  formContainer: {
    marginHorizontal: 30,
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(260, 260, 260, 0.5)',
    width: 400,
    height: 300,

    alignItems: 'center',
  },
  formContainers: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(260, 260, 260, 0.5)',
    width: screenWidth/1.12,
    height: 250,
    backgroundColor: '#fffbe5',
    alignItems: 'center',
    paddingHorizontal:40
  },

  item: {
    marginHorizontal: 30,
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(260, 260, 260, 0.5)',
    width: 300,
    height: 300,
  },
  card: {
    padding: 0,
  },

  cards: {
    paddingTop: 10,
  },

  containers: {
    marginHorizontal: 10,
    marginTop: 30,
    padding: 5,
    borderRadius: 10,
    backgroundColor:"white",
    width: screenWidth/2.19,
    height: 300,
    marginBottom: 20,
  },
  Giftscontainers: {
    marginHorizontal: 10,
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor:"white",
    width: screenWidth/2.19,
    height: 260,
    marginBottom: 20,
  },
  Mencontainer: {
    marginHorizontal: 10,
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor:"white",
    width: screenWidth/1.9,
    height: 270,
    marginBottom: 20,
  },
  Womenexplore: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(270, 260, 260, 0.5)',
    width: '92%',
    height: 270,
    marginBottom: 20,
  },
});
