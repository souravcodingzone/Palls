/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ImageSourcePropType,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from '../../../utils/responsive';
import {FontsFamilys, FontSize, ImageUrl} from '../../../constant';
import Header from '../../../components/Header';
import {useNavigation} from '@react-navigation/native';

interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: ImageSourcePropType;
  isOnline?: boolean;
  isRead?: boolean;
}

interface Story {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
  isOnline?: boolean;
}

const messages: Message[] = [
  { id: '1', name: 'Chloe', message: 'Would love to!', time: '2m ago', avatar: ImageUrl.GirlImage, isRead: true },
  { id: '2', name: 'Katy', message: 'Is that because we like...', time: '4m ago', avatar: ImageUrl.GirlImage, isOnline: true, isRead: true },
  { id: '3', name: 'Zain', message: 'How do you know her?', time: '6h ago', avatar: ImageUrl.GirlImage, isRead: true },
  { id: '4', name: 'Elisha', message: 'Have you ever been...', time: '1d ago', avatar: ImageUrl.GirlImage, isOnline: true, isRead: true },
  { id: '5', name: 'David', message: 'Same here!', time: '1d ago', avatar: ImageUrl.GirlImage },

  // Additional entries
  { id: '6', name: 'Sophia', message: 'Let me check and get back.', time: '2d ago', avatar: ImageUrl.GirlImage, isRead: true },
  { id: '7', name: 'Liam', message: 'Perfect, see you then!', time: '3d ago', avatar: ImageUrl.GirlImage },
  { id: '8', name: 'Emma', message: 'Where are you right now?', time: '4d ago', avatar: ImageUrl.GirlImage, isOnline: true },
  { id: '9', name: 'Noah', message: 'On my way.', time: '5d ago', avatar: ImageUrl.GirlImage, isRead: true },
  { id: '10', name: 'Olivia', message: 'I’ll send it later.', time: '1w ago', avatar: ImageUrl.GirlImage },

  { id: '11', name: 'James', message: 'Cool. Let’s do it.', time: '1w ago', avatar: ImageUrl.GirlImage, isOnline: true },
  { id: '12', name: 'Ava', message: 'Haha, that was funny!', time: '2w ago', avatar: ImageUrl.GirlImage, isRead: true },
  { id: '13', name: 'Lucas', message: 'Meeting postponed again.', time: '2w ago', avatar: ImageUrl.GirlImage },
  { id: '14', name: 'Mia', message: 'We should plan something.', time: '3w ago', avatar: ImageUrl.GirlImage, isOnline: true },
  { id: '15', name: 'Ethan', message: 'Already completed it.', time: '1mo ago', avatar: ImageUrl.GirlImage },
];

const stories: Story[] = [
  { id: '1', name: 'Anna', avatar: ImageUrl.GirlImage, isOnline: true },
  { id: '2', name: 'Gustave', avatar: ImageUrl.GirlImage, isOnline: true },
  { id: '3', name: 'Ieka', avatar: ImageUrl.GirlImage },
  { id: '4', name: 'Neesa', avatar: ImageUrl.GirlImage, isOnline: true },
  { id: '5', name: 'Aaron', avatar: ImageUrl.GirlImage },
  { id: '6', name: 'Lily', avatar: ImageUrl.GirlImage, isOnline: true },
  { id: '7', name: 'Ben', avatar: ImageUrl.GirlImage },
];

const ChatScreen = () => {
  const navigation = useNavigation();

  const renderMessage = ({item}: {item: Message}) => (
    <TouchableOpacity style={styles.messageRow}>
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.messageContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.preview} numberOfLines={1}>{item.message}</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.time}>{item.time}</Text>
        {item.isRead && (
          <View style={styles.checkmark}>
            <Image source={ImageUrl.Check} style={styles.checkmarkIcon} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderStory = ({item}: {item: Story}) => (
    <View style={styles.storyItem}>
      <View style={styles.storyAvatarContainer}>
        <Image source={item.avatar} style={styles.storyAvatar} />
        {item.isOnline && <View style={styles.storyOnlineIndicator} />}
      </View>
      <Text style={styles.storyName}>{item.name}</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#FFE57F', '#FFA726']} style={styles.container} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <SafeAreaView style={styles.safeArea}>
        <Header
          leftIcon={ImageUrl.BackIcon}
          onPressLeftImg={() => navigation.goBack()}
          centerText="Messages"
          containerstyle={styles.headerStyle}
          centerTextStyle={styles.centerTextStyle}
        />
        <View style={styles.storyContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={stories}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.storyList}
            renderItem={renderStory}
          />
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.messageLabel}>Message</Text>
          <FlatList
            data={messages}
            keyExtractor={item => item.id}
            renderItem={renderMessage}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.messageList}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerStyle: {
    marginTop: moderateScale(16),
    marginLeft: moderateScale(16),
    marginBottom: moderateScale(10),
    alignItems: 'center',
  },
  centerTextStyle: {
    marginRight: moderateScale(80),
    fontSize: FontSize.fifteen,
  },
  storyContainer: {
    paddingBottom: verticalScale(10),
  },
  storyList: {
    paddingLeft: moderateScale(20),
  },
  storyItem: {
    alignItems: 'center',
    marginRight: moderateScale(16),
  },
  storyAvatarContainer: {
    position: 'relative',
    marginBottom: verticalScale(4),
  },
  storyAvatar: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(30),
    borderWidth: 2,
    borderColor: '#fff',
  },
  storyOnlineIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: scale(14),
    height: scale(14),
    borderRadius: scale(7),
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
    marginLeft: moderateScale(6),
  },
  storyName: {
    fontSize: moderateScale(12),
    color: '#000',
    fontFamily: FontsFamilys.Poppins_SemiBold,
  },
  messageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: moderateScale(35),
    borderTopRightRadius: moderateScale(35),
    paddingTop: verticalScale(15),
  },
  messageLabel: {
    paddingHorizontal: moderateScale(24),
    fontSize: FontSize.twelve,
    fontFamily: FontsFamilys.Poppins_SemiBold,
    marginBottom: verticalScale(6),
  },
  messageList: {
    paddingHorizontal: moderateScale(24),
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(16),
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: scale(55),
    height: scale(55),
    borderRadius: scale(27.5),
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    left: 2,
    width: scale(12),
    height: scale(12),
    borderRadius: scale(6),
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
  },
  messageContent: {
    flex: 1,
    marginLeft: moderateScale(16),
  },
  name: {
    fontSize: moderateScale(16),
    color: '#000',
    fontFamily: FontsFamilys.Poppins_SemiBold,
    marginBottom: verticalScale(2),
  },
  preview: {
    fontSize: moderateScale(13),
    color: '#666',
    fontFamily: FontsFamilys.Poppins_Regular,
  },
  rightColumn: {
    alignItems: 'flex-end',
    marginLeft: moderateScale(10),
  },
  time: {
    fontSize: moderateScale(12),
    color: '#999',
    marginBottom: verticalScale(4),
  },
  checkmark: {
    width: scale(16),
    height: scale(16),
  },
  checkmarkIcon: {
    width: '100%',
    height: '100%',
    tintColor: '#FBC02D',
  },
});

export default ChatScreen;