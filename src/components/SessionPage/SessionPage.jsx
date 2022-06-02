// SessionPage.jsx

import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function SessionPage() {

  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);



  return (

    <>
      <div>
        <p>A Goal</p>   
        <br></br>     
          <button>
            yes
          </button>
          <button>
            no
          </button>        
      </div>
    </>
  )
}

export default SessionPage;