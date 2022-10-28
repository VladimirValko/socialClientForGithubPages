import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import type { PayloadAction } from '@reduxjs/toolkit'


//TYPES
export type AddMessageProps = {
  conversationId: string | undefined;
  sender: string | undefined;
  text: string | undefined;
}

export type CreateConversationPropsType = {
  senderId: string | undefined;
  receiverId: string | undefined;
}

export type ConversationType = {
  members: string[]
  _id: string
}

export type MessageType = {
  conversationId: string;
  sender: string;
  text: string;
  createdAt: string;
}

type ChatStateType = {
  conversations: ConversationType[];
  messages: MessageType[];
  currentConversation: string;
  status: string;
}

// THUNKS
export const fetchConversations = createAsyncThunk(
  "chat/fetchConversations",
  async (params:string | undefined) => {
    const { data } = await axios.get<ConversationType[]>(`/conversation/${params}`);
    console.log(data, "data from fetchConversations");
    return data
  }
);

export const fetchAddMessage = createAsyncThunk(
  "chat/fetchAddMessage",
  async (params: AddMessageProps) => {
    const { data } = await axios.post<MessageType>("/messages", params);
    console.log(data, "data from fetchAddMessage");
    return data
  }
);

export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async (params: string) => {
    const { data } = await axios.get<MessageType[]>(`/messages/${params}`);
    console.log(data, "data from fetchMessages");
    return data
  }
);

export const fetchCreteConversation = createAsyncThunk(
  "chat/fetchCreteConversation",
  async (params: CreateConversationPropsType) => {
    const { data } = await axios.post<ConversationType>("/conversation", params);
    console.log(data, "data from fetchCreteConversation");
    return data
  }
);


// STATE
const initialState: ChatStateType= {
  conversations: [],
  messages: [],
  currentConversation: "",
  status: "loading",
};


// SLICE
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setConversation: (state, action:PayloadAction<string>) => {
      console.log("fired")
      state.currentConversation = action.payload
    },
  },
  extraReducers: (builder) => {
    //FETCH ALL Conversations
    builder.addCase(fetchConversations.pending, (state) => {
      state.status = "loading";
    })
    builder.addCase(fetchConversations.fulfilled, (state, action) => {
      state.conversations = action.payload;
      state.status = "succese";
    })
    builder.addCase(fetchConversations.rejected, () => {
      console.log("smthng goes wrong in fetchAllPosts");
    })
      //FETCH MESSAGES
      builder.addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      builder.addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.status = "succese";
      })
      builder.addCase(fetchMessages.rejected, () => {
      console.log("smthng goes wrong in fetchMessages");
      })
         //FETCH ADD MESSAGE
        builder.addCase(fetchAddMessage.pending, (state) => {
          state.status = "loading";
        })
        builder.addCase(fetchAddMessage.fulfilled, (state, action) => {
          state.messages.push(action.payload)
          state.status = "succese";
        })
        builder.addCase(fetchAddMessage.rejected, () => {
        console.log("smthng goes wrong in fetchAddMessage");
        })
          // FETCH CREATE CONVERSATION
          builder.addCase(fetchCreteConversation.pending, (state) => {
            state.status = "loading";
          })
          builder.addCase(fetchCreteConversation.fulfilled, (state, action) => {
            state.currentConversation = action.payload._id
            state.status = "succese";
          })
          builder.addCase(fetchCreteConversation.rejected, () => {
          console.log("smthng goes wrong in fetchCreteConversation");
          })
      ;
  },
});

export const { setConversation } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
