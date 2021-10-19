import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <StoryLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </StoryLink>
  );
};

const StoryLink = styled.a`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #D0CDC8;

  &:first-of-type{
    padding-top: 0;
  }

  &:last-of-type{
    border: 0;
  }
  @media ${QUERIES.tabletOnly}{
    all: unset;
  }
`

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 1rem;
  align-items:  center;

  @media ${QUERIES.tabletOnly}{
    all: unset;
  }
  
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
