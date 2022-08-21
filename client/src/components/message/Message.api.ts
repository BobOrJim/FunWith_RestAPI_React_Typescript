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

/*
axios
  .get("/user?ID=12345")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
*/

/*

export const getMessages = async () => {
  const response = await axios.get(`/api/message`);
  return response.data;
};


export const getMessage = async (id: number) => {
    const response = await axios.get(`/api/message/${id}`);
    return response.data;
}



export const createMessage = async (message: any) => {
    const response = await axios.post(`/api/message`, message);
    return response.data;
}

export const updateMessage = async (message: any) => {
    const response = await axios.put(`/api/message/${message.id}`, message);
    return response.data;
}

export const deleteMessage = async (id: number) => {
    const response = await axios.delete(`/api/message/${id}`);
    return response.data;
}
*/
