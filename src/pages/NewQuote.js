import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const history = useHistory()

  function addQuoteHandler(quoteData) {
    console.log(quoteData)
    history.push('/quotes')
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote
