import { Button, Text, View } from "react-native";


export default function secondscreen(){
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
           
        >
          <Text style ={{fontSize:40, fontWeight:'bold',color:'green'}}>Edit app/index.tsx to edit this screen.</Text>
          
        </View>
      );
}