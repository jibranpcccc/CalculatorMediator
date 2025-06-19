import { Route, List, Gavel } from "lucide-react";
import type { SiloData } from "@/types/pension";
import React from "react";

export const siloContent: SiloData[] = [
  {
    title: "Planificarea Pensiei",
    description: "Ghiduri complete pentru planificarea strategică a pensiei și evitarea greșelilor costisitoare.",
    icon: React.createElement(Route),
    items: [
      "Ghid complet pentru planificare",
      "Top 5 greșeli de evitat",
      "Strategii de investiții",
      "Pilonul II vs. Pilonul III"
    ],
    href: "/planificarea-pensiei",
    color: "from-primary/5 to-primary/10"
  },
  {
    title: "Tipuri de Pensii",
    description: "Înțelege toate tipurile de pensii disponibile și alege strategia potrivită pentru tine.",
    icon: React.createElement(List),
    items: [
      "Pensia pentru limită de vârstă",
      "Pensia anticipată parțială",
      "Pensia de urmaș",
      "Pensia de invaliditate"
    ],
    href: "/tipuri-de-pensii",
    color: "from-green-50 to-green-100"
  },
  {
    title: "Legislație & Resurse",
    description: "Rămâi la curent cu legislația actuală și înțelege pe deplin drepturile și obligațiile tale.",
    icon: React.createElement(Gavel),
    items: [
      "Legea pensiilor 2025",
      "Vârsta de pensionare",
      "Stagiul de cotizare",
      "Indexarea pensiilor"
    ],
    href: "/legislatie-si-resurse",
    color: "from-amber-50 to-amber-100"
  }
];
