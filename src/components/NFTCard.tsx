import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {INFTData} from '../types/data';
import {CircleButton, RectButton} from './Button';

import {COLORS, SIZES, SHADOWS, assets} from '../constants';

const NFTCard = ({data}: {data: INFTData}) => {
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
    </View>
  );
};

export default NFTCard;
