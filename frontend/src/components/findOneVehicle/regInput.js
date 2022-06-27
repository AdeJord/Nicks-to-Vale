import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
color: red
`

const regInput = () => {
    return (
        
        <Container>
            <div>
                Find one vehicle
            </div>
            <input name="regInput"placeholder="Enter Reg Here" />
            <button>Submit</button>
        </Container>
    );
}

export default regInput



