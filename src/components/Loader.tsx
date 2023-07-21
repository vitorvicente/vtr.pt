import React from "react";
import LoaderProps from "../types/LoaderProps";
import {LoaderWrapper, Spinner} from "../styles/LoaderStyles";

const Loader = ({ opacity }: LoaderProps) => (
    <LoaderWrapper opacity={opacity}>
        <Spinner />
    </LoaderWrapper>
);

export default Loader;