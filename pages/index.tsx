import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Form from "@/components/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-background h-screen z-0 overflow-y-scroll scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-header-color/40">
      <Head>
        <title>WH Group | Registration Form</title>
      </Head>

      {/* Header - registration*/}
      <Header />

      {/* Registration Form */}
      <Form />
    </div>
  );
}
