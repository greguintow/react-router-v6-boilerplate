import { useHistory, useLocation, useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();
  const history = useHistory();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const selectedColor = queryParams.get('color');

  function handleGoToHome() {
    history.push('/');
  }

  function handleGoBack() {
    history.goBack();
  }

  function handleGoForward() {
    history.goForward();
  }

  return (
    <div className="product">
      <h2>Você está vendo o produto {productId}</h2>
      {selectedColor && <h3 style={{ color: selectedColor }}>Cor selecionada: {selectedColor}</h3>}

      <div className="actions">
        <button onClick={handleGoBack}>Voltar para a página anterior</button>
        <button onClick={handleGoForward}>Ir para  próxima página</button>
        <button onClick={handleGoToHome}>Voltar para a home</button>
      </div>
    </div>
  );
}
