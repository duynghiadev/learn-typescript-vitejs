import './App.css';
import { Footer, Header } from './components/common';
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
    </div>
  );
}

export default App;
