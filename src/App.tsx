import { useEffect, useState } from 'react';
import './App.css';
import { Footer, Header, Widget } from './components/common';
import { MainLayout } from './components/Layout';
import { MyText } from './features/labs/MyText';
import { StudentCard } from './features/labs/Student';
import { Student } from './models/student';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  function abc() {}

  const john: Student = {
    name: 'John',
    age: 3,
  };

  const handleStudentClick = (student: Student) => {
    console.log('Student Clicked', student);
  };

  // if (loading) return <p>Loading...</p>; // case IF operator

  return (
    <div>
      {/* {loading && <p>loading...</p>} // case AND  operator */}
      {loading ? <p>loading...</p> : 'data ready!'} // case ternary operator
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
