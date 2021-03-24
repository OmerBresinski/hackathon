import Card from "components/Card";
import React from "react";
import * as S from "./style";

function List(props) {
    return (
        <S.ListContainer>
            {props.items
                .filter((item) =>
                    props.searchString
                        ? item.title
                              .toLowerCase()
                              .includes(props.searchString.toLowerCase())
                        : item
                )
                .map((item) => {
                    return (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            userName={item.userName}
                            description={item.description}
                            image={item.image}
                            userProfileImage={item.userProfileImage}
                            role={item.role}
                            lookingFor={item.lookingFor}
                        />
                    );
                })}
        </S.ListContainer>
    );
}

export default List;
