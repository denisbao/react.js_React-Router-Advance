import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Joe', text: 'Learning React is a pain!' },
]

const QuoteDetails = () => {
  const params = useParams()
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  const match = useRouteMatch()
  // match = {
  //   isExact: true
  //   params: {quoteId: "q2"}
  //   path: "/quotes/:quoteId"
  //   url: "/quotes/q2"
  // }

  if (!quote) {
    return <p>No quote found...</p>
  }

  return (
    <>
      <HighlightedQuote text={quote?.text} author={quote?.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetails
