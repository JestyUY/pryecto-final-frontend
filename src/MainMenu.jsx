import Footer from "./components/Footer";
import BgOrangeTop from "./components/bg-orange-top";

const clock = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      d="M12.2222 10.5111L15.2778 13.5667C15.5019 13.7907 15.6139 14.0759 15.6139 14.4222C15.6139 14.7685 15.5019 15.0537 15.2778 15.2778C15.0537 15.5019 14.7685 15.6139 14.4222 15.6139C14.0759 15.6139 13.7907 15.5019 13.5667 15.2778L10.1444 11.8556C10.0222 11.7333 9.93056 11.5956 9.86944 11.4424C9.80833 11.2901 9.77778 11.1324 9.77778 10.9694V6.11111C9.77778 5.76481 9.89511 5.47433 10.1298 5.23967C10.3636 5.00582 10.6537 4.88889 11 4.88889C11.3463 4.88889 11.6368 5.00582 11.8714 5.23967C12.1053 5.47433 12.2222 5.76481 12.2222 6.11111V10.5111ZM11 22C8.53518 22 6.325 21.2716 4.36944 19.8147C2.41389 18.3586 1.1 16.4593 0.427778 14.1167C0.325926 13.75 0.361778 13.4037 0.535333 13.0778C0.708074 12.7519 0.977778 12.5481 1.34444 12.4667C1.69074 12.3852 2.00159 12.4614 2.277 12.6952C2.55159 12.9299 2.73981 13.2204 2.84167 13.5667C3.3713 15.3593 4.39511 16.8056 5.91311 17.9056C7.4303 19.0056 9.12593 19.5556 11 19.5556C13.3833 19.5556 15.4049 18.7253 17.0647 17.0647C18.7253 15.4049 19.5556 13.3833 19.5556 11C19.5556 8.61667 18.7253 6.5947 17.0647 4.93411C15.4049 3.27433 13.3833 2.44444 11 2.44444C9.59444 2.44444 8.28055 2.77037 7.05833 3.42222C5.83611 4.07407 4.80741 4.97037 3.97222 6.11111H6.11111C6.45741 6.11111 6.74789 6.22804 6.98256 6.46189C7.21641 6.69656 7.33333 6.98704 7.33333 7.33333C7.33333 7.67963 7.21641 7.9697 6.98256 8.20356C6.74789 8.43822 6.45741 8.55556 6.11111 8.55556H1.22222C0.875926 8.55556 0.585852 8.43822 0.352 8.20356C0.117333 7.9697 0 7.67963 0 7.33333V2.44444C0 2.09815 0.117333 1.80767 0.352 1.573C0.585852 1.33915 0.875926 1.22222 1.22222 1.22222C1.56852 1.22222 1.859 1.33915 2.09367 1.573C2.32752 1.80767 2.44444 2.09815 2.44444 2.44444V4.09444C3.48333 2.79074 4.75159 1.78241 6.24922 1.06944C7.74604 0.356481 9.32963 0 11 0C12.5278 0 13.959 0.290074 15.2937 0.870222C16.6275 1.45118 17.7886 2.23544 18.777 3.223C19.7646 4.21137 20.5488 5.37248 21.1298 6.70633C21.7099 8.041 22 9.47222 22 11C22 12.5278 21.7099 13.9586 21.1298 15.2924C20.5488 16.6271 19.7646 17.7882 18.777 18.7758C17.7886 19.7641 16.6275 20.5488 15.2937 21.1298C13.959 21.7099 12.5278 22 11 22Z"
      fill="#26262E"
    />
  </svg>
);
const bell = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M8.13333 18.4706C8.13333 23.1765 15.0333 23.1765 15.0333 18.4706M11.5833 2C7.79907 2 5.06667 4.35294 5.06667 7.4902V12.1961L2 17.6863H21.1667L18.1 12.1961V7.4902C18.1 4.35294 16.3121 2 11.5833 2Z"
      stroke="#26262E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="18" cy="5" r="4" fill="#FF8E0A" />
  </svg>
);

function MainMenu() {
  return (
    <main className="w-screen h-screen max-w-md max-h-min m-auto relative ">
      <BgOrangeTop />
      <nav className="flex gap-4 px-6 pt-12 absolute w-full mx-auto">
        <span className="grow font-medium text-2xl">Music Now</span>
        <button>{clock}</button>
        <button>{bell}</button>
      </nav>
      <section className="pt-[30%]  w-[90%] mx-auto  ">
        <article className="flex justify-between border mx-auto rounded-bl-3xl rounded-tr-3xl shadow-md ">
          <div className="bg-[url('C:\Users\Martin\Desktop\senpai-bootcamp\pryecto-final-frontend\src\assets\Images\logoCupidoMusical.jpg')] bg-cover w-[100px] h-[100px] rounded-bl-3xl"></div>
          <div className="w-[70%] ">
            <h3 className="font-medium pt-1">Cupido Musical</h3>
            <p>
              Tus artistas favoritos nunca van a dejarte con el corazon roto.
            </p>
          </div>
        </article>
        <article className="flex justify-between border mx-auto rounded-bl-3xl rounded-tr-3xl shadow-md mt-3">
          <div className="bg-[url('C:\Users\Martin\Desktop\senpai-bootcamp\pryecto-final-frontend\src\assets\Images\logoMusicaC.jpg')] bg-cover w-[100px] h-[100px] rounded-bl-3xl"></div>
          <div className="w-[70%] ">
            <h3 className="font-medium pt-1">Musica Contextual</h3>
            <p>Creamos la playlist perfecta para cualquier situacion.</p>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}
export default MainMenu;
