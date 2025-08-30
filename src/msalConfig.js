import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "fc8d9fe9-8085-48cb-a0bf-4e6ea3693ca7", // do app Azure
    redirectUri: "http://localhost:5173", // Vite dev server
  }
};


export const msalInstance = new PublicClientApplication(msalConfig);

export async function initializeMSAL() {
  await msalInstance.initialize(); // ⚠️ necessário antes de qualquer login
}