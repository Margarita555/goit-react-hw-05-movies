import React from 'react';
// import Cast from '../components/Cast/Cast';
import MovieDetailsPage from '../components/MovieDetailsPage/MovieDetailsPage';
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  //   componentDidCatch(error, errorInfo) {
  //     // You can also log the error to an error reporting service
  //     logErrorToMyService(error, errorInfo);
  //   }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div>
        <MovieDetailsPage />
      </div>
    );
  }
}
