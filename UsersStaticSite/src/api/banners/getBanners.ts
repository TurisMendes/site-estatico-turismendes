import { BASE_URL_API } from "../../globalConstants";
import { HomeBanner, ResponseDTO } from "../../shared-lib2/typesHomePage";
import axios, { AxiosError } from "axios";

export const getBanners = async (): Promise<ResponseDTO<HomeBanner[]>> => {
  try {
    const axiosInstance = axios.create({
      baseURL: BASE_URL_API,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await axiosInstance.get<ResponseDTO<HomeBanner[]>>(
      "/mockBanners.json"
    );

    return response.data;

  } catch (error) {
 const errorResponse: ResponseDTO<HomeBanner[]> = {
      message:
        error instanceof AxiosError
          ? error.message
          : "Erro ao carregar banners",
      status: error instanceof AxiosError ? error.response?.status ?? 500 : 500,
      dataType: "BANNERS",
      data: [],
    };

    return errorResponse
  }
};
