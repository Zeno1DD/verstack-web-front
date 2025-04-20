"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Api from "@/app/api";

interface FormData {
  login: string;
  password: string;
}
interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export default function Auth() {
  const [formData, setFormData] = useState<FormData>({
    login: '',
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
      const response: ApiResponse = await api.post("auth/login", {
        form_id: "67f4cd4c35aa16b005ac708df",
        content: {
          login: formData.login,
          password: formData.password,
        },
      });

      if (response.success) {
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
            name="login"
            value={formData.login}
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
