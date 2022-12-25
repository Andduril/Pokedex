import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PokemonListItem, { PokemonListItemProps } from "./PokemonListItem";

export default {
    title: 'components/PokemonListItem',
    component: PokemonListItem,
} as ComponentMeta<typeof PokemonListItem>;

const Template: ComponentStory<typeof PokemonListItem> = ({
    id
}: PokemonListItemProps) => {
    return (
        <PokemonListItem id={id}/>
    )
};

export const bulbasaur = Template.bind({});
bulbasaur.args = {
    id: 1,
};

export const error = Template.bind({});
error.args = {
    id: -1,
}