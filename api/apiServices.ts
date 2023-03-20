


import {
    IPosts,
    IAbouts,
    IOrder,
} from "./types";
import qs from "qs";
import { IAbout, Product as ProductType, Response, Order as OrderType } from "@/types";


import { Any } from "@react-spring/types";
import axios from "axios";

type ProductsResponce = Response<ProductType[]>;
type OrdersResponce = Response<OrderType[]>;

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL


export class ApiService {

    public async getPokemon() {
        console.log('details', api_url)
        await axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
            return res.data;

        })
            .catch((error) => {
                if (error.status && (error.status < 200 || error.status >= 300)) {
                    return [];
                }
            });

    }
}


