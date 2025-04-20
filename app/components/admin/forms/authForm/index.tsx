"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Api from "@/app/api";
import Cookies from "js-cookie";
interface FormData {
    username: string;
    password: string;
}
interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any;
    token?: string;
}

export default function Auth() {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<ApiResponse | null>(null);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitResult(null);

        try {
            const api = new Api();
            console.log({
                username: formData.username,
                password: formData.password,
            })
            const response: ApiResponse = await api.post("auth/login", {
                username: formData.username,
                password: formData.password,
            });
            console.log(response)
            if (response.success) {
                Cookies.set('auth', response.token || "")
                router.push('/admin');
            } else {
                setSubmitResult(response);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitResult({
                success: false,
                message: 'Что-то пошло не так',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Login">Логин</label>
                    <input
                        type="text"
                        id="Login"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        placeholder="Логин"
                    />
                </div>
                <div>
                    <label htmlFor="Password">Пароль</label>
                    <input
                        type="password"
                        id="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Пароль"
                    />
                </div>
                <div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Отправить'}
                    </button>
                </div>
            </form>

            {submitResult && (
                <div className={`mt-4 p-3 rounded-md ${submitResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitResult.message || (submitResult.success ? 'Авторизация успешна' : 'Ошибка')}
                </div>
            )}
        </div>
    );
}
