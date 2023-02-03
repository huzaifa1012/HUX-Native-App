import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from './splashStyle.js';
const image = {
  uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png',
};

export default function SplashS() {
  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.main}>
          <View style={styles.top}>
            <Text style={styles.toph1}>WELCOME</Text>
            <Text style={styles.topP}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              and scrambled it es,
            </Text>
          </View>
          <View style={styles.imagC}>
            <Image
              source={{
                uri: 'https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png',
              }}
              style={{width: 290, height: 260, marginHorizontal: 2}}></Image>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.btnFn2}>SIGN IN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnFn}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
