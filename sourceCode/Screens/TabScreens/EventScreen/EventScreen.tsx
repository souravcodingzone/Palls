import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../components/Header';
import {Colors, FontsFamilys, ImageUrl} from '../../../constant';
import {moderateScale, verticalScale} from '../../../utils/responsive';
import ToggleButtons from '../../../components/ToggleButtons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  EventDetailsScreen: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const EventScreen = () => {
  const [activeOption, setActiveOption] = useState('Updating');

  const navigation = useNavigation<NavigationProp>();

  const events = [
    {
      id: '1',
      date: '26 FEB\n2025',
      title: 'Instrumental Musical 3.0',
      connections: '2.3k potential connections',
      location: '',
      image: ImageUrl.Guitar,
      type: 'VIP',
      button: 'Upgrade to access details',
      isVip: true,
    },
    {
      id: '2',
      date: '21 FEB\n2025',
      title: 'Foodie Festives',
      connections: '2.3k potential connections',
      location: 'Petaling Jaya',
      image: ImageUrl.FoodImage,
      button: 'RSVP',
    },
    {
      id: '3',
      date: '14 FEB\n2025',
      title: 'Valentine Meetup',
      connections: '2.3k potential connections',
      location: 'Petaling Jaya',
      image: ImageUrl.Guitar,
      button: 'RSVP',
    },
  ];

  const EventCard = ({item}: {item: (typeof events)[0]}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('EventDetailsScreen')}
        activeOpacity={0.85}>
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
          <View style={styles.dateBadge}>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
          {item.isVip && (
            <LinearGradient
              colors={['#FFA500', '#FFA500', '#FFD700', '#FFD700']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.vipBadge}>
              <Text style={styles.vipText}>VIP</Text>
            </LinearGradient>
          )}
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>{item.connections}</Text>
            {!!item.location && <Text style={styles.tag}>{item.location}</Text>}
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{item.button}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#FEB413', '#F9F9F9']}
        locations={[0, 0.3]}
        style={styles.container}>
        <Header
          leftIcon={ImageUrl.threelinesicon}
          leftIconStyle={{
            width: moderateScale(45),
            height: moderateScale(45),
            marginLeft: moderateScale(22),
          }}
          containerstyle={{
            marginTop: moderateScale(8),
            alignItems: 'center',
          }}
          CenterImage={ImageUrl.PallsIcon}
          centerImageStyle={{
            marginRight:moderateScale(70)
          }}
        />
        <Text style={styles.header}>Events</Text>
        <View style={{marginVertical: moderateScale(15)}}>
          <ToggleButtons
            options={['Updating', 'Past']}
            activeOption={activeOption}
            onChange={setActiveOption}
          />
        </View>
        <FlatList
          data={events}
          renderItem={({item}) => <EventCard item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FEB413',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    color: '#2C2C2C',
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  list: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: verticalScale(40),
  },
  card: {
    marginBottom: verticalScale(30),
    backgroundColor: '#fff',
    borderRadius: moderateScale(20),
    paddingBottom: verticalScale(16),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: moderateScale(10),
  },
  image: {
    width: '100%',
    height: verticalScale(160),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  dateBadge: {
    position: 'absolute',
    top: verticalScale(12),
    left: moderateScale(12),
    backgroundColor: '#FDB515',
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(6),
  },
  dateText: {
    fontSize: moderateScale(10),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#fff',
    textAlign: 'center',
    lineHeight: moderateScale(12),
  },
  vipBadge: {
    position: 'absolute',
    top: verticalScale(12),
    right: moderateScale(12),
    backgroundColor: '#FDE49C',
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(6),
  },
  vipText: {
    fontSize: moderateScale(10),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: Colors.white,
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    marginTop: verticalScale(12),
    textAlign: 'center',
    color: '#2C2C2C',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(10),
    flexWrap: 'wrap',
    marginTop: verticalScale(8),
  },
  tag: {
    backgroundColor: '#FDE49C',
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(12),
    fontSize: moderateScale(10),
    color: Colors.Black,
    fontFamily: FontsFamilys.Poppins_Bold,
    opacity: 0.6,
  },
  button: {
    backgroundColor: '#FDC93A',
    paddingVertical: verticalScale(12),
    paddingHorizontal: moderateScale(30),
    borderRadius: moderateScale(30),
    marginTop: verticalScale(16),
  },
  buttonText: {
    fontSize: moderateScale(14),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#ffffff',
  },
});
