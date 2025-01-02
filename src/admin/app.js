// @ts-ignore
import MenuLogo from '../extensions/logo_round.png';
// @ts-ignore
import AuthLogo from "../extensions/logo.png";

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};


const bootstrap = (app) => {
  console.log(app);
};

export default {
  config:{
    locales:["en"],
    auth:{
      logo: AuthLogo,
    },
    menu:{
      logo:MenuLogo,
    }

  },
  bootstrap,
};
