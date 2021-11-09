import { Calculator } from './components/calculator';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { ReloadPrompt } from './components/reloadprompt';

export function App() {
  return (
    <>
      <Header />
      <Calculator />
      <Footer />
      <ReloadPrompt />
    </>
  );
}
