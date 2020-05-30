import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {useState}from 'react'
import MapView, {Marker} from 'react-native-maps'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function MapScreen() {
   const [region, setRegion] = useState({
       latitude: 5.544230,
       longitude: 5.760269,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
   })

// //    const [markers, setMarkers] =useState({
//     {coordinate = {{ latitude: 5.544230, longitude: 5.760269 }}
//     pinColor = { "blue"} // any color
//     title = { "New Marker"}
//    description = { "test markertion"}}
// //    })

    const onRegionChange = (region) => {
        setRegion({ region });
    }
   

    return (
        <View style={styles.container}>
            <MapView
                 style={styles.mapStyle} 
                region={region}
                onRegionChange={onRegionChange}
                 > 
                <Marker coordinate={{ latitude: 5.544230, longitude: 5.760269 }}
                    pinColor={"red"} // any color
                    title={"New Marker"}
                    description={"test markertion"} />
                <Marker coordinate={{ latitude: 5.534230, longitude: 5.760269 }}
                    pinColor={"red"} // any color
                    title={"New Marker"}
                    description={"test markertion"} />
                 </MapView>
        </View>
    );
}

MapScreen.navigationOptions = {
    header: null,
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mapStyle:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});