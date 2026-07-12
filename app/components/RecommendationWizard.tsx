"use client";

import { useMemo, useState } from "react";
import { formatPrice, products } from "../data/menu";
import { Answers, recommend } from "../lib/recommendation";

const steps = [
  {
    key: "moment" as const,
    question: "Qual é a sua vontade agora?",
    help: "Começamos pelo tipo de experiência que você procura.",
    options: [
      { value: "pizza", icon: "🍕", title: "Quero pizza", text: "Uma grande para dividir" },
      { value: "lanche", icon: "🍔", title: "Quero um lanche", text: "Burger ou beirute caprichado" },
      { value: "leve", icon: "🥣", title: "Algo mais leve", text: "Sem exagerar na fome" },
    ],
  },
  {
    key: "preference" as const,
    question: "Qual sabor combina com você?",
    help: "Não precisa saber o nome do produto. Só escolha a sua vibe.",
    options: [
      { value: "cremoso", icon: "🧀", title: "Bem cremoso", text: "Queijo e Catupiry" },
      { value: "carne", icon: "🥓", title: "Carnudo e intenso", text: "Bacon, calabresa ou pernil" },
      { value: "tradicional", icon: "✨", title: "Clássico", text: "Sem erro, sem surpresa" },
      { value: "leve", icon: "🌿", title: "Leve e fresco", text: "Mais equilíbrio no prato" },
    ],
  },
  {
    key: "size" as const,
    question: "Para quantas pessoas?",
    help: "Isso ajuda a indicar o tamanho e o melhor custo-benefício.",
    options: [
      { value: "individual", icon: "🙂", title: "Só para mim", text: "Uma porção individual" },
      { value: "familia", icon: "👨‍👩‍👧‍👦", title: "Para dividir", text: "Duas ou mais pessoas" },
      { value: "custo", icon: "💛", title: "Quero economizar", text: "O melhor pelo menor preço" },
    ],
  },
];

export function RecommendationWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const results = useMemo(() => recommend(products, answers), [answers]);
  const finished = step === steps.length;

  function choose(key: keyof Answers, value: string) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setStep((current) => current + 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  return (
    <div className="wizard shell">
      <div className="wizard-top">
        <div className="assistant-avatar">KB<span>✦</span></div>
        <div><strong>Assistente Kid Blanco</strong><small><i /> pronto para ajudar</small></div>
        {!finished && <span className="step-label">Pergunta {step + 1} de {steps.length}</span>}
      </div>

      {!finished ? (
        <div className="wizard-body" key={step}>
          <div className="progress" aria-hidden="true"><span style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
          <h3>{steps[step].question}</h3>
          <p>{steps[step].help}</p>
          <div className="option-grid">
            {steps[step].options.map((option) => (
              <button key={option.value} onClick={() => choose(steps[step].key, option.value)}>
                <span>{option.icon}</span>
                <strong>{option.title}</strong>
                <small>{option.text}</small>
              </button>
            ))}
          </div>
          {step > 0 && <button className="back-button" onClick={() => setStep(step - 1)}>← Voltar</button>}
        </div>
      ) : (
        <div className="results">
          <span className="result-kicker">✦ Encontramos quatro boas escolhas</span>
          <h3>Mais variedade para você decidir.</h3>
          <p>A primeira é a melhor combinação. As outras mostram sabores e faixas de preço diferentes.</p>
          <div className="result-grid">
            {results.map((product, index) => {
              const message = encodeURIComponent(`Olá! O assistente da Kid Blanco me recomendou ${product.name} (${formatPrice(product.price)}). Gostaria de fazer este pedido.`);
              return (
                <article className={index === 0 ? "best-result" : ""} key={product.name}>
                  {index === 0 && <span className="best-label">Melhor combinação</span>}
                  <div className="result-emoji">{product.emoji}</div>
                  <div>
                    <small>{product.category === "pizza" ? "Pizza grande • 8 fatias" : "Pedido individual"}</small>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <blockquote>{product.reason}</blockquote>
                    <div className="result-action">
                      <strong>{formatPrice(product.price)}</strong>
                      <a href={`https://wa.me/5511994158293?text=${message}`} target="_blank" rel="noreferrer">Quero este →</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <button className="restart-button" onClick={restart}>↻ Refazer escolhas</button>
          <small className="price-note">Valores demonstrativos extraídos do cardápio público e sujeitos a confirmação.</small>
        </div>
      )}
    </div>
  );
}
