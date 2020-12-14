import React, { Component } from 'react';
import { TopbarContainer } from '..';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  // ExternalLink,
  Page
} from '../../components';
import { loadData } from './PowwowPage.duck';
import { injectIntl } from '../../util/reactIntl';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import SectionSellers from './SectionSellers';
import SectionHost from './SectionHost';

import css from './PowwowPage.css';

export class PowwowPageComponent extends Component {

  componentDidMount() {
    if (window) {
      this.props.onLoadData();
      // this.loadInitialData();
    }
  }

  render() {
    const { users } = this.props;
    const host = users && users[0];
    return (
      <Page className={css.root} title="Powwow Page" scrollingDisabled={false}>
        <LayoutSingleColumn>
          <LayoutWrapperTopbar>
            <TopbarContainer />
          </LayoutWrapperTopbar>

          <LayoutWrapperMain className={css.staticPageWrapper}>
              <h1 className={css.pageTitle}>
                {/* <FormattedMessage id="ContactPage.heading" /> */}
                Powwow Page
              </h1>
              <div className={css.splitScreen}>
              <SectionSellers className={css.sectionSellers} users={users}/>
              <SectionHost className={css.sectionHost} host={host} />
              </div>
          </LayoutWrapperMain>
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSingleColumn>
      </Page>
    );
  }
};

const mapStateToProps = state => {
  const {
    pagination,
    searchInProgress,
    searchListingsError,
    searchParams,
    userIds,
  } = state.PowwowPage;
  const users = userIds && userIds.length > 0 ? getMarketplaceEntities(state, userIds) : null;
  return {
    users: users,
    pagination,
    scrollingDisabled: isScrollingDisabled(state),
    searchInProgress,
    searchListingsError,
    searchParams,
  };
};

const mapDispatchToProps = dispatch => ({
  onLoadData: () => dispatch(loadData()),
});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671

const PowwowPage = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
  )(PowwowPageComponent);

export default PowwowPage;