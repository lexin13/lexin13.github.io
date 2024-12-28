import type { Meta, StoryObj } from '@storybook/react';
import style from "./TipStories.module.scss"

import { Tip } from './Tip';
import React from 'react';

const TipWrapper = () => (
    <div className={style["test-elements"]}>
        <Tip title="This is a button">
            <button className={style["element"]}>Button</button>
        </Tip>
        <Tip title="This is an input field">
            <input className={style["element"]} type="text" placeholder="Input field" />
        </Tip>
        <Tip title="This is a checkbox">
            <input className={style["element"]} type="checkbox" /> Checkbox
        </Tip>
        <Tip title="This is a link">
            <a className={style["element"]} href="#">Link</a>
        </Tip>
        <Tip title="This is a paragraph">
            <p className={style["element"]}>Paragraph text</p>
        </Tip>
        <Tip title="This is a paragraph" content={
            <>
                <p>Additional Paragraph 1 text</p>
                <p>Additional Paragraph 2 text</p>
                <a href="#">Link</a>
            </>
        }>
            <p className={style["element"]}>Tip with additional text</p>
        </Tip>
    </div>
)

const meta: Meta<typeof Tip> = {
    title: 'Example/Common/Tip',
    component: TipWrapper,
    tags: ['autodocs'],
};

export default meta;

export const Sample = {
};