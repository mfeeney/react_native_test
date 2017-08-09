import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { navigateToAlert } from '../actions';
import LatestAlertsListItem from './LatestAlertsListItem';

class LatestAlerts extends Component {
    componentWillMount() {
        this.createDataSource();
    }

    onPressAlert(alert) {
        this.props.navigateToAlert({ alert });
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
            },
            id987: {
                org: 'Wabash'
            },
            id654: {
                org: 'Text'
            },
            id321: {
                org: 'KVBC'
            },
            id781: {
                org: 'Wabash'
            },
            id118: {
                org: 'Text'
            },
            id540: {
                org: 'KVBC'
            },
            id711: {
                org: 'Wabash'
            }           
        };
        this.dataSource = ds.cloneWithRows(testItems);
    }

    renderRow(alert) {
        return (
            <LatestAlertsListItem                 
                alert={alert}
                onPress={this.onPressAlert.bind(this)}
            />
        );
    }

    render() {
        const { listHeaderSectionStyle, listHeaderTextStyle } = styles;
        const { style } = this.props;

        return (
            <View style={style}>  
                <View style={listHeaderSectionStyle}>
                    <Text style={listHeaderTextStyle}>Latest Alerts</Text>
                </View>
                <ListView 
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
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

export default connect(null, { navigateToAlert })(LatestAlerts);
