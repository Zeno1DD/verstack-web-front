"use client"
import { useState } from 'react';
import Api from "@/app/api";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
}

interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any;
}



export default function MainForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<ApiResponse | null>(null);

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
            const response: ApiResponse = await api.post("forms", {
                form_id: "67f4cd4c35aa16b005ac708d",
                content: {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                }
            });

            setSubmitResult(response);

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
            });
            setSubmitResult({
                success: true,
                message: 'Заявка отправлена!',
            });
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
        <div className="w-[50%] mx-auto p-10 bg-white rounded-[50px] shadow-md">
            <h2 className="text-3xl font-extrabold mb-6 ">Связаться с нами</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium">
                        Ваше Имя
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='Иван'
                        required
                        className="mt-1 block w-full px-5 py-3 border border-[#D4D4D4] bg-[#F0F0F0] rounded-[50px] shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Фамилия
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder='Иванов'
                        className="mt-1 block w-full px-5 py-3 border border-[#D4D4D4] bg-[#F0F0F0] rounded-[50px] shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder='email@gmail.com'
                        className="mt-1 block w-full px-5 py-3 border border-[#D4D4D4] bg-[#F0F0F0] rounded-[50px] shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`cursor-pointer w-full flex justify-center py-3 px-4 border border-transparent font-extrabold rounded-[50px] shadow-sm text-xl text-white bg-accent hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Отправка...' : 'Отправить'}
                    </button>
                </div>
            </form>

            {submitResult && (
                <div className={`mt-4 p-3 rounded-md ${submitResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitResult.message || (submitResult.success ? 'Форма успешно отправлена!' : 'Ошибка при отправке формы')}
                </div>
            )}
        </div>
    );
}