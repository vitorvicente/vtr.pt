import React, {useEffect} from 'react';
import RedirectProps from "../types/RedirectProps";
import Loader from "./Loader";

const RedirectPage = ({redirectLink}: RedirectProps) => {
    useEffect(() => {
        window.location.replace(redirectLink)
    }, [redirectLink])

    return (<Loader opacity={1} />);
}

export default RedirectPage;