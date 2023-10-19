
import './App.css';
//import Parent from './components/Parent';
//import Parent2 from './components/Parent2';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ComponentA from './components/ComponentA';
import { UserProvider} from './components/UserContextApi';
import Forms from './components/Forms';
import UsingReducerHook from './components/UsingReducerHook';

function App() {
  const details={name:'Sourav',age:30,role:"Software Engineer"}
  return (
    <div className="App">
      <ClickCounter name='Sourav'/>
      <HoverCounter name='Sanjana'/>
      <UserProvider value={details}>
        <ComponentA/>
      </UserProvider>
      <Forms/>
      <UsingReducerHook/>
      {/* <Parent/> */}
      {/* <Parent2/> */}
    </div>
  );
}

export default App;
