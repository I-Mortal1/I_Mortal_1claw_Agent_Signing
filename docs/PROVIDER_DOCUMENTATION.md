# I_Mortal provider documentation review

Public sources checked on 2026-11-15. Provider documentation may change and does not certify this integration.

- [1claw SDK](https://github.com/1clawAI/1claw-sdk) documents sign-only transaction and separate submission interfaces, alongside self-custody/TSS-related functionality. This does not demonstrate I_Mortal's independent participant, unattended delegation or fresh 60-second event-key requirements. No provider SDK is called here.
- [Transaction policy language](https://docs.1claw.co/docs/treasury/policy-language) describes transaction-context evaluation and layered guardrails/approvals. This is not evidence that I_Mortal's complete policy is deployed.
- [Security architecture](https://1claw.co/security) describes vault/root encryption and protected signing mechanisms. HSM-backed wrapping or split encryption keys must not be equated with nonexportable threshold transaction signing. The selected path's reconstruction and memory boundaries require qualification.

No account, share or key is provisioned by this repository. An SDK method name or marketing term cannot establish a missing security guarantee. Incompatible routes must stay disabled rather than falling back to key retrieval.
