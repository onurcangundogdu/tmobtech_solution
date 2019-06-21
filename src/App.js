import React, {Fragment} from 'react';
import Layout from './hoc/Layout/Layout';
import Repositories from './containers/Repositories/Repositories';
import {Route, Switch} from 'react-router-dom';
import RepositoryDetail from './containers/RepositoryDetail/RepositoryDetail';

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path='/:name' component={RepositoryDetail} />
          <Route path='/' exact component={Repositories} />
          <Route render={() => <h1>Not Found!</h1>} />
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
