



import qs from "qs";



import { Any } from "@react-spring/types";
import axios from "axios";






export class ApiService {

    public async getPokemon() {

        await axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
            return res.data;

        })
            .catch((error) => {
                if (error.status && (error.status < 200 || error.status >= 300)) {
                    return [];
                }
            });

    }
    public async searchPokemon(q: string): Promise<any> {

        const query = qs.stringify(
            {
                filters: {
                    $or: [
                        {
                            name: {
                                $containsi: q,
                            },
                        },
                    ],
                },
            },
            {
                encodeValuesOnly: true,
            }
        );



        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`, {
            method: "GET",
            // // mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            },

        });

        if (res.statusText === 'OK') {
            const result: any = res && await res.json();

            return result;
        } else {
            return {} as any;
        }


    }
}


