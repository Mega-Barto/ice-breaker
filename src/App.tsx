import { useState } from "react";
import "./App.css";
import CategorySection from "./components/CategorySection";
import RandomQuestion from "./components/RandomQuestion";
import InstructionsButton from "./components/InstructionsButton";
import questionsData from "./data/questions.json";
import {
  BARTO_SELECTION_CATEGORY,
  isExcludedFromRandom,
  clearBartoUnlocked,
  persistBartoUnlocked,
  readBartoUnlockedFromStorage,
} from "./constants/categories";
import { FAVICON_SRC } from "./constants/assets";

interface QuestionCategory {
  category: string;
  questions: string[];
}

interface Question {
  category: string;
  question: string;
}

const categories: QuestionCategory[] = questionsData;

function App() {
  const [bartoUnlocked, setBartoUnlocked] = useState(readBartoUnlockedFromStorage);
  const [bartoSectionVisible, setBartoSectionVisible] = useState(
    readBartoUnlockedFromStorage
  );

  const cardsForRandom: Question[] = categories
    .filter((group) => !isExcludedFromRandom(group.category))
    .flatMap(({ category, questions }) =>
      questions.map((question) => ({ category, question }))
    );

  const bartoGroup = categories.find(
    (group) => group.category === BARTO_SELECTION_CATEGORY
  );
  const bartoQuestions = bartoGroup?.questions ?? [];
  const regularCategories = categories.filter(
    (group) => group.category !== BARTO_SELECTION_CATEGORY
  );

  const handleBartoUnlock = () => {
    persistBartoUnlocked();
    setBartoUnlocked(true);
    setBartoSectionVisible(true);
  };

  const handleBartoClose = () => {
    clearBartoUnlocked();
    setBartoUnlocked(false);
    setBartoSectionVisible(false);
  };

  return (
    <>
      <div className="app-container">
        <header className="main-title-hero" aria-label="Mega Ice-breaker">
          <div className="main-title-float">
            <img
              className="main-title-icon"
              src={FAVICON_SRC}
              width={64}
              height={64}
              alt=""
              aria-hidden="true"
              draggable={false}
            />
            <h1 className="main-title">
              <span className="main-title-eyebrow">Mega</span>
              <span className="main-title-word">
                Ice<span className="main-title-hyphen">-</span>breaker
              </span>
            </h1>
          </div>
        </header>

        <RandomQuestion cards={cardsForRandom} />

        {bartoUnlocked && bartoSectionVisible && bartoQuestions.length > 0 && (
          <div className="barto-selection-container">
            <div className="barto-selection-header">
              <div className="divider divider--special">
                <span>Barto&apos;s Selection</span>
              </div>
              <button
                type="button"
                className="barto-close-button"
                onClick={handleBartoClose}
                aria-label="Cerrar Barto's Selection"
                title="Cerrar"
              >
                &times;
              </button>
            </div>
            <p className="barto-selection-intro">
              Preguntas curadas a mano — no salen en el sorteo aleatorio.
            </p>
            <CategorySection
              category={BARTO_SELECTION_CATEGORY}
              questions={bartoQuestions}
              isSpecial
            />
          </div>
        )}

        <div className="divider">
          <span>Todas las categorías</span>
        </div>

        <div className="categories-container">
          {regularCategories.map(({ category, questions }) => (
            <CategorySection
              key={category}
              category={category}
              questions={questions}
            />
          ))}
        </div>

        <footer className="app-footer">
          <p>
            Proyecto hecho con 😭 por{" "}
            <a
              href="https://www.instagram.com/mega_barto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              alguien con habilidades sociales cuestionables
            </a>
          </p>
        </footer>
      </div>

      <InstructionsButton
        bartoSectionVisible={bartoSectionVisible}
        onBartoUnlock={handleBartoUnlock}
      />
    </>
  );
}

export default App;
