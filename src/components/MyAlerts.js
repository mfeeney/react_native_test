import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';

import MyAlertsListItem from './MyAlertsListItem';

class MyAlerts extends Component {
    componentWillMount() {
        this.createDataSource();
    }

    createDataSource() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        
        const testItems = {
            id123: {
                org: 'Wabash'
            },
            id345: {
                org: 'Text'
            },
            id678: {
                org: 'KVBC'
            }                      
        };
        this.dataSource = ds.cloneWithRows(testItems);
    }

    renderRow(alert) {
        return (
            <MyAlertsListItem
                alert={alert}
            />
        );
    }

    render() {
        const { listHeaderSectionStyle, listHeaderTextStyle } = styles;
        const { style } = this.props;

        return (
            <View style={style}>  
                <View style={listHeaderSectionStyle}>
                    <Text style={listHeaderTextStyle}>My Alerts</Text>
                </View>
                <ListView 
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const styles = {
    listHeaderSectionStyle: {
        backgroundColor: '#142984'        
    },
    listHeaderTextStyle: {
        color: '#FFFFFF',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 16
    }
};

export default MyAlerts;
