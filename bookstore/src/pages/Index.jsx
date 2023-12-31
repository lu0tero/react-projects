/* Store */
import Book from "../components/Book/Book";
import Layout from "../components/Layout/Layout";
import { useAppContext } from "../store/store";

const Index = () => {
  const store = useAppContext();

  const booksContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  }

  return (
    <Layout>
        <div style={booksContainer}>
          {store.items.map(item => (
            <Book key={item.id} item={item}/>
          ))}
        </div>
    </Layout>
  )
}

export default Index;