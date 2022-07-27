import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'

const QuoteDetails = () => {
  const params = useParams()
  return (
    <>
      <h1>Quote Details Page</h1>
      <p>{params.quoteId}</p>
      {/* <Route path={`/quotes/${params.quoteId}/comments`}></Route> */}
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetails
