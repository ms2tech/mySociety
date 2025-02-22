import { useRouter } from "next/router";
// import { useEffect } from "react";
import Lottie from "lottie-react";
import processingAnimation from "../../public/still-processing.json"; // ✅ Processing animation file
import "../../styles/StillProcessing.module.css";


export default function StillProcessing() {
  const router = useRouter();

  return (
    <div className="container">
       <h1 className="title">Still Processing</h1>
      {/* ⏳ Animated Processing Icon */}
      <Lottie animationData={processingAnimation} loop={true} className="processing-animation" />

     
      {/* <p className="message">We are currently processing your payment. This may take a few minutes.</p> */}

      {/* 🔄 Refresh / Check Status Button */}
      {/* <button className="refresh-button" onClick={() => router.reload()}>
        Refresh Status
      </button> */}
    </div>
  );
}
