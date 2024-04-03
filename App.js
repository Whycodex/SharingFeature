import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Share, Button } from 'react-native';

export default function App() {
  const URL = "https://google.com"

  const onShare = async() => {
    try {
      const res=await Share.share({
        message: URL
      })

      if(res.action===Share.sharedAction){
        if(res.activityType){
          console.log("Shared with activity type ",res.activityType);
        }
        else{
          console.log("Shared");
        }
      }
      else if(res.action===Share.dismissedAction){
        console.log("Dismissed");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Share {URL}</Text>
      <View style={styles.button}>
        <Button title='Send' color="#000" onPress={onShare} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    margin: 10
  }
});
