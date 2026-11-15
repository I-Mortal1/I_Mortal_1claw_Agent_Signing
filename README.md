# I_Mortal 1claw Agent Signing

A selected technical reference for the proposed I_Mortal **1claw-backed autonomous trading signing lane**. This repository contains key-free code excerpts, the intended signing flow and curated local verification results. It excludes the wallet application, trading model, operational policies, credentials, deployment records and private project history.

**Live signing is NOT completed or accepted.** The included legacy adapter is permanently retired. No working threshold signer or live provider connection is supplied. This readable reference is not an obfuscated production release.

## Completed and verified locally

| Component | Windows | Isolated Linux WSL | Verified scope |
| --- | --- | --- | --- |
| Legacy adapter retirement | 12 passed | 12 passed | Signing entry rejects; credential, authorization, journal and transport callbacks remain unused |
| Public EVM envelope helper | 20 passed | 20 passed | Normalization and signed-envelope comparison using public fixtures |
| Bot command grammar candidate | 16 passed | 16 passed | Required start fields and malformed/unknown command rejection |

Each listed run recorded zero failures and zero skips on 2026-11-14. These are software diagnostics, not provider, hardware or production acceptance. The parser is described for context; its implementation is not included. See [verification limits](docs/VERIFIED_STATUS.md).

## Intended flow — not activated

1. User approves a bounded agent session: duration, exchange, network, trading pair, USD budget, limits and live/paper mode.
2. Agent proposes a trade without credentials or signing authority.
3. A protected action boundary independently checks current consent, policy, revocation and exact transaction.
4. A durable event reservation binds a one-use JIT authorization to that transaction.
5. Qualified protected threshold participants perform the private cryptographic operations, with a fresh event key usable for at most 60 seconds.
6. A separate verifier checks the signed envelope against approved intent before authorized broadcast.
7. Confirmations, fees, audit evidence and irreversible event retirement are reconciled.

Steps describing threshold, fresh task keys, JIT, ZK and live execution are **requirements awaiting implementation and acceptance**, not capabilities demonstrated by the included code.

Device registration keys must stay on the registering device and must not supply signing or share-derivation material. Public keys and fingerprints identify or verify authority; they cannot generate signatures. Private operations must occur inside qualified protected participants without exposing private material to the model, app or callers.

Only autonomous agent DEX trading belongs to this integration investigation. CEX remains on hold. Manual or LLM-assisted swap, sell, buy and send use a separate lane and are outside this publication. Account linking must not start a bot automatically.

## Code and documentation

- [Detailed signing method](docs/AGENT_SIGNING_METHOD.md)
- [Verified results and limitations](docs/VERIFIED_STATUS.md)
- [Provider documentation](docs/PROVIDER_DOCUMENTATION.md)
- [Remaining work](docs/REMAINING_WORK.md)
- [Code provenance](docs/CODE_PROVENANCE.md)
- [EVM envelope verifier](src/I_Mortal-evm-signing-envelope.mjs): verification only, never signing.
- [Retired adapter](src/oneclaw-evm-signer.mjs): configuration checks and permanent rejection.
- [Public gate scaffold](src/treasury-jit-signing.mjs): newly authored always-denying replacement for the unpublished private gate.
- [Machine-readable status](evidence/verified-status.json)

No service, provider credential setup, CI workflow, install script or deployment procedure is supplied. Ethers is an external dependency, not vendored here. Historical configuration path schemas in the adapter are not credentials and must not become model-readable key-fetch routes.

Windows, Linux, Android, iOS, macOS and browser live-signing acceptance remain pending. This reference is not an independent audit, security guarantee, profitability claim or endorsement by 1claw.
