import { useRouter } from "next/router";
// import { useEffect } from "react";
import Lottie from "lottie-react";
import successAnimation from "../../public/success.json"; // ✅ Animation file
import "../../styles/paymentSuccess.module.css";


export default function PaymentSuccess() {
  const router = useRouter();

//   useEffect(() => {
//     // Auto-redirect to homepage after 5 seconds
//     const timer = setTimeout(() => {
//       router.push("/");
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div className="container">
      {/* ✅ Animated Success Icon */}
      <Lottie animationData={successAnimation} loop={false} className="success-animation" />

      <h1 className="title">Payment Successful!</h1>
      {/* <p className="message">Thank you for your payment. Your transaction has been completed.</p> */}

      {/* ✅ Auto Redirect Message */}
      {/* <p className="redirect-text">Redirecting you in 5 seconds...</p> */}

      {/* ✅ Manual Redirect Button */}
      {/* <button className="home-button" onClick={() => router.push("/")}>
        Go to Home
      </button> */}
    </div>
  );
}
