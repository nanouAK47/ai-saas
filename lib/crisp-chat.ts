"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("595d6151-8ea1-446a-9c06-f25f0f1411eb");
  }, []);

  return null;
};

export default CrispChat;
