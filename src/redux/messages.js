import { createSlice } from '@reduxjs/toolkit'

export const messagesStore = createSlice({
    name: 'messages',
    initialState: {
        userChats: [
            {
                position: 0,
                messages: [
                    {
                        userMsg: false,
                        text: 'first',
                        time: '18.00',
                        view: true
                    },
                    {
                        userMsg: true,
                        text: 'Hello',
                        time: '20.50',
                        view: true
                    },
                    {
                        userMsg: false,
                        text: 'whats problem?',
                        time: '21.00',
                        view: true
                    },
                    {
                        userMsg: true,
                        text: 'key problem',
                        time: '21.05',
                        view: true
                    },
                ]
            },
            {
                position: 1,
                messages: [
                    {
                        userMsg: false,
                        text: 'second',
                        time: '18.00',
                        view: true
                    },
                    {
                        userMsg: true,
                        text: 'Hello',
                        time: '20.50',
                        view: true
                    },
                    {
                        userMsg: false,
                        text: 'whats problem?',
                        time: '21.00',
                        view: true
                    },
                    {
                        userMsg: true,
                        text: 'key problem',
                        time: '21.05',
                        view: true
                    },
                ]
            },
            {
                position: 2,
                messages: [
                    {
                        userMsg: false,
                        text: 'third',
                        time: '18.00',
                        view: true
                    },
                    {
                        userMsg: true,
                        text: 'Hello',
                        time: '20.50',
                        view: true
                    },
                    {
                        userMsg: false,
                        text: 'whats problem?',
                        time: '21.00',
                        view: true
                    },
                    {
                        userMsg: true,
                        text: 'key problem',
                        time: '21.05',
                        view: true
                    },
                ]
            },
            {
                position: 3,
                messages: [
                    {
                        userMsg: false,
                        text: 'fourths',
                        time: '18.00',
                        view: true
                    },
                    {
                        userMsg: true,
                        text: 'Hello',
                        time: '20.50',
                        view: true
                    },
                    {
                        userMsg: false,
                        text: 'whats problem?',
                        time: '21.00',
                        view: true
                    },
                    {
                        userMsg: true,
                        text: 'key problem',
                        time: '21.05',
                        view: true
                    },
                ]
            }
        ],
    },
    reducers: {
        addMsg: (state, action) => {
            state.userChats[action.payload.position].messages.push(action.payload.newMsg)
        }
    }
})

export const { addMsg } = messagesStore.actions
export default messagesStore.reducer