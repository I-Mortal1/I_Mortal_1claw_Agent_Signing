export {normalizeEvmEnvelope,verifyEvmSignedEnvelope} from './I_Mortal-evm-signing-envelope.mjs';
import {getAddress} from 'ethers';
import {requireAcceptedTreasuryJitSigning} from './treasury-jit-signing.mjs';
const uuid=/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i;

// Retired compatibility adapter: configuration validation only, never signing.
// No credential resolver, authorization callback or transport is retained/invoked.
export class OneClawEvmSignOnly{
 constructor({configuration,resolveAgentCredential,resolveAuthorization,journal,nativeHost,fetchImpl}){
  const c=structuredClone(configuration);
  if(!c||Object.keys(c).some(k=>!['agentId','signerAddress','chainId','signingKeyPath','accountId','ownerDeviceId'].includes(k))||!uuid.test(c.agentId)||!c.accountId||!c.ownerDeviceId||!/^agents\/[\da-f-]{36}\/chains\/[a-z0-9_-]+\/private_key$/.test(c.signingKeyPath)||!c.signingKeyPath.startsWith('agents/'+c.agentId+'/chains/')||typeof resolveAgentCredential!=='function'||typeof resolveAuthorization!=='function'||!journal?.read||!journal?.transition)throw Error('ONECLAW_SIGNER_CONFIGURATION_REQUIRED');
  c.signerAddress=getAddress(c.signerAddress);if(/^0x0{40}$/i.test(c.signerAddress)||!/^[1-9]\d{0,15}$/.test(String(c.chainId)))throw Error('ONECLAW_SIGNER_CONFIGURATION_REQUIRED');

 }
 // I_Mortal permanent retirement of the legacy single-provider credential path.
 // Neither a future outer-gate change nor a caller-controlled host flag may
 // restore it. A separately reviewed nonexportable threshold adapter is required.
 async sign(_args){
  requireAcceptedTreasuryJitSigning();
  throw Error('TEE_PROTECTED_EXECUTION_REQUIRED');
 }
}
