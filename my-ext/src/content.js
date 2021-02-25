import React from 'react';
import ReactDOM from 'react-dom';
import { Form, HighlighterWrapper, Title, TitleFormWrapper, TitleNoteLabel, Input, ButtonsWrapper, Button } from './views/Highlighter/ContentStyles';

const body = document.body;

const addHighlighter = function (event) {
    let selectedText = window.getSelection().toString();
    let mousePositionX = event.pageX;
    let mousePositionY = event.pageY;
    let toDelete = document.getElementById('highlighterParent');

    let target = event.target;
    console.log(target.id);

    if (selectedText.length > 0 || selectedText !== "") {
        let parent = document.createElement('div');
        parent.id = "highlighterParent"
        let getParent = document.getElementById('highlighterParent');
        if (getParent == null) {
            renderParent(mousePositionX, mousePositionY, selectedText, parent);
        } else {
            if (target.id === parent.id) { } else {
                body.removeChild(getParent);
            }
        }
    } else {
        let toDelete = document.getElementById('highlighterParent');
        if (toDelete != null) {
            body.removeChild(toDelete);
        }
    }
}

window.addEventListener('mouseup', addHighlighter);


function renderParent(mousePositionX, mousePositionY, selectedText, parent) {
    ReactDOM.render(<Highlighter mousePositionX={mousePositionX} mousePositionY={mousePositionY} content={selectedText} />, parent);
    body.appendChild(parent);
    parent.addEventListener('mouseup', event => {
        event.stopPropagation();
    });
}

function Highlighter(props) {
    console.log(props.mousePositionX + " " + props.mousePositionY);

    const handleClick = e => {
        console.log("saassasa")
    }

    return (
        <HighlighterWrapper top={props.mousePositionY + 30 + "px"} left={props.mousePositionX + "px"}>
            <Title>Dodaj notatkę</Title>
            <Form>
                <TitleFormWrapper>
                    <TitleNoteLabel>Tytuł:</TitleNoteLabel>
                    <Input width="100%" height="40px" type="text" isRightBordered></Input>
                </TitleFormWrapper>
                <Input width="100%" height="80px" type="text" defaultValue={props.content}></Input>
                <ButtonsWrapper>
                    <Button>Zrób fiszkę</Button>
                    <Button onClick={handleClick}>+</Button>
                </ButtonsWrapper>
            </Form>
        </HighlighterWrapper>
    );
}
