import Navigator from "@components/Navigator";
import { Locale, getTranslation } from "@i18n";

interface HomeProps {
  params: { lang: Locale };
}

const Home: React.FC<HomeProps> = async ({ params: { lang } }) => {
  return <Navigator lang={lang} />;
};

export default Home;
