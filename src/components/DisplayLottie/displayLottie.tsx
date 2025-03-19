import { Suspense } from "react";
import Lottie from "lottie-react";

interface DisplayLottieProps {
  animationData: object; // Ensures it's a valid Lottie JSON object
}

export function DisplayLottie({ animationData }: DisplayLottieProps) {
  const options = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <Suspense fallback={<></>}>
      <Lottie animationData={options.animationData} loop={options.loop} />
    </Suspense>
  );
}
