import React from "react";
import { NavLink } from "react-router-dom";
import { LottieLoader } from "@mondra/ui-components";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center space-y-2">
      <div>
        <LottieLoader lottieType="butterflyLottie" />
        <p className="text-primary-500 font-medium">Wait for some fun.</p>
        <NavLink to="/users" className="text-indigo-500 font-semibold">
          Have little bit of fun
        </NavLink>
      </div>
    </div>
  );
}
