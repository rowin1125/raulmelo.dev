import React from 'react';

import { Container } from 'components/Ui';
import { SeriesMenu } from '../SeriesMenu';
import { useBlogContext } from '../blogContext';
import { Divider } from 'components/MdxComponents/Divider';

interface SeriesSection {
  noDivider?: boolean;
}

const Section = Container.withComponent('section');

export const SeriesSection = ({ noDivider = false }: SeriesSection) => {
  const { series, seriesInfo, title } = useBlogContext();

  return series ? (
    <>
      {!noDivider && <Divider data-testid="series-section-divider" />}
      <Section data-testid="series-section">
        <SeriesMenu
          series={series}
          postIndex={seriesInfo!.index}
          title={title}
        />
      </Section>
    </>
  ) : null;
};
