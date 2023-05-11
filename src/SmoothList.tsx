import { ReactElement, createElement } from "react";

import { SmoothListContainerProps } from "../typings/SmoothListProps";

import ReactSmoothList from "react-smooth-list";

import "./ui/SmoothList.css";

export function SmoothList(props: SmoothListContainerProps): ReactElement {
    const { data, content, style, tabIndex, name } = props;
    if (data && data.status === "available" && data.items && content) {
        return (
            <div style={style} className={props.class} tabIndex={tabIndex} id={name}>
                <ReactSmoothList>{data.items.map(item => content.get(item))}</ReactSmoothList>
            </div>
        );
    }
    return <div style={style} className={props.class} tabIndex={tabIndex} id={name} />;
}
