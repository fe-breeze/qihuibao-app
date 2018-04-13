import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

import pxToDp from '../utils/pxToDp'

@connect()
class CapitalDetails extends Component {
    static navigationOptions = {
        header: null,
        title: '企惠宝零钱包',
        tabBarLabel: '企惠宝零钱包',
    }

    gotoHome = () => {
        this.props.dispatch(NavigationActions.back({ routeName: 'HomeNavigator' }))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backWrap}>
                    <ImageBackground
                        style={styles.background}
                        source={require('../images/purse-bg.png')}>
                        <View style={styles.above}>
                            <Image
                                source={require('../images/enter.png')}
                                style={styles.imgStyle}
                            />
                            <Text style={styles.topHead}>企惠宝零钱包</Text>
                            <Text style={styles.detail}>明细</Text>
                        </View>
                        <View style={[styles.among, { marginTop: pxToDp(80) }]}>
                            <Text style={styles.total}>总金额(元)</Text>
                        </View>
                        <View style={[styles.among, { marginTop: pxToDp(20) }]}>
                            <Text style={styles.sum}>6666.66</Text>
                        </View>
                        <View style={styles.above}>
                            <Text style={styles.earnings}>累计收益(元)</Text>
                            <Text style={styles.earnings}>昨日收益(元)</Text>
                            <Text style={styles.earnings}>七日年化率(%)</Text>
                        </View>
                        <View style={styles.above}>
                            <Text style={styles.show}>220.18</Text>
                            <Text style={styles.show}>12.12</Text>
                            <Text style={styles.show}>103.20</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={[styles.list, { marginTop: pxToDp(40) }]}>
                    <Text style={styles.listText}>余额自动转入</Text>
                    <Text style={styles.right}>开关</Text>
                </View>
                <View style={[styles.list, { height: pxToDp(88) }]}>
                    <Text style={styles.listText}>赎回方式</Text>
                    <Text style={styles.right}>随时赎回</Text>
                </View>
                <View style={[styles.list, { height: pxToDp(88) }]}>
                    <Text style={styles.listText}>赎回到账</Text>
                    <Text style={styles.right}>T+0</Text>
                </View>
                <View style={[styles.list, { height: pxToDp(88) }]}>
                    <Text style={styles.listText}>风险等级</Text>
                    <Text style={styles.right}>低</Text>
                </View>
                <View style={[styles.list, { height: pxToDp(88) }]}>
                    <Text style={styles.listText}>风险时间</Text>
                    <Text style={styles.right}>T+1</Text>
                </View>
                <View style={styles.btnPattern}>
                    <Button title="转出" color='#aaa' style={styles.outbtn} onPress={this.gotoHome}/>
                    <Button title="转入" color='#aaa' style={styles.inbtn} onPress={this.gotoHome}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    background: {
        width: pxToDp(750),
        height: pxToDp(520),
    },
    backWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    above: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: pxToDp(50),

    },
    topHead: {
        fontSize: pxToDp(36),
        color: 'rgb(255,255,255)'
    },
    detail: {
        fontSize: pxToDp(28),
        color: 'rgb(255,255,255)'
    },
    among: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    total: {
        fontSize: pxToDp(32),
        color: 'rgb(255,255,255)',
    },
    sum: {
        fontSize: pxToDp(68),
        color: 'rgb(255,255,255)'
    },
    earnings: {
        fontSize: pxToDp(28),
        color: 'rgb(255,255,255)'
    },
    show: {
        fontSize: pxToDp(32),
        color: 'rgb(255,255,255)'
    },
    list: {
        height: pxToDp(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: pxToDp(20),
        marginRight: pxToDp(20),
    },
    listText: {
        fontSize: pxToDp(34),
        color: 'rgb(51,51,51)',
    },
    right: {
        fontSize: pxToDp(32),
        color: 'rgb(170,170,170)',
    },
    btnPattern: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    outbtn: {
        backgroundColor: '#f5f5f5',
        borderColor: '#f5f5f5',
        borderRadius: pxToDp(12),
        height: pxToDp(100),
        marginLeft: pxToDp(20),
        marginRight: pxToDp(20),
        marginBottom: pxToDp(20),

    },
    inbtn: {
        backgroundColor: 'rgb(54,177,255)',
        borderColor: 'rgb(54,177,255)',
        borderRadius: pxToDp(12),
        height: pxToDp(100),
        marginLeft: pxToDp(20),
        marginRight: pxToDp(20),
        marginBottom: pxToDp(20),
    },
})

export default CapitalDetails
