import app from './app'
import { connectToDatabase } from './src/db/connection';

const port = process.env.PORT || 5000

connectToDatabase()
  .then(() => {
    app.listen(port, () =>
      console.log(`Server Open in ${port}`)
    );
  })
  .catch((err) => console.log(err));