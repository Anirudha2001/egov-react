import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";

const Features = lazy(() => import("./components/Features/Features"));
const Stories = lazy(() => import("./components/Stories/Stories"));
const Platform = lazy(() => import("./components/Platform/Platform"));
const Latest = lazy(() => import("./components/Latest/Latest"));
const Supporters = lazy(() => import("./components/Supporters/Supporters"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function SectionFallback() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="skeleton-block" aria-hidden="true" />
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Suspense fallback={<SectionFallback />}>
          <Features />
          <Stories />
          <Platform />
          <Latest />
          <Supporters />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
