import { useLocalStorage } from "@uidotdev/usehooks";
import {DEFAULT_STATE} from "./state.ts";
import type {JSX} from "react";

function PlayerView(): JSX.Element  {
    const [state, ] = useLocalStorage("messages", DEFAULT_STATE)

    return (
        <div></div>
    );
}

export default PlayerView
