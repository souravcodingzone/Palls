import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, FontsFamilys, FontSize, ImageUrl, Texts} from '../../constant';
import OpacityButton from '../../components/OpacityButton';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {ROUTE_NAMES} from '../../navigation/StackNavigation';
import Header from '../../components/Header';
import {moderateScale} from '../../utils/responsive';

type HobbyScreenRouteParams = {
  isEditMode?: boolean;
};

type HobbyScreenRouteProp = RouteProp<
  {HobbyScreen: HobbyScreenRouteParams},
  'HobbyScreen'
>;

const HobbyScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<HobbyScreenRouteProp>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const isEditMode = route.params?.isEditMode || false;

  const handleTagPress = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(prev => prev.filter(t => t !== tag));
    } else {
      setSelectedTags(prev => [...prev, tag]);
    }
  };

  const renderTags = (tags: string[], isSelection = true) => {
    return (
      <View style={styles.tagContainer}>
        {tags.map(tag => {
          const isSelected = selectedTags.includes(tag);
          const isSelectedTag = isSelection && isSelected;
          const baseStyle = isSelection
            ? [styles.tag, isSelectedTag && styles.tagSelected]
            : [styles.tag, styles.tagSelected];
          const textStyle = isSelection
            ? [styles.tagText, isSelectedTag && styles.tagTextSelected]
            : [styles.tagText, styles.tagTextSelected];

          return (
            <TouchableOpacity
              key={tag}
              style={baseStyle}
              onPress={() => handleTagPress(tag)}
              activeOpacity={0.7}>
              <Text style={textStyle}>{tag}</Text>
              {isSelectedTag || !isSelection ? (
                <Text style={styles.tagClose}>✕</Text>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#FEB413', '#F9F9F9']}
      locations={[0, 0.85]}
      style={styles.container}>
      <StatusBar backgroundColor="#FEB413" />
      <Header
        leftIcon={ImageUrl.BackIcon}
        onPressLeftImg={() => navigation.goBack()}
        containerstyle={{
          marginTop: isEditMode ? moderateScale(35) : moderateScale(48),
        }}
        centerText={isEditMode ? 'Edit Interest' : undefined}
      />

      <View style={styles.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          {!isEditMode && (
            <>
              <Text style={styles.title}>What are you into?</Text>
              <Text style={styles.subTitle}>{Texts.Everyne_Know}</Text>
            </>
          )}

          {/* Selected Tags */}
          {selectedTags.length > 0 && (
            <View style={styles.selectedTagsContainer}>
              {renderTags(selectedTags)}
              <View style={styles.divider} />
            </View>
          )}

          {/* Tag Categories */}
          <View
            style={[
              styles.categoriesContainer,
              isEditMode && {marginTop: moderateScale(35)},
            ]}>
            <Text style={styles.categoryTitle}>
              {Texts.Entertainment_Leisure}
            </Text>
            {renderTags([
              'Movie Night',
              'Concerts & Live Shows',
              'Game Night',
              'Escape Room',
              'Karaoke Night',
            ])}

            <Text style={styles.categoryTitle}>{Texts.Outdoor_Adventure}</Text>
            {renderTags([
              'Horse Riding',
              'Hiking & Nature Walks',
              'Cycling',
              'Beach or Pool Day',
              'Amusement Parks & Arcades',
            ])}

            <Text style={styles.categoryTitle}>{Texts.Food_Experiences}</Text>
            {renderTags([
              'Cooking or Baking',
              'Food Tour',
              'Coffee',
              'Picnic',
              'Themed Dinner Nights',
            ])}

            <Text style={styles.categoryTitle}>
              {Texts.Learning_Creativity}
            </Text>
            {renderTags(['Museum or Art Gallery', 'Painting or Pottery Class'])}
          </View>
        </ScrollView>

        {/* Bottom Button */}
        <View style={styles.bottomButton}>
          <OpacityButton
            name="Next"
            pressButton={() => navigation.navigate(ROUTE_NAMES.BioScreen)}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default HobbyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.T_four,
    fontFamily: FontsFamilys.Poppins_SemiBold,
    textAlign: 'center',
    marginTop: moderateScale(40),
    color: Colors.Main_Black,
  },
  subTitle: {
    fontSize: FontSize.fourteen,
    fontFamily: FontsFamilys.Poppins_Medium,
    marginVertical: moderateScale(10),
    color: 'black',
    width: '85%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  categoryTitle: {
    fontSize: FontSize.fourteen,
    fontFamily: FontsFamilys.Poppins_SemiBold,
    marginBottom: moderateScale(8),
    color: 'black',
    marginHorizontal: moderateScale(24),
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: moderateScale(4),
    marginBottom: moderateScale(8),
    marginHorizontal: moderateScale(24),
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F6EE',
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(6),
    marginRight: moderateScale(8),
    marginBottom: moderateScale(8),
  },
  tagSelected: {
    backgroundColor: '#367a4c',
  },
  tagText: {
    fontFamily: FontsFamilys.Poppins_Medium,
    fontSize: FontSize.twelve,
    color: '#367a4c',
  },
  tagTextSelected: {
    color: 'white',
  },
  tagClose: {
    marginLeft: 6,
    color: 'white',
    fontSize: FontSize.twelve,
    fontFamily: FontsFamilys.Poppins_Medium,
  },
  selectedTagsContainer: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(2),
  },
  divider: {
    height: 1,
    backgroundColor: '#E6E6E6',
    marginBottom: moderateScale(20),
    width: '88%',
    alignSelf: 'center',
  },
  bottomButton: {
    paddingBottom: moderateScale(60),
    width: '85%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  categoriesContainer: {
    marginBottom: moderateScale(20),
  },
});
