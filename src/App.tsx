import './App.css';
import { Footer, Header } from './components/common';
import { Student } from './features/labs/Student';

function App() {
  return (
    <div>
      <Header></Header>
      <Student age={18} isHero hobbyList={['eat', 'code', 'sleep']} sayHello={() => {}} />
      <Footer></Footer>
    </div>
  );
}

export default App;
