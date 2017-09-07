import React from "react";
import {View, Text} from "react-native";

class Home extends React.Component {
    componentDidMount() {
        this.props.setName()
    }
     render(){
         return(
          <View style={{flex:1, justifyContent:"center", alignment:"center"}}>
                <Text>This is how {this.props.name} does it...</Text>
          </View>
         );
     }
}

export default Home;