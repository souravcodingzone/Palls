import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import {
  Colors,
  FontsFamilys,
  FontSize,
  ImageUrl,
  Texts,
} from '../../../constant';
import OpacityButton from '../../../components/OpacityButton';
import {moderateScale, scale} from '../../../utils/responsive';
import ProfileCard from '../../../components/ProfileCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import ToggleButtons from '../../../components/ToggleButtons';
import Swiper from 'react-native-deck-swiper';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const {width, height} = Dimensions.get('window');

const profiles = [
  {
    id: '1',
    name: 'Atylia, 32',
    isNew: true,
    tags: ['Travel', 'Cooking', 'Outdoor Sports', 'Pickleball'],
    image: ImageUrl.GirlImage,
  },
  {
    id: '2',
    name: 'Sophie, 29',
    isNew: true,
    tags: ['Travel', 'Cooking', 'Outdoor Sports', 'Pickleball'],
    image: ImageUrl.GirlImage,
  },
];

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('date');
  const [activeOption, setActiveOption] = useState('Palls Date');
  const [showProfile, setShowProfile] = useState(false);
  const navigation = useNavigation();
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [profilesData, setProfilesData] = useState(profiles);
  const [prevIndex, setPrevIndex] = useState(0);
  const directionAnimVal = useSharedValue(0);

  const handleSnapToItem = (index: number) => {
    const direction = index > prevIndex ? 'right' : 'left';
    setPrevIndex(index);

    const updatedProfiles = profilesData.map((profile, i) => {
      if (i === index) {
        return {...profile, showRedCross: direction === 'left'};
      }
      return {...profile, showRedCross: false};
    });

    setProfilesData(updatedProfiles);
  };

  const animationStyle = (value: number) => {
    'worklet';

    const clampedValue = Math.min(Math.max(value, -1), 1);

    const isCurrent = Math.abs(clampedValue) < 0.1;

    const translateY = interpolate(
      clampedValue,
      [0, 1],
      [0, -18],
      Extrapolation.CLAMP,
    );
    const translateX =
      interpolate(
        clampedValue,
        [-1, 0],
        [width * 0.84, 0],
        Extrapolation.CLAMP,
      ) * directionAnimVal.value;
    const rotateZ =
      interpolate(clampedValue, [-1, 0], [15, 0], Extrapolation.CLAMP) *
      directionAnimVal.value;

    const scale = interpolate(
      clampedValue,
      [0, 1],
      [1, 0.95],
      Extrapolation.CLAMP,
    );
    const opacity = isCurrent ? 1 : 3;

    return {
      transform: [
        {translateY},
        {translateX},
        {rotateZ: `${rotateZ}deg`},
        {scale},
      ],
      opacity,
    };
  };

  const renderProfileCard = (item: any) => {
    return (
      <ProfileCard
        image={ImageUrl.GirlImage}
        name={'Atylia, 32'}
        isNew={true}
        tags={['Travel', 'Cooking', 'Outdoor Sports', 'Pickleball']}
        onPressStar={() => {
          setShowProfile(false);
          console.log('Star clicked!');
        }}
        redCrossImage={ImageUrl.RedCross}
      />
    );
  };

  const ExploreBuddies = () => {
    const categories = [
      {
        title: 'Entertainment & Leisure',
        icon: ImageUrl.Entertainment,
        bg: Colors.category_yellow,
      },
      {
        title: 'Outdoor & Adventure',
        icon: ImageUrl.Camping,
        bg: Colors.category_green,
      },
      {
        title: 'Food & Drink Experiences',
        icon: ImageUrl.Fastfood,
        bg: Colors.category_orange,
      },
      {
        title: 'Learning & Creativity',
        icon: ImageUrl.Bulb,
        bg: Colors.category_blue,
      },
      {
        title: 'Active & Sporty Fun',
        icon: ImageUrl.Badminton,
        bg: Colors.category_cyan,
      },
      {
        title: 'Other Activities',
        icon: ImageUrl.NotesBook,
        bg: Colors.category_purple,
      },
    ];

    const renderCategory = ({item}: any) => (
      <View style={[styles.cardItem, {backgroundColor: item.bg}]}>
        <Text style={styles.cardText}>{item.title}</Text>
        <Image source={item.icon} style={styles.cardIcon} />
      </View>
    );
    return (
      <ScrollView
        style={{
          marginHorizontal: moderateScale(30),
          marginVertical: moderateScale(20),
        }}
        contentContainerStyle={{paddingBottom: moderateScale(100)}}>
        {!showProfile ? (
          <View style={{marginHorizontal: moderateScale(4)}}>
            <Text style={styles.buddiesTitle}>{Texts.Explore_Buddies}</Text>
            <Text style={styles.buddiesSubtitle}>{Texts.Connect_Friends}</Text>
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-between'}} // Adjust spacing
              contentContainerStyle={styles.grid} // Same grid styling
              scrollEnabled={false} // Prevent FlatList from scrolling inside ScrollView
              showsVerticalScrollIndicator={false}
            />
            <OpacityButton
              name={Texts.Explore_buddies}
              pressButton={() => setShowProfile(true)}
              button={styles.bottomButton}
            />
          </View>
        ) : null}
      </ScrollView>
    );
  };

  return (
    <LinearGradient
      colors={['#FEB413', '#F9F9F9']}
      locations={[0, 0.3]}
      style={styles.container}>
      {/* Header Section */}
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <Image source={ImageUrl.threelinesicon} />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image source={ImageUrl.PallsIcon} />
          </View>
          <View style={styles.ButtonView}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setFilterModalVisible(true)}>
              <Image source={ImageUrl.filtericon} />
            </TouchableOpacity>
            <View style={{width: 10}} />
            {activeTab !== 'date' && (
              <TouchableOpacity style={styles.iconButton}>
                <Image source={ImageUrl.Fourbox} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {/* Toggle Buttons */}
        <ToggleButtons
          options={['Palls Date', 'Palls Buddy']}
          activeOption={activeOption}
          onChange={setActiveOption}
        />
        {activeOption === 'Palls Date' ? (
          <View style={styles.card}>
            <Swiper
              cards={prevIndex}
              renderCard={renderProfileCard}
              stackSize={3}
              backgroundColor="transparent"
              cardHorizontalMargin={20}
              cardVerticalMargin={80}
              onSwiped={cardIndex => console.log(cardIndex)}
              onSwipedAll={() => console.log('All swiped')}
              verticalSwipe={false}
              stackSeparation={0}
            />
          </View>
        ) : (
          ExploreBuddies()
        )}
        <Modal
          isVisible={isFilterModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onRequestClose={() => setFilterModalVisible(false)}
          style={styles.modalStyle}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalupperline} />
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Filter</Text>
                <TouchableOpacity onPress={() => setFilterModalVisible(false)}>
                  <Text style={styles.closeText}>×</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modallowerline} />
              <Text style={styles.label}>Distance</Text>
              <MultiSlider
                values={[42]}
                sliderLength={width - 40}
                // onValuesChange={values => console.log(values)}
                min={18}
                max={60}
                step={1}
                selectedStyle={{backgroundColor: '#F4B63F'}}
                markerStyle={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderColor: '#F4B63F',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                }}
              />
              <Text style={styles.sliderValue}>40km</Text>
              <Text style={styles.label}>Show Me</Text>
              <TouchableOpacity style={styles.selectionBox}>
                <Text style={styles.selectionText}>Both gender</Text>
                <Text style={styles.arrow}>›</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  alignContent: 'center',
                }}>
                <Text style={styles.label}>Age Range</Text>
                <Text style={styles.sliderValue}>22–38</Text>
              </View>
              <MultiSlider
                values={[22, 38]}
                sliderLength={width - 40}
                // onValuesChange={values => console.log(values)}
                min={18}
                max={60}
                step={1}
                selectedStyle={{backgroundColor: '#F4B63F'}}
                markerStyle={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderColor: '#F4B63F',
                  borderWidth: 2,
                  backgroundColor: '#fff',
                }}
              />
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: Colors.white,
    padding: moderateScale(8),
    borderWidth: 1,
    borderRadius: moderateScale(30),
  },
  ButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '84%',
    alignSelf: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  brand: {
    fontSize: scale(24),
    fontWeight: 'bold',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    borderRadius: moderateScale(20),
    padding: moderateScale(3),
    marginBottom: moderateScale(10),
    borderWidth: 1,
    borderColor: Colors.light_black,
    width: '84%',
    alignSelf: 'center',
  },
  toggleButton: {
    flex: 1,
    padding: moderateScale(10),
    alignItems: 'center',
    borderRadius: moderateScale(20),
  },
  activeButton: {
    backgroundColor: Colors.dark_yellow,
  },
  toggleText: {
    fontSize: FontSize.fourteen,
    color: Colors.light_black,
    fontFamily: FontsFamilys.Poppins_Regular,
  },
  activeText: {
    fontSize: FontSize.fourteen,
    color: Colors.light_black,
    fontFamily: FontsFamilys.Poppins_Regular,
  },
  card: {
    marginLeft: moderateScale(16),
  },
  buddyCard: {
    borderRadius: 15,
    marginVertical: moderateScale(8),
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
  },
  userInfo: {
    position: 'absolute',
    bottom: moderateScale(20),
    left: moderateScale(20),
  },
  newTag: {
    backgroundColor: Colors.dark_yellow,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(3),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(5),
    width: 100,
  },
  newTagText: {
    fontFamily: FontsFamilys.Poppins_Bold,
    fontSize: FontSize.twelve,
    color: Colors.white,
  },
  userName: {
    fontSize: FontSize.T_four,
    fontFamily: FontsFamilys.Poppins_Bold,
    color: '#fff',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: moderateScale(5),
    // borderWidth:1,
    width: '93%',
  },
  tag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(3),
    borderRadius: moderateScale(15),
    marginRight: moderateScale(5),
    color: '#fff',
    fontSize: FontSize.twelve,
    fontFamily: FontsFamilys.Poppins_Medium,
    marginBottom: 5,
  },
  floatingButton: {
    position: 'absolute',
    bottom: moderateScale(15),
    right: moderateScale(15),
    backgroundColor: '#FDB813',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buddiesTitle: {
    fontSize: moderateScale(FontSize.T_three),
    fontFamily: FontsFamilys.Poppins_Bold,
    color: Colors.greyText,
    marginLeft: moderateScale(4),
  },
  buddiesSubtitle: {
    fontSize: FontSize.fourteen,
    fontFamily: FontsFamilys.Poppins_Regular,
    color: Colors.greyText,
    marginBottom: moderateScale(20),
    marginLeft: moderateScale(4),
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(4),
  },
  cardItem: {
    width: '48%',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    height: moderateScale(150),
  },
  cardIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: moderateScale(40),
    marginTop: moderateScale(10),
  },
  cardText: {
    fontSize: FontSize.thirteen,
    fontFamily: FontsFamilys.Poppins_Medium,
    color: 'black',
  },
  exploreButton: {
    marginTop: moderateScale(20),
    backgroundColor: Colors.dark_yellow,
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(25),
    alignItems: 'center',
  },
  exploreButtonText: {
    fontSize: FontSize.fourteen,
    color: Colors.white,
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  bottomButton: {
    // bottom: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(5),
    alignSelf: 'center',
    width: '55%',
    borderColor: Colors.dark_yellow,
    opacity: 0.7,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: moderateScale(20),
    width: '100%',
    height: '70%',
  },
  modalStyle: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: FontSize.twenty,
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  closeText: {
    fontSize: moderateScale(24),
    color: '#000',
  },
  label: {
    fontSize: moderateScale(FontSize.fourteen),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    marginBottom: moderateScale(10),
  },
  sliderValue: {
    textAlign: 'right',
    color: Colors.light_black,
    fontSize: moderateScale(12),
  },
  selectionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E8F9F1',
    padding: moderateScale(12),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(20),
  },
  selectionText: {
    fontFamily: FontsFamilys.Poppins_Medium,
    color: 'green',
    fontSize: moderateScale(14),
  },
  arrow: {
    fontSize: moderateScale(18),
    color: 'green',
  },
  applyButton: {
    backgroundColor: '#FEB413',
    borderRadius: moderateScale(30),
    paddingVertical: moderateScale(15),
    alignItems: 'center',
    marginHorizontal: moderateScale(30),
    marginTop: moderateScale(40),
    borderWidth: 2,
    borderColor: 'black',
  },
  applyText: {
    fontFamily: FontsFamilys.Poppins_Regular,
    color: '#000',
    fontSize: moderateScale(14),
  },
  modalupperline: {
    width: '20%',
    backgroundColor: 'grey',
    height: 7,
    opacity: 0.2,
    marginBottom: moderateScale(25),
    marginTop: moderateScale(10),
    alignSelf: 'center',
    borderRadius: moderateScale(10),
  },
  modallowerline: {
    width: '100%',
    backgroundColor: 'grey',
    height: 1,
    opacity: 0.2,
    marginBottom: moderateScale(25),
    marginTop: moderateScale(10),
  },
});
