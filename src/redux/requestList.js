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
            },
            {
                title: 'Сломалась кнопка на входе в офис',
                place: 'Офис 2109',
                date: '• 21.02.2021 12:19',
                position: 1,
            },
            {
                title: 'Надо заменить розетку',
                place: 'Офис 2109',
                date: '• 21.02.2021 12:19',
                position: 2,
            },
            {
                title: 'Не работает интернет',
                place: 'Офис 2109',
                date: '• 21.02.2021 12:19',
                position: 3,
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
            state.active = action.payload
        }
    }
})

export const { setActive } = requestListStore.actions
export default requestListStore.reducer