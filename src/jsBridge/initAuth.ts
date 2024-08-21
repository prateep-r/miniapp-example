/*
  This function for calling initAuth in the JSBridge
*/
const initAuth = (
  clientId: string,
  scope: string,
  callback: (authorizationCode: string) => void,
  callbackError: (errorCode: string, errorDescription: string) => void
) => {
  if (window.JSBridge) {
    // android
    window.bridge.initAuthCallback = callback;
    window.bridge.initAuthCallbackError = callbackError;
    window.JSBridge.initAuth?.(clientId, scope);
  } else if (window.webkit) {
    // ios
    window.bridge.initAuthCallback = callback;
    window.bridge.initAuthCallbackError = callbackError;
    const message = {
      name: "initAuth",
      clientId: clientId,
      scope: scope,
    };
    window.webkit.messageHandlers.observer.postMessage(message);
  }
};

export default initAuth;
