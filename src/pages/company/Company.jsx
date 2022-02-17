import { Link, useParams } from "react-router-dom";

const Company = ({ members }) => {
  const { companyId } = useParams();
  const member = members.find((current) => current.id === companyId);
  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};
export { Company };
