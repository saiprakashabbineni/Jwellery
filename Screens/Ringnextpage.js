import {View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Ringnextpage = () => {
  const [activeindex, setActiveIndex] = React.useState(null);
  const [state, setState] = React.useState(null);
  const [active, setActive] = React.useState(null);
  const [ac, setAc] = React.useState(null);
  const [bc, setBc] = React.useState(null);

  const sortdata = [
    {
      id: 1,
      name: 'Bestsellers',
    },
    {
      id: 2,
      name: 'Bestsellers',
    },
    {
      id: 3,
      name: 'Bestsellers',
    },
    {
      id: 4,
      name: 'Bestsellers',
    },
    {
      id: 5,
      name: 'Bestsellers',
    },
  ];
  const PriceData = [
    {
      id: 1,
      pricetext: 'All',
    },
    {
      id: 2,
      pricetext: 'Under 1000',
    },
    {
      id: 3,
      pricetext: '1000 - 2000',
    },
    {
      id: 4,
      pricetext: '1000 - 2000',
    },
    {
      id: 5,
      pricetext: '1000 - 2000',
    },
    {
      id: 6,
      pricetext: '1000 - 2000',
    },
    {
      id: 7,
      pricetext: '1000 - 2000',
    },
  ];
  const Metaldata = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Gold',
    },
    {
      id: 3,
      name: 'Silver',
    },
  ];
  const CategoryData = [
    {
      id: 1,
      categoryname: 'All',
    },
    {
      id: 2,
      categoryname: 'Mangalsutra',
    },
    {
      id: 3,
      categoryname: 'coin',
    },
    {
      id: 4,
      categoryname: 'fancy chain',
    },
    {
      id: 5,
      categoryname: 'Anklet',
    },
    {
      id: 6,
      categoryname: 'Bracelet',
    },
    {
      id: 7,
      categoryname: 'All',
    },
    {
      id: 8,
      categoryname: 'All',
    },
    {
      id: 9,
      categoryname: 'studs',
    },
    {
      id: 10,
      categoryname: 'chain',
    },
    {
      id: 11,
      categoryname: 'Bracelet',
    },
    {
      id: 12,
      categoryname: 'Rings',
    },
  ];
  const PurityData = [
    {
      id: 1,
      purityname: 'All',
    },
    {
      id: 2,
      purityname: '24CT (gold)',
    },
    {
      id: 3,
      purityname: '22CT (gold)',
    },
    {
      id: 4,
      purityname: 'All',
    },
    {
      id: 6,
      purityname: 'All',
    },
    {
      id: 7,
      purityname: 'All',
    },
  ];
  const sortitems = ({item, index}) => {
    return (
      <View>
        <Text
          style={index === activeindex ? styles.nametext : styles.nametext1}
          onPress={() => {
            setActiveIndex(index);
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  const Priceitems = ({item, index}) => {
    return (
      <View>
        <Text
          style={index === state ? styles.pricestyle : styles.pricestyle1}
          onPress={() => {
            setState(index);
          }}>
          {item.pricetext}
        </Text>
      </View>
    );
  };
  const Metalitems = ({item, index}) => {
    return (
      <View>
        <Text
          style={index === active ? styles.pricestyle : styles.pricestyle1}
          onPress={() => {
            setActive(index);
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  const CategoryItems = ({item, index}) => {
    return (
      <View>
        <Text
          style={index === ac ? styles.pricestyle : styles.pricestyle1}
          onPress={() => {
            setAc(index);
          }}>
          {item.categoryname}
        </Text>
      </View>
    );
  };
  const PurityItems = ({item, index}) => {
    return (
      <View>
        <Text
          style={index === bc ? styles.pricestyle : styles.pricestyle1}
          onPress={() => {
            setBc(index);
          }}>
          {item.purityname}
        </Text>
      </View>
    );
  };
  return (
    <View>
        <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 900, color: 'black'}}>
          Filter
        </Text>
        <Icon
          name="close"
          type="FontAwesome"
          color="black"
          size={30}
          style={{paddingHorizontal: 10}}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 900,
            color: 'black',
            marginLeft: 20,
          }}>
          Sort
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <FlatList
          data={sortdata}
          numColumns={3}
          renderItem={sortitems}
          horizontal={false}
        //   keyExtractor={item => item.id.toString()}
        keyExtractor={(id) => { id.toString(); }}
        />
      </View>
      <View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: 'black',
              marginLeft: 20,
              marginTop: 20,
            }}>
            Price
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <FlatList
            data={PriceData}
            renderItem={Priceitems}
            keyExtractor={(id) => { id.toString(); }}
            horizontal={false}
            numColumns={3}
          />
        </View>
      </View>
      <View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: 'black',
              marginLeft: 20,
              marginTop: 20,
            }}>
            Metals
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <FlatList
            data={Metaldata}
            renderItem={Metalitems}
            keyExtractor={(id) => { id.toString(); }}
            horizontal={false}
            numColumns={3}
          />
        </View>
      </View>
      <View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: 'black',
              marginLeft: 20,
              marginTop: 20,
            }}>
            Category
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <FlatList
            data={CategoryData}
            renderItem={CategoryItems}
            keyExtractor={(id) => { id.toString(); }}
            horizontal={false}
            numColumns={3}
          />
        </View>
      </View>
      <View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 900,
              color: 'black',
              marginLeft: 20,
              marginTop: 20,
            }}>
            Purity
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <FlatList
            data={PurityData}
            renderItem={PurityItems}
            keyExtractor={(id) => { id.toString(); }}
            horizontal={false}
            numColumns={3}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:20}}>
      <Text
    style={{
        backgroundColor: 'white',
        marginTop: 10,
        paddingHorizontal: 50,
        paddingVertical: 10,
        color: 'green',
        borderColor: "green",
        borderWidth: 1,
       
        textAlign: "center" ,
        marginBottom:20
    }}>
    Clearall
</Text>
<Text
    style={{
        backgroundColor: 'green',
        marginTop: 10,
        paddingHorizontal: 50,
        paddingVertical: 10,
        color: 'white',
        textAlign: "center" ,
        marginBottom:20
    }}>
    Apply
</Text>

      </View>
      </ScrollView>
    </View>
  );
};

export default Ringnextpage;

const styles = StyleSheet.create({
  nametext: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: 'white',
    borderRadius: 20,
  },
  nametext1: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: 'green',
    borderRadius: 20,
  },
  nametext: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: 'white',
    borderRadius: 20,
    marginBottom:20
  },
  nametext1: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: 'green',
    borderRadius: 20,
    marginBottom:20
  },
  pricestyle: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: 'white',
    borderRadius: 20,
    marginBottom:20
  },
  pricestyle1: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: 'green',
    borderRadius: 20,
    marginBottom:20

  },
});
