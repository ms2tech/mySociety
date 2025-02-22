import { useRouter } from "next/router";
// import { useEffect } from "react";
import Lottie from "lottie-react";
import failedAnimation from "../../public/payment-failed.json"; // ✅ Failure animation file
import "../../styles/PaymentFailed.module.css";

export default function PaymentFailed() {
  const router = useRouter();

//   useEffect(() => {
//     // Auto-redirect to payment page after 5 seconds
//     const timer = setTimeout(() => {
//       router.push("/checkout"); // Redirect back to checkout or payment page
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div className="container">
      {/* ❌ Animated Failure Icon */}
      <h1 className="title">Payment Failed</h1>

      <Lottie animationData={failedAnimation} loop={false} className="failed-animation" />

      {/* <p className="message">Unfortunately, your payment was not processed. Please try again.</p> */}

      {/* 🔄 Auto Redirect Message
      <p className="redirect-text">Redirecting you in 5 seconds...</p> */}

      {/* 🔄 Retry Payment Button */}
      {/* <button className="retry-button" onClick={() => router.push("/checkout")}>
        Try Again
      </button> */}
    </div>
  );
}
