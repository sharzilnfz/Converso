import Vapi from '@vapi-ai/web';

console.log(
  'VAPI Public Key:',
  process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY ? 'Found' : 'Missing'
);
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);
