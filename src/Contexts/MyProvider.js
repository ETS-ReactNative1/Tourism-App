import React, { Component } from 'react';
import MyContext from './Context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



class MyProvider extends Component {
    state = {
        search: null,
        progress: null,
        search: null,
    };



    setItem = (e) => {
        this.setState({search: e})
    }


    filterList = (lis) => {
        return lis.filter(listItem => listItem.name.toLowerCase().includes(this.state.search.toLowerCase()));

    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    profile: this.state.profile,
                    progress: this.state.progress,
                    filterList: this.filterList,
                    search: this.state.search,
                    setItem: this.setItem,


                }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
export default MyProvider;
