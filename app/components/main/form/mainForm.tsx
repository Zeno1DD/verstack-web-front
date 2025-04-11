"use client"
import { useState } from 'react';
import Api from "@/app/api";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
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
        phone: '',
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
                phone: '',
            });
            setSubmitResult({
                success: true,
                message: 'Все чики пуки, все записали',
            });
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitResult({
                success: false,
                message: 'Хз но че то пошло не так... (чекни консоль что-ли)',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-cyan-100 text-black rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Заявка на получение леденца</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        Имя
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                        Номер телефона
                    </label>
                    <input
                        type="tel"
                        id="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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