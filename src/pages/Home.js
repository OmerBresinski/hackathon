import React from "react";
import header_right from "assets/header_right.png";
import header_left from "assets/header_left.png";
import * as S from "./style";

const Home = () => {
    return (
        <S.Home>
            <S.Header>
                <div
                    style={{
                        paddingBlockStart: "290px",
                        paddingInlineStart: "200px",
                    }}
                >
                    <img src={header_left} style={{ height: "305px" }} />
                </div>
                <div>
                    <img
                        src={header_right}
                        alt=''
                        style={{
                            height: "auto",
                            width: "100%",
                            marginInlineStart: "150px",
                            marginBlockStart: "-50px",
                        }}
                    />
                </div>
            </S.Header>
        </S.Home>
    );
};

export default Home;
