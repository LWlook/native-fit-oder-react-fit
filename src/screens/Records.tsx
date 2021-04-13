import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {StatItem} from "../components/StatItem";
import {Col, Grid, Row} from "react-native-easy-grid";
import DropDownPicker from 'react-native-dropdown-picker';

export const Records: React.FC = () => {


    return <SafeAreaView style={styles.container}>
        <DropDownPicker
            items={[
                {label: 'USA', value: 'usa'},
                {label: 'UK', value: 'uk'},
                {label: 'France', value: 'france'},
            ]}
            defaultValue={'usa'}
            containerStyle={{height: 50, margin: 4}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
        />

        <ScrollView>
            <Grid>
                <Row>
                    <Col><StatItem title="Total workouts" value="1"/></Col>
                    <Col><StatItem title="Total sets" value="2"/></Col>
                </Row>
                <Row>
                    <Col><StatItem title="Total reps" value="25"/></Col>
                    <Col><StatItem title="Total volume" value="1250 kgs"/></Col>
                </Row>
                <Row>
                    <Col><StatItem title="Max weight" value="50 kgs"/></Col>
                    <Col><StatItem title="Max reps" value="25"/></Col>
                </Row>
            </Grid>
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
