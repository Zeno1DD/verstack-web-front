"use client"
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";


export default function ButtonDeAuth() {
    const router = useRouter();
    const deAuth = () => {
        Cookies.remove('auth');
        router.push('/auth');
    }
    
    return (
        <button onClick={deAuth}>ВЫйти из аккаунта</button>
    )
}