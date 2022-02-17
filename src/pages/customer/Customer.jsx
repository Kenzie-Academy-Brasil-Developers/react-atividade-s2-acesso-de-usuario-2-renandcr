import { Link, useParams } from "react-router-dom";

const Customer = ({ members }) => {
  const { idCustomer } = useParams();
  const member = members.find((current) => current.id === idCustomer);
  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export { Customer };
