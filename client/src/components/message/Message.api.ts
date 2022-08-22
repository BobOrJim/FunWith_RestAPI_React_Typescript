import axios from "axios";

import type { MessageType, MessageDto } from "./Message.model";

const baseUrl = "http://localhost:3000/api/v1/message";

//get
export const getMessagesFromServer = async (): Promise<null | MessageType[]> => {
  console.log("getMessages");
  try {
    const { data, status } = await axios.get<MessageType[]>(baseUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(JSON.stringify(data));
    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return null;
    } else {
      console.log("unexpected error: ", error);
      return null;
    }
  }
};

//getById
export const getMessageByIdFromServer = async (id: string): Promise<null | MessageType> => {
  console.log("getMessageById");
  try {
    const { data, status } = await axios.get<MessageType>(`${baseUrl}/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(JSON.stringify(data));
    console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return null;
    } else {
      console.log("unexpected error: ", error);
      return null;
    }
  }
};

//post
export const postMessageToServer = async (message: MessageDto): Promise<null | MessageType> => {
  console.log("postMessage");
  try {
    const { data, status } = await axios.post<MessageType>(baseUrl, message, {
      headers: {
        Accept: "application/json",
      },
    });
    //console.log(JSON.stringify(data));
    //console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return null;
    } else {
      console.log("unexpected error: ", error);
      return null;
    }
  }
};

//delete
export const deleteMessageFromServer = async (id: string): Promise<null | MessageType> => {
  console.log("deleteMessage");
  try {
    const { data, status } = await axios.delete<MessageType>(`${baseUrl}/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });
    //console.log(JSON.stringify(data));
    //console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return null;
    } else {
      console.log("unexpected error: ", error);
      return null;
    }
  }
};

//put
export const updateMessageToServer = async (id: string, message: MessageDto): Promise<null | MessageType> => {
  console.log("updateMessage");
  try {
    const { data, status } = await axios.put<MessageType>(`${baseUrl}/${id}`, message, {
      headers: {
        Accept: "application/json",
      },
    });
    //console.log(JSON.stringify(data));
    //console.log("response status is: ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return null;
    } else {
      console.log("unexpected error: ", error);
      return null;
    }
  }
};
