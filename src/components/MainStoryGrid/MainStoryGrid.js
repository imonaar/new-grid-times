import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly}{
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories'
    ;
    gap:  48px 0;
    grid-template-columns: 1fr 250px;
  }

  @media ${QUERIES.laptopAndUp}{
    grid-template-columns: 4fr 3fr 2fr;
    grid-template-rows: 1fr 152px;
    gap:  48px 0;
    grid-template-areas:
    'main-story  secondary-stories  opinion-stories'
    'main-story  advertisement       advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp}{
    padding-right: 16px;
    border-right: 1px solid #D0CDC8;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp}{
    padding-left: 16px;
  }

  @media ${QUERIES.laptopAndUp}{
    padding-right: 16px;
    border-right: 1px solid #D0CDC8;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const  OpinionList = styled(StoryList)`

  @media ${QUERIES.tabletOnly}{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  @media ${QUERIES.laptopAndUp}{
    padding-left: 16px;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp}{
    margin-left: 16px;
    border-top: 1px solid #D0CDC8;
    padding-top: 1rem;
    margin-top: -1rem;
  }
`;

export default MainStoryGrid;
