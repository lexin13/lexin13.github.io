import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Алехин Алексей
        </h3>
        <ul>
          <li>
            Опыт работы 18 лет, сопровождение и разработка Enterprise проекта ориентированного на учет персонала, написание функций и хранимых процедур для SQL Server, оптимизация SQL запросов, разработака отчетов
          </li>
          <li>
            Цель обучения: пополнение и систематизация знаний о React для дальнейшего применения в рабочем проекте
          </li>
          <li>
            Технологии: Delphi, MS SQL Server, SQL, FastReports, Git; знаком с C#, JS
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;

