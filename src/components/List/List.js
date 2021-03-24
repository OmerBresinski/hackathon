import Card from 'components/Card'
import React from 'react'
import * as S from './style'


function List(props) {
    console.log('aaa', props.items.filter((item) => props.searchString ? item.title.toLowerCase().includes(props.searchString.toLowerCase()) : item))
    return (
        <S.ListContainer>
    
            {props.items.filter((item) => props.searchString ? item.title.toLowerCase().includes(props.searchString.toLowerCase()) : item).map((item) => {
                console.log(item)
                return (<Card key={item.id} title={item.title} description={item.description} image={item.image} userProfileImage={item.userProfileImage} />)
            })}
        </S.ListContainer>
    )


}

export default List