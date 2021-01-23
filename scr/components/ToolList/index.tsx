import React, { useState } from 'react'
import { useEffectOnce } from 'react-use'
import { get } from '../../api'
import { TD, TH, UL } from './styles'

type tool = {
  id: string
  name: string
  description: {
    id: string
    name: string
  }[]
}

// orderedList
const toolsOl = ({ tools }: { tools: tool[] }) => (
  <ol>
    {tools.map(tool => (
      // linha
      <li key={tool.id}>{tool.name}</li>
    ))}
  </ol>
)

// unorderedList
const toolsUl = ({ tools }: { tools: tool[] }) => (
  <UL>
    {tools.map(tool => (
      // linha
      <li key={tool.id}>{tool.name}</li>
    ))}
  </UL>
)

// unorderedList
const toolsTable = ({ tools }: { tools: tool[] }) => (
  <table>
    <thead>
      {/* table row */}
      <tr>
        {/* table head */}
        <TH>Ferramentas</TH>
        <TH>Descrições</TH>
      </tr>
    </thead>
    <tbody>
      {tools.map(tool => (
        // linha
        <tr>
          {/* table data */}
          <TD>{tool.name}</TD>
          <TD>{tool.description.map(player => player.name).join(', ')}</TD>
        </tr>
      ))}
    </tbody>
  </table>
)

const toolsList = () => {
  const [tools, settools] = useState<tool[]>([])
  console.log(tools)

  useEffectOnce(() => {
    get<tool[]>('tools').then(resp => settools(resp.data))
  })

  return (
    <>
      <h3>Times</h3>
      <toolsOl tools={tools} />
      <toolsUl tools={tools} />
      <toolsTable tools={tools} />
    </>
  )
}

export default toolsList