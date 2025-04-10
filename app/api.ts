type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestOptions = {
    method: HttpMethod;
    headers: Record<string, string>;
    body?: string;
};

export default class Api {
    private readonly imageBasePath: string = "http://localhost:3300/media";
    private readonly basePath: string = "http://localhost:3300/";

    private async request<T>(endpoint: string, method: HttpMethod, body?: any, params?: string): Promise<T> {
        const url = new URL(`${this.basePath}${endpoint}`);

        if (params && method === 'GET') {
            Object.entries(new URLSearchParams(params)).forEach(([key, value]) => {
                url.searchParams.append(key, value);
            });
        }

        console.log("fetch: " + url.toString());

        const options: RequestOptions = {
            method,
            headers: { 'Content-Type': 'application/json' },
        };

        if (method !== 'GET' && body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url.toString(), options);

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            console.error('API Error:', errorData);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json() as Promise<T>;
    }

    public async get<T>(endpoint: string, params: string = ""): Promise<T> {
        return this.request<T>(endpoint, 'GET', undefined, params);
    }

    public async post<T>(endpoint: string, body: any): Promise<T> {
        return this.request<T>(endpoint, 'POST', body);
    }

    public async put<T>(endpoint: string, body: any): Promise<T> {
        return this.request<T>(endpoint, 'PUT', body);
    }

    public async delete<T>(endpoint: string, body?: any): Promise<T> {
        return this.request<T>(endpoint, 'DELETE', body);
    }
}