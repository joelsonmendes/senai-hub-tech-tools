import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// Configuração pública do aplicativo Web. Variáveis VITE_* podem sobrescrever
// estes valores, mas não são necessárias para renderizar o portal.
const defaults = {
  apiKey: 'AIzaSyDz8GiPWPKrSPcxCZjG_gtwSVpnMGyKfFo',
  authDomain: 'senai-hub-tech-tools.firebaseapp.com',
  projectId: 'senai-hub-tech-tools',
  storageBucket: 'senai-hub-tech-tools.firebasestorage.app',
  messagingSenderId: '514296358070',
  appId: '1:514296358070:web:29488b89a68dfae1b07217'
};
const config = Object.fromEntries(Object.entries(defaults).map(([key,value])=>{
  const envName='VITE_FIREBASE_'+key.replace(/([A-Z])/g,'_$1').toUpperCase();
  return [key, import.meta.env[envName] || value];
}));
export const app=initializeApp(config);
export const auth=getAuth(app);
export const db=getFirestore(app);
