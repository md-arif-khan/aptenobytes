import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
// import HomePage from "../components/Home/Home";

const HomePage = dynamic(() => import("../components/Home/Home"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}
