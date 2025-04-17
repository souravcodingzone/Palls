import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import { moderateScale, verticalScale } from '../../../utils/responsive';
import { FontsFamilys, FontSize, ImageUrl } from '../../../constant';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

const plans = [
  {
    id: '1',
    title: 'Premium',
    benefits: ['Unlimited connections', 'Unlimited likes', 'VIP Access for events'],
    image: ImageUrl.SubscriptionImage,
  },
  {
    id: '2',
    title: 'Standard',
    benefits: ['Unlimited connections', 'Unlimited likes'],
    image: ImageUrl.SubscriptionImage,
  },
];

const SubscriptionScreen = () => {
  const navigation = useNavigation();
  const renderPlan = ({ item }) => (
    <ImageBackground
      source={item.image}
      style={styles.planCard}
      imageStyle={styles.planImage}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      {item.benefits.map((benefit, idx) => (
        <View key={idx} style={styles.tag}>
          <Text style={styles.tagText}>{benefit}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.chooseButton}>
        <Text style={styles.chooseButtonText}>Choose plan</Text>
      </TouchableOpacity>
    </ImageBackground>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      <Header
          leftIcon={ImageUrl.BackIcon}
          centerText="Subscription"
          containerstyle={styles.headerStyle}
          centerTextStyle={styles.centerTextStyle}
          onPressLeftImg={() => navigation.goBack()}
        />

      <View style={styles.cardContainer}>
        <Text style={styles.planTitle}>Choose a plan</Text>
        <Text style={styles.planSubtitle}>
          Select the offer the best suits your need
        </Text>

        <FlatList
          data={plans}
          renderItem={renderPlan}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD233',
  },
  header: {
    padding: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: moderateScale(8),
  },
  backIconWrapper: {
    width: moderateScale(36),
    height: moderateScale(36),
    borderRadius: moderateScale(18),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: moderateScale(16),
    color: '#1E1E1E',
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(24),
  },
  planTitle: {
    fontSize: moderateScale(18),
    textAlign: 'center',
    color: '#1E1E1E',
    fontFamily: FontsFamilys.Poppins_Bold,
  },
  planSubtitle: {
    fontSize: moderateScale(13),
    textAlign: 'center',
    marginTop: verticalScale(6),
    marginBottom: verticalScale(20),
    fontFamily: FontsFamilys.Poppins_Regular,
  },
  listContent: {
    paddingBottom: verticalScale(40),
  },
  planCard: {
    height: verticalScale(200),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    justifyContent: 'center',
    padding: moderateScale(16),
    marginBottom: verticalScale(20),
    alignItems:'center',
    marginHorizontal:moderateScale(10),
  },
  planImage: {
    borderRadius: moderateScale(20),
  },
  cardTitle: {
    fontSize: moderateScale(20),
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#fff',
  },
  tag: {
    backgroundColor: '#fff',
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(12),
    marginTop: verticalScale(6),
    alignSelf: 'center',
  },
  tagText: {
    fontSize: moderateScale(10),
    color: '#1E1E1E',
  },
  chooseButton: {
    marginTop: verticalScale(12),
    backgroundColor: '#FFD233',
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(20),
    alignSelf: 'center',
  },
  chooseButtonText: {
    fontFamily: FontsFamilys.Poppins_SemiBold,
    color: '#000',
  },
  headerStyle: {
    marginVertical: moderateScale(38),
    alignItems: 'center',
    marginLeft: moderateScale(16),
  },
  centerTextStyle: {
    marginRight: moderateScale(50),
    marginTop: moderateScale(10),
    fontSize: FontSize.sixteen
  },
});
