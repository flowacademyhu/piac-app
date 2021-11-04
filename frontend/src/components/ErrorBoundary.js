import React from 'react';
import Header from './Header';
import VendorlistUploadInProgress from './VendorlistUploadInProgress';

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch (_error) {
    this.setState({ hasError: true });
  }

  render () {
    if (this.state.hasError) {
      return (
        <>
          <Header />
          <VendorlistUploadInProgress title='Something went wrong!' />
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
