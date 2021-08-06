import FirebaseContext from '../src/context/firebase';
import { firebase, FieldValue } from '../src/lib/firebase';

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp
