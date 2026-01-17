import React from 'react'

export default async function Page({ params }) {
  const { id } = await params
  return (
    <div>
      <h1>meat item is {id}</h1>
    </div>
  )
}
