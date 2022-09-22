import React from 'react'

import { Wrapper } from './MainTemplate.styles.js'
import Sidebar from 'components/organisms/Sidebar/Sidebar.js'
import SearchBar from 'components/organisms/SearchBar/SearchBar.js'

import NewsSection from '../NewsSection/NewsSection.js'
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget.js'

const MainTemplate = ({children}) => (
      <Wrapper>
        <Sidebar />
        <SearchBar />
        {children}
        <NewsSection />
        <NotesWidget />
      </Wrapper>
)

export default MainTemplate