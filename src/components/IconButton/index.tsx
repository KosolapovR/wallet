import React from 'react';
import {Pressable, Text, View} from 'react-native';

type Prop = {
    icon?: Element;
    backgroundColor?: string;
    onPress: () => any;
};

function IconButton({onPress, icon, backgroundColor = '#fff'}: Prop) {
    return (
        <Pressable
            onPress={onPress}
            style={{
                flex: 1,
                width: 10,
                borderRadius: 5,
                backgroundColor,
            }}>
            <View style={{flex: 1, backgroundColor}}>
                {icon ? icon : <Text>X</Text>}
            </View>
        </Pressable>
    );
}

export default IconButton;
