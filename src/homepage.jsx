import "./App.css";
import NormalButton from "./components/normal-button";
import OrangeButton from "./components/orange-button";
import BgOrangeTop from "./components/bg-orange-top";
const mainLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="208"
    height="72"
    viewBox="0 0 208 72"
    fill="none"
  >
    <path
      d="M124.73 26.0474C130.551 26.0474 133.73 31.0292 133.73 35.9963C133.73 40.9672 130.547 45.9489 124.73 45.9489C118.912 45.9489 115.416 40.9672 115.416 35.9963C115.416 31.0292 118.912 26.0474 124.73 26.0474ZM35.6825 26.0474C29.8686 26.0474 26.3686 31.0292 26.3686 35.9963C26.3686 40.9672 29.8686 45.9489 35.6825 45.9489C41.5 45.9489 44.6825 40.9672 44.6825 35.9963C44.6825 31.0292 41.5 26.0474 35.6825 26.0474ZM207.639 22.5V72H22.5C10.073 72 0 61.927 0 49.5037V0H134.047V20.4088C131.398 18.8759 128.325 18 125.047 18C115.106 18 107.047 26.0584 107.047 36C107.047 45.9416 115.106 54.0037 125.047 54.0037C129.102 54.0037 132.843 52.6642 135.85 50.4015C137.493 52.5876 140.106 54.0037 143.051 54.0037V0H185.139C197.566 0 207.639 10.073 207.639 22.5ZM54.0037 18C51.0584 18 48.4453 19.4124 46.8029 21.5985C43.792 19.3394 40.0511 18 36 18C26.0584 18 18 26.0584 18 36C18 45.9416 26.0584 54.0037 36 54.0037C40.0511 54.0037 43.792 52.6642 46.8029 50.4015C47.0584 50.7409 47.3358 51.062 47.6387 51.365C49.2664 52.9964 51.5182 54.0037 54.0037 54.0037V18ZM99.0037 18.1569H90V36.1569C90 41.1277 86.8175 46.1095 81 46.1095C75.1825 46.1095 71.6861 41.1277 71.6861 36.1569V26.5255C71.6861 24.646 71.1314 22.8978 70.1788 21.4599C68.6168 19.0839 65.9854 17.5255 63.0037 17.5255V36.1606C63.0037 46.1058 71.062 54.1642 81.0037 54.1642C85.0547 54.1642 88.7993 52.8248 91.8066 50.562C93.4453 52.7482 96.062 54.1642 99.0073 54.1642V18.1569H99.0037ZM189.639 36.0037C189.639 26.0584 181.58 18 171.639 18C167.588 18 163.843 19.3394 160.836 21.6022C159.197 19.4161 156.58 18 153.635 18V54.0037H162.635V36.0037C162.635 31.0328 165.818 26.0511 171.635 26.0511C177.453 26.0511 180.949 31.0328 180.949 36.0037V45.635C180.949 47.5146 181.504 49.2628 182.456 50.7007C184.018 53.0766 186.65 54.635 189.631 54.635V36.0037H189.639Z"
      fill="#26262E"
    />
  </svg>
);
const googleLogo = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="google-logo"
      d="M21.0865 9.03098C21.2177 9.7339 21.2891 10.4688 21.2891 11.2357C21.2891 17.2345 17.2743 21.5 11.2104 21.5C9.83145 21.5004 8.46588 21.2291 7.19177 20.7016C5.91767 20.1741 4.75999 19.4007 3.78489 18.4256C2.80979 17.4505 2.03638 16.2928 1.50886 15.0187C0.981333 13.7446 0.710029 12.379 0.71045 11C0.710029 9.621 0.981333 8.25543 1.50886 6.98133C2.03638 5.70722 2.80979 4.54954 3.78489 3.57444C4.75999 2.59934 5.91767 1.82593 7.19177 1.29841C8.46588 0.770884 9.83145 0.49958 11.2104 0.5C14.0456 0.5 16.4146 1.54317 18.2321 3.237L15.2722 6.19692V6.18946C14.1704 5.13988 12.772 4.60123 11.2104 4.60123C7.746 4.60123 4.93008 7.52809 4.93008 10.9936C4.93008 14.458 7.746 17.3913 11.2104 17.3913C14.3538 17.3913 16.4935 15.594 16.933 13.1258H11.2104V9.03098H21.0875H21.0865Z"
      fill="#26262E"
    />
  </svg>
);

function HomePage() {
  return (
    <div className="bg-cover bg-no-repeat w-screen h-screen sm:max-w-3xl sm:max-h-[1200px] m-auto bg-[url('https://s3-alpha-sig.figma.com/img/aa2f/36c0/a746f7d5f282311ee9a5d9aba5746e99?Expires=1692576000&Signature=nA7E5jX4BYugZSz-pV2IXUo2gGqYqG-OIFqCzG09fapjw~4WZYG-e~bUTqLZyUip4QNZrOauH9pwpA1gT9Ki7iWMbZ8tRmU0AKAeqhf2D1NFAqZK2TGqhby18AFIQ~6u5DIszDnwZ2KKgjiSREdM7Z-d4gS87qhluuSIQH7aNJCNRxwjOuNQvZ3jmhAvFwlsXeoK~-OmmG70fsuviXU3WQk-heXllfclg0S899WSbm4l7IxmZZ61h-ibS1pc-Zk1Ipi8Wc2eESXyNAb2KjjJEqApQ7T~7r~2ip~btqVhxgU6awmcw6EVl4Q52D1QqrGxzvHYtSewI39AKRWIoaTllw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]">
      <div className="absolute bg-gradient-to-t from-white  bg- from-15% to-transparent h-screen w-screen z-10">
        <BgOrangeTop />
        <div className="mx-auto w-[208px]  mt-[40%] ">{mainLogo}</div>
        <span className="mx-auto w-[250px] block text-center pt-6 font-semibold text-3xl">
          Musica a medida.
        </span>

        <div className="absolute bottom-[10%] left-0 right-0 ">
          <OrangeButton bgcolor={"bg-amber-500"} text={"Registrate Gratis"} />
          <NormalButton img={googleLogo} text={"Continuar Con Google"} />
          <NormalButton text={"Continuar con Apple"} />
          <a
            className="mx-auto w-[90%] block text-center text-2xl pt-5"
            href=""
          >
            Iniciar Sesion
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

//  postgres://JestyUY:@ep-summer-breeze-77183421.us-east-2.aws.neon.tech/neondb
