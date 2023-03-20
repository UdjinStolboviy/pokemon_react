


import {
    IPosts,
    IAbouts,
    IOrder,
} from "./types";
import qs from "qs";
import { IAbout, Product as ProductType, Response, Order as OrderType } from "@/types";


import { Any } from "@react-spring/types";

type ProductsResponce = Response<ProductType[]>;
type OrdersResponce = Response<OrderType[]>;

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL
const AAHv2b = "5871846479:AAHv2bidoQhKbpNXzF11O-gzBkTnRKe-Ud4"
const chat_id = ''

type FetchMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

interface IFetchHeaders {
    [key: string]: string;
}

const fetchWithTimeout = (
    url: RequestInfo,
    options: RequestInit,
    timeout: number
): Promise<any> => {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(console.log('Erorr', url, options)), timeout)
        ),
    ]);
};

export class ApiService {

    public sendNotification(details: any): Promise<any> {
        console.log('details', details)
        return this.makeRequest<any>(
            `https://api.telegram.org/bot${AAHv2b}/sendMessage`,
            "POST",
            details,
        );
    }




    private async makeRequest<TResponse>(
        url: string,
        method?: FetchMethod,
        requestBody?: object | FormData,
        headerOptions?: object
    ): Promise<TResponse> {
        const body = !(requestBody instanceof FormData)
            ? JSON.stringify(requestBody)
            : requestBody;
        const requestHeaders = headerOptions || {};

        const headers: IFetchHeaders = {
            accept: "application/json",
            ...requestHeaders,
        };

        if (!(requestBody instanceof FormData)) {
            headers["Content-Type"] = "application/json";
        }

        const response = await fetchWithTimeout(
            url,
            {
                method,
                headers,
                body,
            },
            15000
        );

        if (response.ok) {
            const resJson = await response.json();
            return resJson;
        } else {
            console.log("response", response);
            throw await response;
        }
    }
}


