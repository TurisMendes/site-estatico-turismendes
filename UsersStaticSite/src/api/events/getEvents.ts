import { BASE_URL_API } from "../../globalConstants";
import { EventHomeCard, ResponseDTO } from "../../shared-lib2/typesHomePage";
import axios, { AxiosError } from "axios";

export const getEvents = async () => {
  try {
    const axiosInstance = axios.create({
      baseURL: BASE_URL_API,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await axiosInstance.get<ResponseDTO<EventHomeCard[]>>(
      "/mockEvents.json"
    );

    return response.data;
  } catch (error) {
    const errorResponse: ResponseDTO<EventHomeCard[]> = {
      message:
        error instanceof AxiosError
          ? error.message
          : "Erro ao carregar eventos",
      status: error instanceof AxiosError ? error.response?.status ?? 500 : 500,
      dataType: "EVENTOS",
      data: [],
    };

    return errorResponse;
  }
};
