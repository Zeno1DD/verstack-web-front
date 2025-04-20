import Api from "@/app/api";
import type { Metadata } from "next";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
interface ApiResponse {
    success: boolean;
}

export const metadata: Metadata = {
    title: "Verstack Admin Panel",
    description: "Made by verstack-web",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies()
    const auth = cookieStore.get('auth')
    if (!auth) return (redirect('/auth'));
    const jwt = auth.value;
    console.log(jwt)
    const response: ApiResponse = await new Api().post('auth/is_login', {jwt:jwt});
    if (!response.success) {
        redirect('/auth');
    }
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
            {children}
        </div>
    );
}
