import {TouchableOpacity, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, SHADOWS} from '../constants';

interface ICircleButtonProps {
  imgUrl: string;
  handlePress?: () => void;
  right?: number;
  top?: number;
  left?: number;
}

export const CircleButton = ({
  imgUrl,
  handlePress,
  ...props
}: ICircleButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl as ImageSourcePropType}
        resizeMode="contain"
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({
  minWidth,
  fontSize,
  handlePress,
  ...props
}: {
  minWidth: number;
  fontSize: number;
  handlePress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
