import React from 'react';
import {Button, Platform} from 'react-native';
import {HeaderButton as ReactNavigationHeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import {colors} from "../constants/style";

const HeaderButton = (props: any) => {
    return (
        <ReactNavigationHeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? colors.white : colors.primary}
        />
    );
};

export default HeaderButton;
