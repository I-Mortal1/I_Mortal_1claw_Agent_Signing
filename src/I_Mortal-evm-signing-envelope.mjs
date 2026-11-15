// I_Mortal provider-neutral public EVM envelope normalization/verification only.
// No signing, credential, provider transport, vault or original-device-key operations.
import {Transaction,getAddress} from 'ethers';
const uint=value=>{if(typeof value!=='string'||!/^(?:0|[1-9]\d{0,77})$/.test(value))throw Error('INVALID_SIGNING_ENVELOPE');return BigInt(value);};
export function normalizeEvmEnvelope(value){
 const keys=['type','chainId','to','value','data','nonce','gasLimit','maxFeePerGas','maxPriorityFeePerGas'];
 if(!value||Object.keys(value).length!==keys.length||Object.keys(value).some(key=>!keys.includes(key))||value.type!==2||!Number.isSafeInteger(value.nonce)||value.nonce<0||!/^0x(?:[\da-f]{2})*$/i.test(value.data)||value.data.length>131074)throw Error('INVALID_SIGNING_ENVELOPE');
 const chain=uint(value.chainId),gas=uint(value.gasLimit),fee=uint(value.maxFeePerGas),priority=uint(value.maxPriorityFeePerGas);uint(value.value);
 if(chain<=0n||chain>BigInt(Number.MAX_SAFE_INTEGER)||gas<=0n||gas>BigInt(Number.MAX_SAFE_INTEGER)||fee<=0n||priority>fee||/^0x0{40}$/i.test(value.to))throw Error('INVALID_SIGNING_ENVELOPE');
 return Object.freeze({...value,to:getAddress(value.to),data:value.data.toLowerCase()});
}
export function verifyEvmSignedEnvelope(expected,raw,signerAddress){
 try{
  const plan=normalizeEvmEnvelope(expected),tx=Transaction.from(raw);
  return tx.isSigned()&&tx.type===2&&tx.from===getAddress(signerAddress)&&tx.chainId===BigInt(plan.chainId)&&tx.to===plan.to&&tx.value===BigInt(plan.value)&&tx.data.toLowerCase()===plan.data&&tx.nonce===plan.nonce&&tx.gasLimit===BigInt(plan.gasLimit)&&tx.maxFeePerGas===BigInt(plan.maxFeePerGas)&&tx.maxPriorityFeePerGas===BigInt(plan.maxPriorityFeePerGas)&&tx.accessList?.length===0;
 }catch{return false;}
}
