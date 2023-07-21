import { Image, StyleSheet } from "react-native";


const ImageViewer = ({PlaceholderImage,selectedImage}) => {

    const imageSource = selectedImage !== null ? {uri: selectedImage}: PlaceholderImage
  return (
    <Image source={imageSource} style={styles.image}/>
  )
}

const styles= StyleSheet.create({
    image: {
        width: 320,
    height: 440,
    borderRadius: 18,
    }
})
export default ImageViewer