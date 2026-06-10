import React, { useState, useEffect, useRef, useCallback } from 'react';
import QuestionCard from './QuestionCard';

interface Question {
  category: string;
  question: string;
}

interface RandomQuestionProps {
  cards: Question[];
}

const ANIMATION_DURATION_MS = 2000;

const pickRandom = <T,>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

const RandomQuestion: React.FC<RandomQuestionProps> = ({ cards }) => {
  const [randomCard, setRandomCard] = useState<Question | null>(null);
  const [displayCard, setDisplayCard] = useState<Question | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const rollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rollStartRef = useRef(0);

  const clearRollTimeout = () => {
    if (rollTimeoutRef.current) {
      clearTimeout(rollTimeoutRef.current);
      rollTimeoutRef.current = null;
    }
  };

  const pickFinalCard = useCallback(
    (exclude?: Question) => {
      if (cards.length <= 1) return cards[0];

      let candidate = pickRandom(cards);
      let attempts = 0;
      while (exclude && candidate.question === exclude.question && attempts < 8) {
        candidate = pickRandom(cards);
        attempts += 1;
      }
      return candidate;
    },
    [cards]
  );

  const rollNewQuestion = useCallback(() => {
    if (isRolling || cards.length === 0) return;

    clearRollTimeout();
    const finalCard = pickFinalCard(randomCard ?? undefined);
    rollStartRef.current = Date.now();

    setIsRolling(true);

    const scheduleRollTick = () => {
      const elapsed = Date.now() - rollStartRef.current;

      if (elapsed >= ANIMATION_DURATION_MS) {
        setDisplayCard(finalCard);
        setRandomCard(finalCard);
        setIsRolling(false);
        return;
      }

      setDisplayCard(pickRandom(cards));
      const progress = elapsed / ANIMATION_DURATION_MS;
      const delay = 50 + progress * 130;
      rollTimeoutRef.current = setTimeout(scheduleRollTick, delay);
    };

    scheduleRollTick();
  }, [cards, isRolling, pickFinalCard, randomCard]);

  useEffect(() => {
    const initial = pickFinalCard();
    setRandomCard(initial);
    setDisplayCard(initial);

    return () => clearRollTimeout();
  }, [pickFinalCard]);

  if (!randomCard || !displayCard) return null;

  return (
    <div className="random-question-container">
      <h2 className="random-title">Pregunta Aleatoria</h2>
      <div className={`random-card-wrapper${isRolling ? ' is-rolling' : ''}`}>
        <div className="category-badge">{displayCard.category}</div>
        <div className={`random-card${isRolling ? ' random-card--rolling' : ''}`}>
          <QuestionCard question={displayCard.question} alwaysShow />
        </div>
      </div>
      <button
        className={`refresh-button${isRolling ? ' refresh-button--rolling' : ''}`}
        onClick={rollNewQuestion}
        disabled={isRolling}
        type="button"
      >
        {isRolling ? 'Sorteando...' : 'Nueva Pregunta'}
      </button>
    </div>
  );
};

export default RandomQuestion;
