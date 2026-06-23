import { useLocalStorage } from "@uidotdev/usehooks";
import {DEFAULT_STATE} from "./state.ts";
import type {JSX} from "react";

function GmView(): JSX.Element  {
    const [state, setState] = useLocalStorage("messages", DEFAULT_STATE)

    return (
        <div></div>
    );
}

export default GmView
