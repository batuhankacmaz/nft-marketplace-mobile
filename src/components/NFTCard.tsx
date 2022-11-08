import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import {INFTData} from '../types/data';
import {CircleButton, RectButton} from './Button';
import {SubInfo, EthPrice, NFTTitle} from './SubInfo';

import {COLORS, SIZES, SHADOWS, assets} from '../constants';

type NavigationProps = StackNavigationProp<RootStackParamList>;

const NFTCard = ({data}: {data: INFTData}) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}>
      <View style={{width: '100%', height: 250}}>
        <Image
          source={data.image as ImageSourcePropType}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton
          imgUrl={assets.heart}
          handlePress={() => {}}
          right={10}
          top={10}
        />
      </View>

      <SubInfo />

      <View style={{width: '100%', padding: SIZES.font}}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', data)}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
