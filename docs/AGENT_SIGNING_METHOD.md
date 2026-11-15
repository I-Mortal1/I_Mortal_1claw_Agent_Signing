# I_Mortal 1claw agent-signing method

The following is the intended architecture. Except for explicitly listed local diagnostics, it is not accepted end to end.

## Initial user delegation

The bot-only LLM path supports `start bot trade`, `stop bot trade` and `check bot trade`. Start requires explicit duration, pair, exchange, USD amount and live/paper mode. Network ambiguity must be resolved before approval. Bind per-trade and total limits, allowed assets, slippage and permitted actions independently. USD must not be treated as token units or assumed stablecoin parity.

A trusted interface and protected device approval establish one bounded trading period. The model cannot approve itself or extend that period. Subsequent unattended trades need no new user signature while they remain inside the valid grant, but every trade still requires current independent authorization. Linking an account alone grants no trading permission.

The original device-bound registration key is neither exported nor used for transaction signing or share derivation. A separate delegated signing authority must be supported by the actual wallet/account and chain.

## Untrusted proposals and protected policy

Model output, exchange data and third-party content are proposals or data, never authority. A protected boundary independently obtains the authenticated account, session, current policy epoch and revocation status. It checks exact chain, venue, pair, recipient, amount, calldata, nonce, gas, fees, simulation and token/router identity. Oracle inputs require freshness, source validation and manipulation controls.

Operative policy must remain outside agent read/write capabilities. The agent must not receive shell access, provider tokens, signing handles, private files or metadata credentials. Policy substitution, downgrade, privilege escalation and replay must be denied at the effect boundary. Prompt filtering is not runtime isolation. This reference does not establish full OS IMDS or harness isolation.

Authenticated communication must bind peer identity, account, exact request bytes, policy epoch, deadlines and replies. Caller-selected policy hashes or Boolean approval/proof flags are not authorization.

## Per-event JIT binding

Durably reserve one exact signing event and attempt before requesting signing. Bind its transaction digest, session, account, network, nonce, limits, participant identities, policy epoch and expiry. A one-use revocable JIT handle authorizes this action only. The handle is itself a capability and must stay outside model context even though it is not a private key.

Generate the intended fresh task key for this event and enforce a maximum 60-second signing lifetime inside the qualified signing participants. Token expiry, wrapping encryption, session expiry or a short handle alone do not prove that key lifetime. Record disable/destruction evidence and every success, failure, denial, expiry or uncertain outcome.

Unknown commit/sign/broadcast acknowledgments require durable uncertainty handling. Do not blindly retry an economic action under a new identifier. Revocation and policy checks must be repeated after latency and immediately before effects.

## Threshold signing

Use an audited compatible threshold protocol with independently controlled protected participants. The intended roles are an I_Mortal protected participant and a qualified independent participant. Their actual provider choice, threshold, algorithms and operational independence remain unaccepted. No participant may expose shares, secret nonces or complete signing material to the app, agent or external caller.

An arbitrary half of an existing user key plus a newly generated unrelated half is not threshold signing. Shares require coordinated generation or a valid resharing protocol. Splitting a vault encryption key does not demonstrate threshold transaction signing. A fresh task public key also requires chain/account-compatible delegation; it does not automatically control an existing wallet.

1claw's public interfaces are under evaluation for this lane. No accepted adapter here demonstrates independent HSM co-signing or the required fresh task-key lifecycle. A conventional sign-only API is insufficient to prove these properties.

## Zero-knowledge authorization

The intended ZK layer proves a defined authorization statement without disclosing private witnesses. It supplements threshold/JIT, consent, revocation and onchain restrictions. Audited circuits, verification keys, protected proving and verifier/onchain integration are not implemented by this repository. Hash matching or a Boolean proof claim is not a ZK proof.

## Verification and broadcast

Compare any returned signature/envelope with independently approved intent before separately authorized broadcast. The included EVM helper checks a type-2 transaction's sender, chain, recipient, value, calldata, nonce, gas limit, fee caps and empty access list. It does not establish economic intent, simulation, router safety, provider identity, threshold participation, key lifetime or policy acceptance.

The helper expects admitted data; it is not a sandbox for hostile JavaScript objects. Strict wire decoding and data-boundary checks are separate requirements. No CEX, Solana or other non-EVM transaction verifier is included.

Broadcast requires durable pre-broadcast identity, deduplication, confirmations, reorg handling and actual gas/fee reconciliation. A signed transaction can remain chain-valid after a local key expires. Preventing delayed submission needs chain-enforced deadlines/nonces or another verified account authorization mechanism; a 60-second API lease cannot revoke an already signed transaction.

## Stop and check

Stop must confirm authoritative revocation separately from worker shutdown and remain available without the model/provider. It cannot reverse submitted transactions or orders.

Check must return account-scoped live/paper progress, balances, orders, fills, fees and realized/unrealized performance with source and timestamp. Missing metrics must be marked unavailable, never invented. Parser tests do not implement this analysis service.

Every event needs auditable proof of what actually ran, without logging credentials, private material or capabilities. Independent checkpoints, rollback protection and final retirement require production acceptance before activation.
