import React, { useState, useEffect } from 'react'

import { Wrapper, ArticleWrapper, NewsSectionHeader, TitleWrapper, ContentWrapper } from './NewSection.styles.js'
import { Button } from 'components/atoms/Button/Button.js'

import axios from 'axios'

const NewsSection = () => {

  const [articles, setArticles] = useState([])
  const [err, setErr] = useState('')

  useEffect(() => {
    axios.post('https://graphql.datocms.com/',
    {
      query: `
      {
        allArticles {
          id
          title
          content
          image {
            url
            alt
          }
        }
      }
      `
    }, {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`
      }
    }).then(({data: { data }}) => {
      setArticles(data.allArticles)
    }).catch((e) => setErr("Sorry, we couldn't load articles"))
  }, [])

  return (
    <Wrapper>
    <NewsSectionHeader>University news feed section</NewsSectionHeader>
    {articles.length > 0 && !err ? articles.map(({ id, title, category, content, image = null }) => (
      <ArticleWrapper key={id}>
      <TitleWrapper>
        <h3>{title}</h3>
        <p>{category}</p>
      </TitleWrapper>
      <ContentWrapper>
        <p>{content}</p>
        {image ? <img src={image.url} alt={`${image.alt ? image.alt : title}`} /> : null}
      </ContentWrapper>
        <Button isBig>Click me!</Button>
    </ArticleWrapper>
    )) : <NewsSectionHeader>{`${err ? err : 'Loading...'}`}</NewsSectionHeader>}
  </Wrapper>
  )
  
}

export default NewsSection