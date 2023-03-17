import './App.css';
import { Footer, Header, Widget } from './components/common';
import { MainLayout } from './components/Layout';
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
      <MainLayout>
        <StudentCard student={john} onClick={handleStudentClick} />
      </MainLayout>

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

      <div>
        <div>
          <Widget title="Earning Overview">chart 1</Widget>
        </div>
        <div>
          <Widget title="Revenue Sources">
            <div>chart 2</div>
          </Widget>
        </div>
        <div>
          <Widget title="Earning Overview">
            <img src="abc" alt="" />
          </Widget>
        </div>
        <div>
          <Widget title="Earning Overview">chart 4</Widget>
        </div>
      </div>
    </div>
  );
}

export default App;
