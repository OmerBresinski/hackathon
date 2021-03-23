import Card from 'components/Card'
import React from 'react'
import * as S from './style'


function List(props) {
    return (
        <S.ListContainer>
            {props.items.filter((item) => props.searchString ? item.title.toLowerCase() === props.searchString.toLowerCase() : item).map((item) => {
                return (<Card key={item.id} title={item.title} description={item.description} image={item.image} />)
            })}
        </S.ListContainer>
    )


}

export default List