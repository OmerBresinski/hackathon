import styled from 'styled-components'

export const TextContainer = styled.div`
    color: ${props => props.color};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-size: ${props => props.size};
    font-family: Arial, Helvetica, sans-serif;
`

