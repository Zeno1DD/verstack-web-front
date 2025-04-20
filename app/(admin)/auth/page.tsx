import Auth from "@comp/admin/forms/authForm/index";
import Api from "@/app/api";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



interface ApiResponse {
  success: boolean;
}




export default async function AuthPage() {
  const cookieStore = await cookies()
  const auth = cookieStore.get('auth')
  if (auth) {
    const jwt = auth.value;
    console.log(jwt)
    const response: ApiResponse = await new Api().post('auth/is_login', { jwt: jwt });
    if (response.success) {
      redirect('/admin');
    }
  }
  return (
    <div>
      <div>
        <h1>Вход в админку</h1>
        <Auth />
      </div>
    </div>
  );
}
