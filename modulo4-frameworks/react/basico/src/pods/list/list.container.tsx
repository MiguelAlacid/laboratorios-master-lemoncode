import React from "react";
import { useNavigate } from "react-router-dom";
import { MemberEntity } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./repository";
import { routes } from "@/router";
import { CompanyContext } from "@/core/providers/company.context";

interface Props {
  onSelectMember: (login: string) => void;
}

export const ListContainer: React.FC<Props> = ({ onSelectMember }) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { company, setCompany } = React.useContext(CompanyContext);
  const [loading, setLoading] = React.useState(false)

  const navigate = useNavigate();

  React.useEffect(() => {
    loadMembers();
  }, []);

  const handleSelect = (login: string) => {
    onSelectMember(login);
    navigate(routes.detail(login));
  };

  const loadMembers = () => {
    setLoading(true);
    try {
      // Se hace esto del prev por si de la llamada de la api viene error o no hay miembros en la compañía, reenderizando asi lo último que había.
      getMembers(company).then((result) => setMembers((prev) => (result.length ? result: prev)));
    } finally{
      setLoading(false)
    }

    // Esta linea es equivalente a la anterior, pero con una sintaxis más explícita:
    // getMembers(company).then((members) => setMembers(members));
  };

  return (
    <List
      members={members}
      company={company}
      onCompanyChange={setCompany}
      onSearch={loadMembers}
      onSelect={handleSelect}
      loading={loading}
    />
  );
};
