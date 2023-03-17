import './App.css';
import { Footer, Header } from './components/common';
import { MyText } from './features/labs/MyText';
import { StudentCard } from './features/labs/Student';
import { Student } from './models/student';

function App() {
  function abc() {}

  const john: Student = {
    name: 'John',
    age: 3,
  };

  const handleStudentClick = (student: Student) => {
    console.log('Student Clicked', student);
  };

  return (
    <div>
      <Header></Header>
      <StudentCard student={john} onClick={handleStudentClick} />
      <Footer></Footer>

      <MyText></MyText>
      <MyText>Easy Front End</MyText>
      <MyText>{2203}</MyText>
      <MyText>{false}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>

      <MyText>
        <span>easy</span>
      </MyText>

      <MyText>
        <span>easy</span> front end
      </MyText>

      <MyText>
        <span>easy</span>
        <span>frontend</span>
      </MyText>
    </div>
  );
}

export default App;
