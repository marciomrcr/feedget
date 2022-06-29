import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg";
import ideiaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideiaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de um pensamento",
    },
  },
};

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-xl w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep OnFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <p>Oi Jesus</p>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ By{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/m%C3%A1rcio-mrcr/"
          target="_blank"
        >
          Márcio Rodrigues
        </a>
      </footer>
    </div>
  );
}
