// Auth
export const getIsAuthenticated = state => state.auth.isAuthenticated;
export const getToken = state => state.auth.token;

//User
export const getUserEmail = state => state.auth.user.email;
export const getError = state => state.auth.user.error;
export const getIsLoadingCards = state => state.auth.user.loadingCards;

//Cards
export const getCards = state => state.cards;
