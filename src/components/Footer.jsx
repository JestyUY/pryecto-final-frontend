import { useNavigate } from "react-router";

const home = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <g opacity="0.4">
      <path
        d="M46.585 23.155L27.1802 3.76032L25.8795 2.45963C25.5832 2.16523 25.1824 2 24.7647 2C24.3469 2 23.9461 2.16523 23.6498 2.45963L2.94433 23.155C2.64066 23.4575 2.40067 23.8178 2.23851 24.2145C2.07635 24.6113 1.99533 25.0365 2.00021 25.4651C2.0203 27.2329 3.49172 28.644 5.25945 28.644H7.39377V45.0005H42.1355V28.644H44.3151C45.1738 28.644 45.9823 28.3075 46.59 27.6999C46.8892 27.4016 47.1263 27.047 47.2875 26.6565C47.4487 26.266 47.5308 25.8474 47.5291 25.425C47.5291 24.5712 47.1926 23.7627 46.585 23.155ZM27.5769 41.3847H21.9524V31.1399H27.5769V41.3847ZM38.5197 25.0282V41.3847H30.791V29.9347C30.791 28.8248 29.892 27.9259 28.7822 27.9259H20.7471C19.6373 27.9259 18.7383 28.8248 18.7383 29.9347V41.3847H11.0096V25.0282H6.1885L24.7697 6.46212L25.9297 7.62219L43.3458 25.0282H38.5197Z"
        fill="#26262E"
      />
    </g>
  </svg>
);
const search = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <g opacity="0.4">
      <path
        d="M43.4835 43.4835L34.1612 34.1446M34.1612 34.1446C37.4686 30.8328 39.3273 26.3444 39.3273 21.6637M34.1612 34.1446L34.1575 34.1492M39.3273 21.6637C39.3273 16.979 37.4663 12.4861 34.1537 9.17356C30.8412 5.86099 26.3483 4 21.6637 4C16.979 4 12.4861 5.86099 9.17356 9.17356C5.86099 12.4861 4 16.979 4 21.6637C4 26.3483 5.86099 30.8412 9.17356 34.1537C12.4861 37.4663 16.979 39.3273 21.6637 39.3273C26.3483 39.3273 30.8412 37.4663 34.1537 34.1537L34.1575 34.1492M39.3273 21.6637C39.3273 26.3464 37.4675 30.837 34.1575 34.1492"
        stroke="#26262E"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
  </svg>
);
const profile = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <g opacity="0.4">
      <path
        d="M31.4276 11.8099C31.4276 13.8812 30.6048 15.8677 29.1402 17.3323C27.6755 18.797 25.689 19.6198 23.6177 19.6198C21.5464 19.6198 19.5599 18.797 18.0953 17.3323C16.6307 15.8677 15.8078 13.8812 15.8078 11.8099C15.8078 9.73859 16.6307 7.75211 18.0953 6.28747C19.5599 4.82283 21.5464 4 23.6177 4C25.689 4 27.6755 4.82283 29.1402 6.28747C30.6048 7.75211 31.4276 9.73859 31.4276 11.8099V11.8099ZM8 41.2126C8.06693 37.1147 9.74179 33.2073 12.6634 30.333C15.585 27.4587 19.5193 25.8479 23.6177 25.8479C27.7162 25.8479 31.6504 27.4587 34.5721 30.333C37.4937 33.2073 39.1685 37.1147 39.2355 41.2126C34.3358 43.4593 29.0079 44.6188 23.6177 44.6115C18.0446 44.6115 12.7547 43.3953 8 41.2126Z"
        stroke="#26262E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
const friends = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="51"
    height="48"
    viewBox="0 0 51 48"
    fill="none"
  >
    <g opacity="0.4">
      <path
        d="M39.6233 39.2437C42.6495 39.4874 45.694 39.1033 48.5604 38.116C48.6698 36.7868 48.3951 35.4542 47.768 34.2723C47.141 33.0905 46.1872 32.1078 45.0171 31.4379C43.847 30.768 42.5083 30.4382 41.1559 30.4868C39.8036 30.5354 38.4928 30.9603 37.3752 31.7124M39.6209 39.2414L39.6233 39.3144C39.6233 39.8441 39.5946 40.3667 39.5349 40.8823C35.1997 43.3334 30.2874 44.6194 25.2895 44.6115C20.1054 44.6115 15.2391 43.2554 11.0441 40.8823C10.9826 40.3375 10.9531 39.7896 10.9557 39.2414M39.6233 39.2414C39.614 36.5731 38.8342 33.9625 37.3752 31.7147C36.0802 29.7131 34.2938 28.0656 32.1812 26.9249C30.0687 25.7842 27.6983 25.187 25.2895 25.1886C22.881 25.1874 20.5111 25.7848 18.399 26.9255C16.287 28.0662 14.5009 29.7134 13.2061 31.7147C12.0885 30.9633 10.778 30.539 9.42606 30.4908C8.07409 30.4426 6.73588 30.7725 5.56617 31.4423C4.39645 32.1121 3.443 33.0945 2.81605 34.2759C2.18911 35.4573 1.91427 36.7895 2.02333 38.1184C4.88748 39.1112 7.93274 39.4939 10.9581 39.2414C10.9666 36.5733 11.7455 33.9628 13.2037 31.7147M32.4564 11.0629C32.4564 12.9361 31.7013 14.7325 30.3572 16.0571C29.0132 17.3816 27.1902 18.1257 25.2895 18.1257C23.3887 18.1257 21.5658 17.3816 20.2217 16.0571C18.8776 14.7325 18.1226 12.9361 18.1226 11.0629C18.1226 9.18968 18.8776 7.39321 20.2217 6.06867C21.5658 4.74412 23.3887 4 25.2895 4C27.1902 4 29.0132 4.74412 30.3572 6.06867C31.7013 7.39321 32.4564 9.18968 32.4564 11.0629ZM46.7901 18.1257C46.7901 18.8214 46.6511 19.5102 46.381 20.1529C46.1109 20.7956 45.7149 21.3795 45.2158 21.8714C44.7167 22.3633 44.1241 22.7535 43.472 23.0197C42.8198 23.2859 42.1209 23.4229 41.415 23.4229C40.7091 23.4229 40.0101 23.2859 39.358 23.0197C38.7058 22.7535 38.1133 22.3633 37.6142 21.8714C37.115 21.3795 36.7191 20.7956 36.449 20.1529C36.1788 19.5102 36.0398 18.8214 36.0398 18.1257C36.0398 16.7209 36.6061 15.3735 37.6142 14.3801C38.6222 13.3867 39.9894 12.8286 41.415 12.8286C42.8406 12.8286 44.2078 13.3867 45.2158 14.3801C46.2238 15.3735 46.7901 16.7209 46.7901 18.1257ZM14.5391 18.1257C14.5391 18.8214 14.4001 19.5102 14.13 20.1529C13.8598 20.7956 13.4639 21.3795 12.9648 21.8714C12.4656 22.3633 11.8731 22.7535 11.2209 23.0197C10.5688 23.2859 9.86982 23.4229 9.16394 23.4229C8.45807 23.4229 7.7591 23.2859 7.10696 23.0197C6.45481 22.7535 5.86225 22.3633 5.36312 21.8714C4.86399 21.3795 4.46806 20.7956 4.19793 20.1529C3.92781 19.5102 3.78877 18.8214 3.78877 18.1257C3.78877 16.7209 4.35508 15.3735 5.36312 14.3801C6.37116 13.3867 7.73836 12.8286 9.16394 12.8286C10.5895 12.8286 11.9567 13.3867 12.9648 14.3801C13.9728 15.3735 14.5391 16.7209 14.5391 18.1257Z"
        stroke="#26262E"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="flex fixed w-full max-w-md m-auto bottom-0 left-0 right-0 justify-around bg-slate-50  ">
      <button
        className="flex flex-col items-center"
        onClick={() => navigate("/menu")}
      >
        <span className="scale-75" onClick={() => navigate("/main")}>{home}</span>
        <span>Home</span>
      </button>
      <button className="flex flex-col" onClick={() => navigate("/search")}>
        <span className="scale-75">{search}</span> <span>Search</span>
      </button>
      <button className="flex flex-col">
        <span className="scale-75" onClick={() => navigate("/profile")}>{profile}</span>
        <span>Profile</span>
      </button>
      <button className="flex flex-col">
        <span className="scale-75">{friends}</span> <span>Amigos</span>
      </button>
    </footer>
  );
}

export default Footer;
