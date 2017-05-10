import { StyleSheet } from 'react-native';


export const font = StyleSheet.create({
    _10: {
        fontSize: 10,
    },
    _11: {
        fontSize: 11,
    },
    _12: {
        fontSize: 12,
    },
    _13: {
        fontSize: 13,
    },
    _14: {
        fontSize: 14,
    },
    _15: {
        fontSize: 15,
    },
    _16: {
        fontSize: 16,
    }
});

export const color = StyleSheet.create({
    green: {
        backgroundColor: 'rgb(121,200,156)',
    }
});

export const layout = {
    
    flex: StyleSheet.create({
        
        row: {
            flexDirection: 'row',
        },
        column: {
            flexDirection: 'column',
        },
        center: {
            alignItems: 'center',
            justifyContent: 'center'
        },
    }),

    padding: StyleSheet.create({
        _15: {
            paddingHorizontal: 15,
            backgroundColor: 'red',
            height: 44,
        }
    }),
};


export const cell = {
    container: StyleSheet.flatten([layout.flex.row, layout.flex.center, layout.padding._15, color.green])
}