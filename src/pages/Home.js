import React from "react";
import header_right from "assets/header_right.png";
import header_left from "assets/header_left.png";
import who_are_we from "assets/who_are_we.png";
import our_process from "assets/our_process.png";
import Text from "components/Text";
import Projects from "components/Projects";
import * as S from "./style";

const Home = ({ projects }) => {
    return (
        <S.Home>
            <S.Header>
                <div
                    style={{
                        paddingBlockStart: "270px",
                        paddingInlineStart: "200px",
                    }}
                >
                    <img src={header_left} alt='' style={{ height: "305px" }} />
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
            <S.WhoAreWe>
                <S.WhoAreWeLeft>
                    <S.WhoAreWeLeftTop>
                        <Text size='50px' color='#3C3C3C'>
                            Who Are We
                        </Text>
                    </S.WhoAreWeLeftTop>
                    <S.WhoAreWeLeftBottom>
                        <Text size='18px' color='#8C8E96'>
                            We are a global platform for young people to develop
                            their projects. Through collaborative work of its
                            members, the exchanges that mature the
                            project.Discover business ideas, projects, startups
                            and young companies and their needs, Initiate
                            discussions with project owners, founders
                            entrepreneurs who are actively looking for
                            co-founders, business partners to start or
                            accelerate the development of their projects.
                        </Text>
                    </S.WhoAreWeLeftBottom>
                </S.WhoAreWeLeft>
                <S.WhoAreWeRight>
                    <img src={who_are_we} alt='' />
                </S.WhoAreWeRight>
            </S.WhoAreWe>
            <S.Dots>
                <S.Dot />
                <S.Dot />
                <S.Dot />
            </S.Dots>
            <S.Projects>
                <S.ProjectHeader>
                    <Text size='50px' color='#3C3C3C' bold>
                        Projects
                    </Text>
                    <Text size='20px' color='#3C3C3C'>
                        Access our network of projects and interesting
                        collaborations.
                    </Text>
                    <Projects projects={projects?.slice(0, 3)} />
                </S.ProjectHeader>
            </S.Projects>
            <div style={{ marginBlockStart: "140px", marginBlockEnd: "110px" }}>
                <img
                    src={our_process}
                    alt=''
                    style={{ maxWidth: "100vw", height: "auto" }}
                />
            </div>
        </S.Home>
    );
};

export default Home;
