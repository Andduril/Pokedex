// eslint-disable-next-line
export interface APIResourceURL<T> extends String {};

export interface APIResource<T> {
    url: APIResourceURL<T>;
}

export interface NamedAPIResource<T> {
    name: string;
    url: APIResourceURL<T>;
}

export interface APIResourceList<T> {
    count: number;
    next: APIResourceURL<APIResourceList<T>> | null;
    previous: APIResourceURL<APIResourceList<T>> | null;
    results: APIResource<T>[];
}

export interface NamedAPIResourceList<T> {
    count: number;
    next: APIResourceURL<NamedAPIResourceList<T>> | null;
    previous: APIResourceURL<NamedAPIResourceList<T>> | null;
    results: NamedAPIResource<T>[];
}

export const api = 'https://pokeapi.co/api/v2/';