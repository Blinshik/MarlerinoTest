import { createSlice } from '@reduxjs/toolkit'

export const requestListStore = createSlice({
    name: 'requests',
    initialState: { 
        requestMain: [
            {
                title: 'Не работает вентиляция',
                place: 'Офис 2109',
                date: '• 21.02.2021 12:19',
                position: 0,
                isClicked: false
            },
            {
                title: 'Сломалась кнопка на входе в офис',
                place: 'Офис 2109',
                date: '• 21.02.2021 12:19',
                position: 1,
                isClicked: false
            },
            {
                title: 'Надо заменить розетку',
                place: 'Офис 2109',
                date: '• 21.02.2021 12:19',
                position: 2,
                isClicked: false
            },
            {
                title: 'Не работает интернет',
                place: 'Офис 2109',
                date: '• 21.02.2021 12:19',
                position: 3,
                isClicked: false
            }
        ],
        active: {
            position: -1,
            title: '',
            place: '',
        }
    },
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;          
            if(action.payload.position !== -1) {
                state.requestMain[action.payload.position].isClicked = true
            }
        },
    }
})

export const { setActive } = requestListStore.actions
export default requestListStore.reducer