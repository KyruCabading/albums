import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    albumTitleStyle,
    albumContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    albumCoverStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={albumContentStyle}>
          <Text style={albumTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={albumCoverStyle}
          source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => console.log(title)} />
      </CardSection>
    </Card>
  );
};

const styles = {
  albumTitleStyle: {
    fontSize: 16
  },
  albumContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumCoverStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
