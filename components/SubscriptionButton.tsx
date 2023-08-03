"use client";

import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { Button } from "./ui/button";

interface SubscriptionButtonProps {
  isPro: boolean;
}

const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Oops... il y a eu une erreur");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      disabled={loading}
      variant={isPro ? "default" : "premium"}
      onClick={onClick}
    >
      {isPro ? "Gérer l'abonnement" : "Passer au premium"}
      {!isPro && <Zap className="w-4 h-4 fill-white ml-2" />}
    </Button>
  );
};

export default SubscriptionButton;
