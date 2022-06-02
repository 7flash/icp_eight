export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getProposal' : IDL.Func([], [IDL.Text], ['query']),
    'proposeNew' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
