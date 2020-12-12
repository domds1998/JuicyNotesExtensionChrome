import React from 'react';
import ReactDOM from 'react-dom';
import { Form, HighlighterWrapper, Title, TitleFormWrapper, TitleNoteLabel, Input, ButtonsWrapper, Button } from './views/Highlighter/ContentStyles';

const body = document.body;
let isOnDiv = false;

window.addEventListener('mouseup', event => {
    let selectedText = window.getSelection().toString();
    let mousePositionX = event.pageX;
    let mousePositionY = event.pageY;
    if (selectedText.length > 0 || selectedText !== "") {
        let parent = document.createElement('div');
        parent.id = "highlighterParent"
        let getParent = document.getElementById('highlighterParent');
        if (getParent == null) {
            renderParent(mousePositionX, mousePositionY, selectedText, parent);
        } else {
            body.removeChild(getParent);
            renderParent(mousePositionX, mousePositionY, selectedText, parent);
        }
    } else {
        let toDelete = document.getElementById('highlighterParent');
        if (toDelete != null) {
            body.removeChild(toDelete);
        }
    }
});


function renderParent(mousePositionX, mousePositionY, selectedText, parent) {
    ReactDOM.render(<Highlighter mousePositionX={mousePositionX} mousePositionY={mousePositionY} content={selectedText} />, parent);
    body.appendChild(parent);
    parent.addEventListener("mouseenter", function () { isOnDiv = true; console.log("true") });
    parent.addEventListener("mouseout", function () { isOnDiv = false; console.log("false") });
}

function Highlighter(props) {
    console.log(props.mousePositionX + " " + props.mousePositionY);
    return (
        <HighlighterWrapper top={props.mousePositionY + "px"} left={props.mousePositionX + "px"}>
            <Title>Dodaj notatkę</Title>
            <Form>
                <TitleFormWrapper>
                    <TitleNoteLabel>Tytuł:</TitleNoteLabel>
                    <Input width="100%" height="40px" type="text" isRightBordered></Input>
                </TitleFormWrapper>
                <Input width="100%" height="80px" type="text"></Input>
                <ButtonsWrapper>
                    <Button>Zrób fiszkę</Button>
                    <Button>+</Button>
                </ButtonsWrapper>
            </Form>
        </HighlighterWrapper>
    );
}
