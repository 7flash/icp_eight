actor {
  var proposal: Text = "";
  var proposalId: Nat = 0;

  public func proposeNew(newProposal : Text) : async Text {
    proposal := newProposal;
    proposalId += 1;
    // var proposalIdText: Text = Nat.toText(proposalId);
    return "Accepted Proposal " # newProposal # "!";
  };

  public query func getProposal() : async Text {
    return proposal;
  };
}
