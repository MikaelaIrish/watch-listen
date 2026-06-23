import type {JSX} from "react";

export interface MessageBlock {
    render(): JSX.Element
    style: string
}

export const DEFAULT_STATE: MessageBlock[] = []
