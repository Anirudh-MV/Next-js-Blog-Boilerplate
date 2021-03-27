import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="About" description="About" />}>
    <Content>
      <p>About Haritaiser and Vishwamithra</p>
      <p />
    </Content>
  </Main>
);

export default About;
