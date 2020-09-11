import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './PremiumPage.css';

const PremiumFeaturesMaybe = props => {
  const { options, publicData } = props;
  if (!publicData || !publicData.material) {
    return null;
  }

  const selectedOptions = publicData && publicData.material ? publicData.material : [];
  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.featuresTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.material"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </div>
  );
};

export default PremiumFeaturesMaybe;