import { ReactNode} from 'react';
import Header from "@/app/components/main/header";
import Footer from "../components/main/footer";
interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {

  return (

    <div className="flex flex-col mt-2">
      <div className="bg-white rounded-[40px]">
        <Header />
      </div>
      {children}
      <Footer />
    </div>

  );
}