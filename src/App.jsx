import { useState } from 'react'
import {Post} from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'


// JSX = Javascript + XML (HTML)

//Componente React = Função que retorna HTML
export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapeer}>
        <Sidebar/>

        <main>
          <Post/>

          <Post/>
        </main>
      </div>
    </div>
  )
}
