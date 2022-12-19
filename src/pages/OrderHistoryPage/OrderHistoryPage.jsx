import { useNavigate } from 'react-router-dom';


export default function OrderHistoryPage() {

  const navigate = useNavigate();

  
  const goBackHandleClick = () => {
    navigate('/orders/new')
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={goBackHandleClick}> Home </button>
    </>
  );
}