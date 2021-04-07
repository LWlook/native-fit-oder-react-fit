import React from "react";
import {Set, SetProps} from "./Set";
import {FlatList, ListRenderItem, StyleSheet} from "react-native";

interface SetsProps {
    sets: SetProps[]
}

export const Sets: React.FC<SetsProps> = ({sets}) => {

    const renderDisplaySet: ListRenderItem<SetProps> = ({item, index}) => (
        <Set count={index + 1} reps={item.reps} weight={item.weight} id={item.id} />
    )

    return <FlatList<SetProps>
        data={sets}
        renderItem={renderDisplaySet}
        contentContainerStyle={styles.flatlistContainer}
        keyExtractor={(item) => "" + item.id}
        persistentScrollbar={true}
    />
}

const styles = StyleSheet.create({
    flatlistContainer: {
        paddingBottom: 8,
        paddingHorizontal: 5
    }
});
