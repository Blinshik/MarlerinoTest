import ChatHeader from './models/chatHeader'
import RequestList from './models/requestList'
import UserChat from './models/userChat'
import { useSelector } from 'react-redux'

function App() {
  const request = useSelector((state) => state.requests.active)

  return (
    <div className="App" style={{ height: '100vh' }}>
      <ChatHeader />
      {
        request.position === -1 ? 
          <RequestList /> : 
          <UserChat position={request.position} />
      }
    </div>
  );
}

export default App;
