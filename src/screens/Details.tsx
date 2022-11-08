import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants';
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from '../components';
import {INFTData} from '../types/data';

type Props = NativeStackScreenProps<RootStackParamList, 'Details', 'MyStack'>;

const DetailsHeader = ({
  data,
  navigation,
}: {
  data: INFTData;
  navigation: Props['navigation'];
}) => (
  <View style={{width: '100%', height: 373}}>
    <Image
      source={data.image as ImageSourcePropType}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={(StatusBar.currentHeight as number) + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={(StatusBar.currentHeight as number) + 10}
    />
  </View>
);

const Details = ({route, navigation}: Props) => {
  const data = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          zIndex: 1,
        }}>
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          handlePress={() => {}}
          {...SHADOWS.dark}
        />
      </View>
      <FlatList
        data={data?.bids}
        renderItem={({item}) => <DetailsBid bid={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data as INFTData} navigation={navigation} />
            <SubInfo />
            <View style={{padding: SIZES.font}}>
              <DetailsDesc data={data as INFTData} />

              {data?.bids.length ? (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}>
                  Current Bid
                </Text>
              ) : (
                <></>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
