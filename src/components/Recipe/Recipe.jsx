import React from 'react'
import { Fragment } from 'react'
import RecipeSummary from './RecipeSummary';
import RecipePreparation from './RecipePreparation/RecipePreparation'

function Recipe() {
  return (
    <Fragment>
        <RecipeSummary/>
        <RecipePreparation/>
    </Fragment>
  )
}

export default Recipe