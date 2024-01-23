import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


class Filmes extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.data.nome}</Text>
            </View>
        );
    }
}

export default Filmes;