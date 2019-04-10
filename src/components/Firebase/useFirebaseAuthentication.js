const useFirebaseAuthentication = (firebase) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(
      authUser => {
        authUser ? setAuthUser(authUser) : setAuthUser(null);
      },
    );
    return () => {
      unlisten();
    }
  })
  return authUser;
}