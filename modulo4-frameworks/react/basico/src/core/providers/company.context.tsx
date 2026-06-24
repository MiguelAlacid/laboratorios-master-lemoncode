import React from "react";

interface CompanyContextModel {
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
}

export const CompanyContext = React.createContext<CompanyContextModel>({
  company: "",
  // default noop to avoid checking for undefined when not wrapped
  setCompany: () => {},
});

export const CompanyProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [company, setCompany] = React.useState<string>("lemoncode");

  return (
    <CompanyContext.Provider value={{ company, setCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
